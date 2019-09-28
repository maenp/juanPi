import React, { Component } from 'react'
import {Header_box} from './styled'
import {Link} from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <Header_box>
                <Link to='/search'>
                    <div className='input'>
                        <img src='//jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?f4e07c7d-1&sv=449ce9ee'/>
                        搜索商品
                    </div>
                </Link>
            </Header_box>
        )
    }
}
