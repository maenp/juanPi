import {connect} from 'react-redux'
import {GOODS} from '@actions/actionCreate'

const mapStateToProps = (state) => {
    return {
        goods: state.goods
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDataHandler: (id) => {
            dispatch(GOODS(id))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)