import React, { Component } from 'react'
import {PageContainer} from './../../globalStyled'
import Header from '@common/mineHeader'

export default class Mine extends Component {
    render() {
        return (
            <PageContainer>
                <Header title='个人中心' 
                style={{
                    border:'none'
                }}
                />
                我的
            </PageContainer>
        )
    }

    
}
