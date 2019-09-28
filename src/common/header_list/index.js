import React, { Component } from 'react'
import { HeaderListSty } from './styled'
import {Link} from 'react-router-dom'
export default class Header_list extends Component {
    constructor() {
        super()
        this.state = {
            meunList: [
                {
                    id:1,
                    icon: '\ue502',
                    name: "首页",
                    src:"/home"
                },
                {
                    id:2,
                    icon: '\ue509',
                    name: "我的收藏",
                    src:"/collect"
                },
                {
                    id:3,
                    icon: '\ue640',
                    name: "我的订单",
                    src:"/order"
                },
            ]
        }
    }
    render() {
        let { title } = this.props
        let { meunList } = this.state
        return (
            <HeaderListSty>
                <i
                    onClick={this.backHandler.bind(this)}
                    className="iconfont">{'\ue605'}</i>
                <span>{title}</span>
                <div>
                    <i
                        onClick={this.pushHandler.bind(this)}
                        className="iconfont">{'\ue616'}</i>
                    <i className="iconfont"
                        onClick={this.menuHandler.bind(this)}
                    >{'\ue60c'}</i>
                    <ul ref='meun'>
                        <p></p>
                        {
                            meunList.map(t=>(
                                <Link key={t.id} 
                                to={t.src} 
                                className="iconfont">
                                {t.icon} {t.name}</Link>
                            ))
                        }
                    </ul>
                </div>

            </HeaderListSty>
        )
    }
    backHandler() {
        this.props.history.goBack()
    }
    pushHandler() {
        this.props.history.push('/search')
    }
    menuHandler() {
        if (this.display) {
            this.refs.meun.style.display = 'block'
            this.display = 0
        } else {
            this.refs.meun.style.display = 'none'
            this.display = 1
        }
        // this.refs.menu.style.display='block'
    }
}
