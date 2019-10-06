import React, { Component } from 'react'
import { GoodsListSty } from './styled';
import connect from './connect'
import BScroll from '@common/bscroll'
import {Link} from 'react-router-dom'
// import {GOODS_LIST} from '@actions/actionCreate'
// import {connect} from 'react-redux'
@connect
class GoodsList extends Component {
    constructor(){
        super()
        this.state={
            page:1,
            goToHide:false
        }
    }
    render() {
        let { goodsList } = this.props.prop
        let {goToHide}=this.state
        return (
            <GoodsListSty>
                <BScroll ref="bscroll">
                <ul>
                    {
                        goodsList.map((t, i) => (
                            <Link to={'/goods/'+t.goods_id} key={i}>
                                <img src={t.pic_url} />
                                <span>￥{t.cprice}</span>
                                <span>￥{t.oprice}</span><br />
                                <span>{t.title}</span>
                            </Link>
                        ))
                    }

                </ul>
                <div className='iconfont goTo'
                style={{display:goToHide?'block':'none'}}
                onClick={this.goToHandler.bind(this)}
                >{'\ue604'}</div>
                </BScroll>
            </GoodsListSty>
        )
    }
    componentDidMount() {
        this.props.dataHandler(this.state.page++)
        this.refs.bscroll.pullUpLoadHandler(async ()=>{
            let data=await this.props.dataHandler(this.state.page++)
            if(data)this.refs.bscroll.UpLoadFinishhHandler()

            
        })
        this.refs.bscroll.headerHideHandler(({x,y})=>{
            let goToHide
            if(y<-100){
                this.headHide=true
                goToHide=true
            }else{
                this.headHide=false
            }
            this.props.headerHideDphHandler(this.headHide)
            this.setState({
                goToHide
            })
        })
    }
    goToHandler(){
        this.refs.bscroll.goToHandler()
    }
}
export default GoodsList

// const mapDispatchToProps = (dispatch) => {
//     return {
//         dataHandler: () => {
//             dispatch(GOODS_LIST())
//         }
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         prop: state.prop
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(GoodsList)

