import styled from 'styled-components'

export const GoodsSty = styled.div`
    .goodsImg{
        width:100%;
        img{
        width:100%;
        height:auto;
        }
    }
    .titie{
        background:#fff;
        padding:.12rem .14rem;
        padding-bottom:.19rem;
        span:nth-of-type(1){
            color: #ff464e;
            font-size:.24rem;
        }
        span:nth-of-type(2){
            color: #bbbbbb;
            font-size:.12rem;
            text-decoration:line-through;
            margin-left:.1rem;
        }
        span:nth-of-type(3){
            color: #fff;
            font-size:.12rem;
            background:#ff464e;
            padding:1px 2px;
            line-height:1;
            vertical-align: inherit;
            margin-left:.1rem;
        }
        span:nth-of-type(4){
            color: #bbbbbb;
            font-size:.12rem;
            line-height:20px;
            display: block;
            float:right;
            margin-top:.1rem;
        }
        p{
            margin-top:.1rem;
            font-size:.16rem;
        }
        button{
            height: .24rem;
            width: .24rem;
            border: none;
            flex-shrink: 0;
            background: url('https://web.juanpi.com/static/media/collect.f8400f03.png') no-repeat;
            background-size: 100% 100%;
            float:right;
            margin-top:9px;
            margin-right:-.77rem;
        }
    }
    .sale{
        background:#fff;
        border-top:.1rem solid rgb(244, 244, 248);
        border-bottom:.1rem solid rgb(244, 244, 248);
        height: .68rem;
        line-height:.48rem;
        ul{
            overflow:hidden;
            color:#666;
            font-size:.1rem;
        padding-right:.1rem;
            li{
                list-style:disc;
                float:left;
                margin-left:.3rem;
            }
            span{
            font-size:.22rem;
                float:right;

            }
        }
    }
    .my-drawer {
    position: relative;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    }
    .my-drawer .am-drawer-sidebar {
    background-color: #fff;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    }
    .my-drawer .am-drawer-sidebar .am-list {
    width: 300px;
    padding: 0;
    }
    .am-list{
        width:100% !important;
    }
    .saleTo{
        padding:.13rem .1rem;
        font-size:.16rem;
        text-align:center;
        border-bottom:1px solid #ebebeb;
    }
    .saleCentent{
        li{
            padding-top:.1rem;
            list-style:disc;
            font-size:.14rem;
            color: #4a4a4a;
            margin-left:.25rem;
        }
        span{
            font-size:.12rem;
            display: block;
            padding:.05rem .25rem .1rem;
            border-bottom:1px solid #ebebeb;
            color: #9b9b9b;
            text-align: left;
        }
        div{
            width: 100%;
            background-color: #ff464e;
            color: #fff;
            text-align: center;
            font-size:.18rem;
            height: .48rem;
            line-height:.48rem;
        }
    }
    .menu{
        height: .3rem;
        width:.3rem;
        position:absolute;
        right:.1rem;
        top:.1rem;
        border-radius:50%;
        background: rgba(0,0,0,0.3);
        color:#fff;
        text-align:center;
        line-height:.3rem;
        font-size:.2rem;
        ul{
            top:.38rem;
            right:-.1rem;
            position: absolute;
            background:rgba(0,0,0,0.7);
            font-size: .14rem;
            border-radius: 3px;
            text-align:left;
            display: none;
            a{
                width:1rem;
                color:#fff;
                margin-left: .10rem;
                margin-right: .10rem;
                border-bottom: 1px solid #666;
                display: block;
            }
            p{
                position: absolute;
                top:-.14rem;
                right:.18rem;
                border:.07rem solid rgba(0,0,0,0);
                border-bottom:.07rem solid rgba(0,0,0,0.7);
            }
        }
    }
    
        
`