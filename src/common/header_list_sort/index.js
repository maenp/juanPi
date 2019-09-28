import React, { Component } from 'react'
import { ListSortSty } from './styled'
export default class ListSort extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                {
                    id: 1,
                    name: '推荐'
                },
                {
                    id: 2,
                    name: '价格',
                    icon: '\ue60b'
                },
                {
                    id: 3,
                    name: '销量',
                },
                {
                    id: 4,
                    name: '上新',
                },
                {
                    id: 5,
                    name: '筛选',
                    icon: '\ue67f'
                },
            ]
        }
    }
    render() {
        return (
            <ListSortSty>
                <ul ref='soreOne'>
                    {
                        this.state.list.map(t => (
                            <li key={t.id}
                                className='iconfont'
                                onClick={this.sortHandler.bind(this)}>
                                {t.name}{t.icon ? ' ' + t.icon : ''}</li>
                        ))
                    }
                </ul>
            </ListSortSty>
        )
    }
    sortHandler(e) {
        if (!this.pre) this.pre = this.refs.soreOne.children[0]
        this.pre.style.color = '#666'
        e.target.style.color = '#ff464e'
        this.pre = e.target
    }
}
