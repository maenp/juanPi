import React, { Component } from 'react'
import { SwiperContainer } from './styled'



class Swiper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            len: 0,//图片个数
            countWidth: 0,//总宽度
            imgIndex: 0,//图片下标
            spotIndex: 0,//指示点下标
            //无缝轮播的盒子
            newSwiper: [],
            activeIndex: 0
        }
        this.state.len = this.props.swiperImg.length
        this.state.newSwiper = [...this.props.swiperImg, this.props.swiperImg[0]]
    }
    render() {
        let { newSwiper, len, activeIndex } = this.state
        return (
            <SwiperContainer ref='swiper'>
                <div className='swiper_content'
                    ref='swiperImg'
                    style={{ width: (len + 1) * 100 + '%' }}>
                    {
                        newSwiper.map((t, i) => (
                            <div key={i}>
                                <img src={t.pic} alt='banner' />
                            </div>
                        ))
                    }
                </div>
                <div className='swiper_spot'>
                    {
                        this.props.swiperImg.map((t, i) => (
                            <div key={i}
                                className={activeIndex === i ? 'active' : ''}
                            ></div>
                        ))
                    }
                </div>
            </SwiperContainer>
        )
    }
    componentDidMount() {
        if (this.refs.swiperImg) {
            this.handlerInit()
            this.touchInitHandler()
            this.touchMoveHandler()
            this.touchEndHandler()
        }
    }
    componentWillUnmount() {
        clearTimeout(this.time)
        this.setState = (state, callback) => {
            return;
        };
    }
    handlerInit() {
        this.swiperImg_W = this.refs.swiper.offsetWidth;//单个图片宽度
        this.aotuplay()
    }
    aotuplay() { //自动轮播
        this.timer = setInterval(() => {
            if (!this.refs.swiperImg) clearInterval(this.timer)//防止跳转页面后出错
            if (this.state.imgIndex === this.state.len) {
                this.setState({ //异步
                    imgIndex: 1
                })
                this.refs.swiperImg.style.left = 0//这里一定要先归零
                this.refs.swiperImg.style.transition = 'none'

            } else {
                this.setState({ //异步
                    imgIndex: ++this.state.imgIndex
                })
            }
            //为了让上面都走完了再走这一步，让left归 0
            this.time = setTimeout(() => { //由于上面的变化都是异步的所以这里也必须是异步的
                this.toImg()
            }, 0)
        }, 3000)
    }
    toImg() { //轮播的核心原理
        if (!this.refs.swiperImg) return//---------
        this.refs.swiperImg.style.transition = 'left 0.2s ease-in-out'
        this.refs.swiperImg.style.left = -(this.state.imgIndex * this.swiperImg_W) + 'px'
        this.setState({ //小圆点
            activeIndex: this.state.imgIndex === this.state.len ? 0 : this.state.imgIndex
        })
    }
    touchInitHandler() {
        console.log(this.refs.swiperImg)
        this.refs.swiperImg.addEventListener("touchstart", (e) => {
            clearInterval(this.timer)
            this.disX = e.targetTouches[0].clientX;
            this.refs.swiperImg.style.transition = 'none'
        })
    }
    touchMoveHandler() {
        this.refs.swiperImg.addEventListener('touchmove', e => {
            e.preventDefault();
            this.moveX = e.targetTouches[0].clientX;
            this.distanceX = this.moveX - this.disX;
            console.log(this.distanceX)
            if (this.distanceX > 0 && this.state.imgIndex === 0) {
                this.refs.swiperImg.style.left = -(this.swiperImg_W * this.state.len) + this.distanceX + 'px';
            } else if (this.distanceX < 0 && this.state.imgIndex === this.state.len) {
                this.refs.swiperImg.style.left = this.distanceX + 'px';
            } else {
                this.refs.swiperImg.style.left = -(this.swiperImg_W * this.state.imgIndex) + this.distanceX + 'px';
            }
        })
    }
    touchEndHandler() {
        this.refs.swiperImg.addEventListener('touchend', e => {
            if (Math.abs(this.distanceX) > this.swiperImg_W / 5) {
                if (this.distanceX > 0) { //上一张===向右划 --->
                    if (this.state.imgIndex === 0) {
                        this.setState({
                            imgIndex: this.state.len - 1
                        })
                        // this.refs.swiperImg.style.left = -(this.state.len * this.swiperImg_W) + 'px'
                    } else {
                        this.setState({
                            imgIndex: --this.state.imgIndex
                        })
                    }
                } else { //下一张===向左划  <---
                    if (this.state.imgIndex === this.state.len) {
                        this.setState({
                            imgIndex: 1
                        })
                        this.refs.swiperImg.style.transition = 'none'
                        // this.refs.swiperImg.style.left = 0+ 'px'
                    } else {
                        this.setState({
                            imgIndex: ++this.state.imgIndex
                        })
                    }
                }
                this.toImg();
            } else {
                if (this.state.imgIndex === 0) {
                    this.refs.swiperImg.style.left = 0
                } else if (this.state.imgIndex === this.state.len) {
                    this.refs.swiperImg.style.left = -(this.swiperImg_W * this.state.len) + 'px'
                } else {
                    this.refs.swiperImg.style.left = -(this.state.imgIndex * this.swiperImg_W) + 'px'
                }
            }
            this.aotuplay()
        })
    }
}

export default Swiper;
