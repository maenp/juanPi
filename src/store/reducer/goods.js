import {handleActions} from 'redux-actions'
const defaultState={
    skudata:{}
}

export default handleActions({
    goods:(state,action)=>{
        let newGoods=Object.assign({},state);
        newGoods.skudata=action.payload.data
        console.log(action)
        return {...newGoods}
    }
},defaultState)