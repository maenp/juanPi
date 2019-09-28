import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import TabBar from '@common/tabBar'
export default (routes) => {
    const eashChildrenRoute = (route) => {
        return <Route path={route.path} key={route.path} render={() => (
            <Fragment>
                <Route component={route.component} />
                <Redirect from={route.path} to={route.children[0].path} />
                <Switch>
                    {
                        route.children.map(child => {
                            if (child.children) {
                                return eashChildrenRoute(child)
                            } else {
                                if (sessionStorage.getItem('token') || child.path === '/login' || 1) {
                                    return <Fragment key={route.path}>
                                        <Route path={child.path}  component={child.component} />
                                        <TabBar {...child.meta}></TabBar>
                                    </Fragment>
                                } else {
                                    return <Redirect to={{ pathname: '/login', state: { from: child.path } }} />
                                }
                            }
                        })
                    }
                </Switch>
            </Fragment>
        )} />
    }
    return routes.map(route => {
        if (route.children) {
            return eashChildrenRoute(route)
        } else {
            return <Route path={route.path} key={route.path} render={(props) => {
                if (sessionStorage.getItem('token') || route.path === '/login' || 1) {
                    return <Fragment key={route.path}>
                        <route.component {...props}/>
                        <TabBar {...route.meta}></TabBar>
                    </Fragment>

                } else {
                    return <Redirect to={{ pathname: '/login', state: { from: route.path } }} />

                }
            }} />
        }
    })
}