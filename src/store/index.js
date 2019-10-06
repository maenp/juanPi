import {createStore,combineReducers,applyMiddleware} from 'redux'
import sortList from './reducer/sortList'
import goodsList from './reducer/goodsList'
import goods from './reducer/goods'
import reduxThunk from 'redux-thunk'
const reducer=combineReducers({
    sortList,
    goodsList,
    goods
})

export default createStore(reducer,applyMiddleware(reduxThunk))
