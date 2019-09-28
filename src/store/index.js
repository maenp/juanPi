import {createStore,combineReducers,applyMiddleware} from 'redux'
import sortList from './reducer/sortList'
import reduxThunk from 'redux-thunk'
const reducer=combineReducers({
    sortList
})

export default createStore(reducer,applyMiddleware(reduxThunk))
