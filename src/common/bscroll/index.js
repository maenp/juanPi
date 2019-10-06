import React, { Component } from 'react'
import BScroll from 'better-scroll'
import {BscrollSty} from './styled'
export default class Bscroll extends Component {
    render() {
        return (
            <BscrollSty ref='wrapper'>
                {this.props.children}
            </BscrollSty>
        )
    }
    componentDidMount(){
        this.scroll=new BScroll(this.refs.wrapper,{
            click:true,
            tap:true,
            pullUpLoad:true,
            mouseWheel: true,//开启滑轮滚动
            probeType:1,
            // pullDownRefresh:true
        })
    }
    //上拉
    pullUpLoadHandler(cb){
        this.scroll.on('pullingUp',cb)
    }
    UpLoadFinishhHandler(){
        //告诉better-scroll数据以经加载完毕了
        this.scroll.finishPullUp();
        //通知better-scroll重新计算高度
        this.scroll.refresh();
    }

    
    //下拉
    pullDownRefreshHandler(cb){
        this.scroll.on('pullingDown',cb)
    }
    
    DownRefreshFinishHandler(){
        this.scroll.finishPullDown();
        this.scroll.refresh();
    }
    headerHideHandler(cb){
        this.scroll.on('scroll',cb)
    }


    goToHandler(){//回到顶部
        this.scroll.scrollTo(0, 0, 500)
    }
}
