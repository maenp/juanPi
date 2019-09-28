import React, { Component } from 'react'
import { SortListSty } from './styled'
import { connect } from 'react-redux'
import { SORT_LIST,LIST_NAME } from '@actions/actionCreate'
import { Link } from 'react-router-dom'


class SortList extends Component {
    render() {
        let List = this.props.sortList.soltList
        let sortName = this.props.sortList.sortName
        let rightList = List.filter(t => t.id === sortName)
        return (
            <SortListSty>
                <div className='left'>
                    <ul ref='leftList'>
                    {
                    List.map((t) => (
                    <li
                    onClick={this.props.sortNameHandler.bind(this, t.id)}
                    key={t.id}>{t.name}</li>
                        ))
                        }
                    </ul>
                </div>
                <div className='right'>
                <ul>
                {
                rightList[0]?rightList[0].secondCateList.map(t => (
                    <Link to={'/list/'+t.id+'/'+t.name} key={t.id}>
                        <div className='icon' style={{
                            display:t.icon_type==='0'?'none':'block',
                            backgroundColor:t.icon_type==='2'?'#5698f3':'#ff464e'
                        }}>{t.icon_type==='1'?'HOT':'NEW'}</div>
                        <img src={'//s2.juancdn.com'+t.icon} />
                        <span>{t.name}</span>
                    </Link>
                )):""
                }
                </ul>
                </div>
            </SortListSty>
        )
    }
    async componentDidMount() {
        await this.props.grtSortList()
        console.log('收到数据')
    }
}
const mapStateToProps = (state) => {
    return {
        sortList: state.sortList
    }
}
const mapDispatchToProps = (dispatch) => ({
    grtSortList: () => {
        dispatch(SORT_LIST())
    },
    sortNameHandler: function (id, e) {
        dispatch(LIST_NAME(id))
        // console.log()
        if (!this.pre) this.pre = this.refs.leftList.children[0]
        Object.assign(this.pre.style, {
            backgroundColor: '#f9f9f9',
            color: '#333',
            borderLeft: '4px solid #f9f9f9',
        })
        Object.assign(e.target.style, {
            backgroundColor: '#fff',
            color: '#ff464e',
            borderLeft: '4px solid #ff464e',
        })
        this.pre = e.target
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SortList)
