import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { homeApi } from '@api/sortList'
import Swiper from '@lib/swiper'


const mapStateToProps = (state) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        getData: async () => {
            let data = await homeApi()
            return data.adsRes.slide_ads.config.slide
        }
    }
}
@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {
    constructor() {
        super()
        this.state = {
            swiperData: []
        }
    }
    render() {
        let { swiperData } = this.state
        return (
            swiperData.length === 0 ? "" :
                <Fragment>
                    <Swiper swiperImg={swiperData}></Swiper>
                </Fragment>
        )
    }
    async componentDidMount() {
        let data = await homeApi()
        let swiperData = data.adsRes.slide_ads.config.slide
        this.setState({
            swiperData
        })
    }
}

export default Home;
