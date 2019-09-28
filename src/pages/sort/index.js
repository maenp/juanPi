import React, { Component } from 'react'
import { PageContainer } from "@/globalStyled"
import Header from '@common/header'
import SortList from '@components/sortList'
export default class Sort extends Component {
    render() {
        return (
            <PageContainer>
                <Header />
                <div style={{height:'100%',overflow:'scroll'}}>
                    <SortList />
                </div>
            </PageContainer>
        )
    }
}
