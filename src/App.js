import React, { Component, Fragment } from 'react'
import renderRoutes from '@utils/renderRoutes'
import { Routes } from '@router'
import { Switch, Redirect } from 'react-router-dom'
// import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          {renderRoutes(Routes)}
          <Redirect from='/' to='/home' />
        </Switch>
      </Fragment>
    )
  }
}

