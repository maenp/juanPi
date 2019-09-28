import React, { Component } from 'react'
import './css.css'
export default class index extends Component {
    render() {
        return (
            <div className='loading'>
                <div className='img'>
                    <div className='rotate'></div>
                        <img src='https://jp.juancdn.com/jpwebapp/images/icon/loading_bag.png' />
                    
                </div>
            </div>
        )
    }
}
