import React, { Component } from 'react'
import { HeaderListSty } from './styled'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { LIST_HEAD } from '@actions/actionCreate'
const mapStateToProps = (state) => {
    return {
        goodsList: state.goodsList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch1: () => {
            dispatch(LIST_HEAD())
        }
    }
}
@connect(mapStateToProps, mapDispatchToProps)
class Header_list extends Component {
    constructor() {
        super()
        this.state = {
            meunList: [
                {
                    id: 1,
                    icon: '\ue502',
                    name: "首页",
                    src: "/home"
                },
                {
                    id: 2,
                    icon: '\ue509',
                    name: "我的收藏",
                    src: "/collect"
                },
                {
                    id: 3,
                    icon: '\ue640',
                    name: "我的订单",
                    src: "/order"
                },
            ]
        }
    }
    render() {
        let { title, style } = this.props
        let { meunList } = this.state
        return (
            <HeaderListSty style={style}>
                <div className='head_top'>
                    <i
                        onClick={this.backHandler.bind(this)}
                        className="iconfont">{'\ue605'}</i>
                    <span>{title}</span>
                    <div style={{ width: '.5rem' }}>
                    </div>
                </div>
                <div className='head_bottom'>
                    <span>注册</span>
                    <span>|</span>
                    <span>登录</span>
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
            this.refs.meun.style.display = 'none'
            this.display = 0
        } else {
            this.refs.meun.style.display = 'block'
            this.display = 1
        }
    }
}
export default Header_list