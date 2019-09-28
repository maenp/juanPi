import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from '@store'
import { HashRouter, Route } from 'react-router-dom'
import App from './App';


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route path='/' component={App}/>
        </HashRouter>
    </Provider>
    , document.getElementById('root'),
    () => { console.log('渲染成功') }
);

