import React, { Component } from 'react'
import {GoodsListSty} from './styled';
import {GOODS_LIST} from '@actions/actionCreate'
import {connect} from 'react-redux'
class GoodsList extends Component {
    render() {
        return (
            <GoodsListSty>
                商品列表
            </GoodsListSty>
        )
    }
    componentDidMount(){
        this.props.dataHandler()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dataHandler: () => {
            dispatch(GOODS_LIST())
        }
    }
}
const mapStateToProps = (state) => {
    return {
        prop: state.prop
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GoodsList)
