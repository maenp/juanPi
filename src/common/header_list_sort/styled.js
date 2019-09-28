import styled from 'styled-components'

export const ListSortSty=styled.div`
    ul{
        display: flex;
        justify-content:space-between;
        li{
            color: #666;
            height: .41rem;
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