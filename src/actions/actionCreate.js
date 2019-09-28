import {createAction} from 'redux-actions'
import {sort_list,list_goods} from '@api/sortList'
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

const GOODS_LIST_ACTION=createAction('goods_list',(data)=>({data}))

export const GOODS_LIST=()=>{
    return async dispatch=>{
        let data=await list_goods()
        dispatch(GOODS_LIST_ACTION(data))
        console.log(data,'actions')
    }
}



