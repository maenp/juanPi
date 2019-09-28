import {createAction} from 'redux-actions'
import {sort_list} from '@api/sortList'
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



