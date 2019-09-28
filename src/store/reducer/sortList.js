import {handleActions} from 'redux-actions'
import {SORT_LIST_TYPE,LIST_NAME_TYPE} from '@actions/actionType'
const defaultState={
    soltList:[],
    sortName:"稍等"
}

export default handleActions({
    'sort_list_type':(state,action)=>{
        let newState=Object.assign({},state);
        newState.soltList=action.payload.data
        newState.sortName=action.payload.data[0].id
        console.log(newState,'reducer')
        return {...newState}
    },
    'list_name_type':(state,action)=>{
        let newState=Object.assign({},state);
        newState.sortName=action.payload.name
        console.log(newState,'reducer')
        return {...newState}
    },
    
},defaultState)