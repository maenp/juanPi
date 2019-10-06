import styled from 'styled-components'

export const SortListSty = styled.div`
    width:100%;
    overflow: hidden;
    .left{
        width:25%;
        float:left;
        color: #333;
        font-size: .14rem;
        background: #f9f9f9;
        ul{
            width:100%;
            li{
                box-sizing:border-box;
                width:100%;
                height:.45rem;
                line-height:.45rem;
                padding-left:.15rem;
                border-bottom: 1px solid #ebebeb;
                border-left: 4px solid #f9f9f9;
                cursor: pointer;
            }
            li:nth-of-type(1){
                border-left: 4px solid #ff464e;
                background-color: #fff;
                color: #ff464e;
            }
        }
    }
    .right{
        box-sizing:border-box;
        width:75%;
        float:right;
        background:#fff;
        ul{
            display:flex;
            flex-wrap:wrap;
            a{
                min-height:.87rem;
                position: relative;
                cursor: pointer;
                width:33.33%;
                padding:0 .13rem;
                img{
                    width:100%;
                    height: auto;
                }
                span{
                    display:block;
                    width:100%;
                    text-align: center;
                    font-size: .12rem;
                }
                .icon{
                    width:.3rem;
                    height:.3rem;
                    border-radius:50%;
                    position: absolute;
                    top:0;
                    right:.13rem;
                    background:#ff464e;
                    line-height: .3rem;
                    font-size: .1rem;
                    text-align: center;
                    color: #fff;
                }
            }
            
        }
    }
`