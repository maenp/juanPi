import React, { Component } from 'react'
import { post, get } from '@utils/http'

export default class Mine extends Component {
    render() {
        return (
            <div>
                我的
            </div>
        )
    }
    async componentDidMount(){
        // var data=await get('cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1569584661375&callback=jsonp1')
        // console.log(data,999)
    }
    
}
