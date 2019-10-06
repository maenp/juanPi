import {handleActions} from 'redux-actions'
const defaultState={
    goodsList:[],
    goodsSort:'',
    headHide:true
}


export default handleActions({
    goods_list:(state,action)=>{
        let newGoods=Object.assign({},state);
        newGoods.goodsList=action.payload.data.list
        return {...newGoods}
    },
    goods_list_add:(state,action)=>{
        let newGoods=Object.assign({},state);
        newGoods.goodsList=newGoods.goodsList.concat(action.payload.data.list)
        console.log(newGoods.goodsList)
        return {...newGoods}
    },
    list_head:(state,action)=>{
        let newGoods=Object.assign({},state);
        newGoods.headHide=action.payload.Hide
        return {...newGoods}
    }
},defaultState)