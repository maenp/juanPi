import styled from 'styled-components'

export const HeaderListSty = styled.div`
    height: .44rem;
    display:flex;
    justify-content:space-between;
    width: 100%;
    line-height: .44rem;
    font-size: .18rem;
    padding: 0 .1rem;
    background: #fff;
    position: relative;
    top:0;
    border-bottom: 1px solid #ebebeb;
    i:nth-of-type(2){
        margin-left:.1rem;
    }
    i{
        font-size:.2rem;
    }
    span{
        margin-left:.32rem;
    }
    div{
        ul{
            display: none;
            top:.44rem;
            right:0;
            position: absolute;
            background:rgba(0,0,0,0.7);
            font-size: .14rem;
            border-radius: 3px;
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
                right:.14rem;
                border:.07rem solid rgba(0,0,0,0);
                border-bottom:.07rem solid rgba(0,0,0,0.7);
            }
        }
    }
`