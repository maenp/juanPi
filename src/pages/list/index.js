import React, { Component } from 'react'
import {list_goods} from '@api/sortList'
import HeaderList from '@common/header_list'
import HeaderListSort from '@common/header_list_sort'
import GoodsList from '@common/goodsList'
export default class List extends Component {
    render() {
        let title=this.props.location.pathname.split(/\//)[3]
        return (
            <div>
                <HeaderList title={title} {...this.props}/>
                <HeaderListSort/>
                <GoodsList/>
            </div>
        )
    }
    async componentDidMount(){
        let id=this.props.location.pathname.split(/\//)[2]
        let data= await list_goods(id)
    }
}
