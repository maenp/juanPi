import styled from 'styled-components'
export const GoodsListSty = styled.div`
    width:100%;
    height: 100%;
    ul{
        padding-bottom:.82rem;
        display: flex;
        flex-wrap:wrap;
        justify-content:space-between;
        a{
            width:49.6%;
            height: 2.37rem;
            img{
                width:100%;
                height: auto;
            }
            span{
                display: inline-block;
                height: .2rem;
                line-height:.2rem;
            }
            span:nth-of-type(1){
                margin-top:.05rem;
                font-size: .15rem;
                color: #ff464e;
                margin-right:.04rem;
                margin-left:.09rem;
            }
            span:nth-of-type(2){
                font-size: .12rem;
                color: #bbb;
                text-decoration: line-through;
                vertical-align: 1px;
            }
            span:nth-of-type(3){
                vertical-align: 1px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #777;
                margin-left:.1rem;
                width:80%;
            }
        }
    }
    .goTo{
        height: .42rem;
        width:.42rem;
        border-radius:50%;
        position: absolute;
        right:.1rem;
        bottom:.1rem;
        background:#fff;
        text-align:center;
        line-height:.42rem;
        font-size:.2rem;
    }
`