import {createAction} from 'redux-actions'
import {sort_list,list_goods,goodsApi,homeApi} from '@api/sortList'
import {SORT_LIST_TYPE,LIST_NAME_TYPE} from './actionType'

const SORT_LIST_ACTION=createAction(SORT_LIST_TYPE,(data,type)=>({data,type}))

export const SORT_LIST=(type)=>{
    return async dispatch=>{
        let data= await sort_list()
        dispatch(SORT_LIST_ACTION(data,type))
    }
}

const LIST_NAME_ACTION=createAction(LIST_NAME_TYPE,(name)=>({name}))

export const LIST_NAME=(name)=>{
    return async dispatch=>{
        dispatch(LIST_NAME_ACTION(name))
    }
}

const GOODS_LIST_ACTION=createAction('goods_list_add',(data)=>({data}))

export const GOODS_LIST=(page)=>{
    return async dispatch=>{
        let data=await list_goods(page)
        dispatch(GOODS_LIST_ACTION(data))
        if(data) return true
    }
}

//控制商品列表头部是否隐藏
const LIST_HEAD_ACTION=createAction('list_head',(Hide)=>({Hide}))

export const LIST_HEAD=(headHide)=>{
    return dispatch=>{
        dispatch(LIST_HEAD_ACTION(headHide))
    }
}

//商品详情
const GOODS_ACTION=createAction('goods',(data)=>({data}))

export const GOODS=(id)=>{
    return async dispatch=>{
        let data =await goodsApi(id)
        dispatch(GOODS_ACTION(data.skudata))
    }
}

//首页数据
// const HOME_ACTION=createAction('goods',(data)=>({data}))

// export const HOME=(id)=>{
//     return async dispatch=>{
//         let data =await homeApi(id)
//         console.log(data)
//         // dispatch(HOME_ACTION(data))
//     }
// }



