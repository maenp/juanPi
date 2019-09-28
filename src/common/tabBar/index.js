import React, { Component } from 'react'
import { TabBarWrapper } from './styled'
import { tabBarRoute } from '@router'
import { NavLink } from "react-router-dom"
export default class TabBar extends Component {
    render() {
        return (
            <TabBarWrapper style={{display:this.props.tabBar?'block':'none'}}>
            <ul>
            {
            tabBarRoute.map(t => (
                <NavLink to={t.path} 
                activeStyle={{ background: 'url(//' + t.activeIcon + ') 50% 20% no-repeat' }}
                style={{ background: 'url(//' + t.icon + ') 50% 20% no-repeat' }}
                key={t.path}>
                    <i to={t.path} 
                    ></i>
                    <span>{t.name}</span>
                </NavLink>
            ))
            }
            </ul>
            </TabBarWrapper>
        )
    }
}
