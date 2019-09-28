import {handleActions} from 'redux-actions'
const defaultState={
    goodsList:[],
    goodsSort:''
}


export default handleActions({
    goods_list:(state,action)=>{
        let newGoods=Object.assign({},state);
        newGoods.goodsList=action.payload.list
        return {...newGoods}
    }
},defaultState)