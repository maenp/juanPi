import React, { Component, Fragment } from 'react'
import connect from './connect'
import { GoodsSty } from './styled'
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import Header from '@common/header_list'
import { Link } from 'react-router-dom'

@connect
class Goods extends Component {
  state = {
    open: false,
    position: 'bottom',
    meunList: [
      {
        id: 1,
        icon: '\ue502',
        name: "首页",
        src: "/home"
      },
      {
        id: 2,
        icon: '\ue509',
        name: "我的收藏",
        src: "/collect"
      },
      {
        id: 3,
        icon: '\ue640',
        name: "我的订单",
        src: "/order"
      },
    ]
  }
  onOpenChange = () => {
    this.setState({ open: !this.state.open });
  }
  render() {
    let data = this.props.goods.skudata
    const sidebar = (<List>
      <div className='saleTo'>服务说明</div>
      <ul className='saleCentent'>
        <li>24小时发货</li>
        <span>买家付款成功后，商家将在24小时内完成发货。（节假日等特殊情况除外）</span>
        <li>7天包退</li>
        <span>卷皮严格按照消费者保障服务，接受买家7天无理由退货。</span>
        <li>售后补贴</li>
        <span>商品存在问题时，请及时申请售后，卷皮将提供价值10元的退货运费补贴。如遇少件，错发，空包裹等情况，还额外提供至少10元的补偿（详见“客服中心”相关规则说明）。</span>
        <div onClick={this.onOpenChange}>我知道了</div>
      </ul>
    </List>);
    let { meunList } = this.state



    console.log(this.props, 111)
    return (
      <GoodsSty>
        {

          <Drawer
            className="my-drawer"
            style={{ minHeight: document.documentElement.clientHeight }}
            enableDragHandle
            sidebar={sidebar}
            open={this.state.open}
            position={this.state.position}
            onOpenChange={this.onOpenChange}
            touch={false}
          >
            {
              data.info ?
                <Fragment>
                  <div className='goodsImg'>
                    <i className="iconfont menu"
                      onClick={this.menuHandler.bind(this)}
                    >{'\ue60c'}
                      <ul ref='meun'>
                        <p></p>
                        {
                          meunList.map(t => (
                            <Link key={t.id}
                              to={t.src}
                              className="iconfont">
                              {t.icon} {t.name}</Link>
                          ))
                        }
                      </ul>
                    </i>
                    <img src={data.info.goods_origin_url} />
                  </div>
                  <div className='titie'>
                    <span>￥{data.info.fprice}</span>
                    <span>￥{data.info.oprice}</span>
                    <span>包邮</span>
                    <span>￥{data.info.join_number}</span><br />
                    <button></button>
                    <p>￥{data.info.goods_title}</p>
                  </div>
                  <div className='sale'>
                    <ul>
                      <li>24小时发货</li>
                      <li>7天包退</li>
                      <li>售后补贴</li>
                      <span
                        onClick={this.onOpenChange}
                        className='iconfont'>{'\ue60c'}</span>
                    </ul>
                  </div>
                </Fragment>
                : ''
            }
          </Drawer>
        }
      </GoodsSty>
    )
  }
  componentDidMount() {
    let { id } = this.props.match.params
    this.props.getDataHandler(id)
  }
  menuHandler() {
    
    if (this.display) {
      this.refs.meun.style.display = 'none'
      this.display = 0
    } else {
      this.refs.meun.style.display = 'block'
        this.display = 1
    }
  }
}
export default Goods
