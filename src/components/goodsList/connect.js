import {connect} from 'react-redux'
import {GOODS_LIST,LIST_HEAD} from '@actions/actionCreate'
const mapDispatchToProps = (dispatch) => {
    return {
        dataHandler: async (page) => {
            let dataEnd=await dispatch(GOODS_LIST(page))
          return dataEnd
        },
        headerHideDphHandler:(page) => {
            dispatch(LIST_HEAD(page))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        prop: state.goodsList
    }
}
export default connect(mapStateToProps,mapDispatchToProps)