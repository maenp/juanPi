import styled from 'styled-components'

export const ListSortSty=styled.div`
    width:100%;
    top:0rem;
    position: relative;
    background:#fff;
    z-index:10;
    ul{
        display: flex;
        justify-content:space-between;
        height: .41rem;
        li{
            color: #666;
            height: 100%;
            width:25%;
            text-align:center;
            line-height:.41rem;
            font-size: .14rem;
        }
        li:nth-of-type(1){
            color:#ff464e;
        }
    }
`