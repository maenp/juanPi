import styled from 'styled-components'
export const TabBarWrapper=styled.div`
width:100%;
height:.5rem;
border-top:1px solid #ccc;
position:fixed;
bottom:0;
background:#fff;
ul,a{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
}
a{
    flex-direction:column;
    height:100%;
    width:30%;
    text-align:center;
    color: #8d8a8a;
    background-size: 30% 49% !important;
    font-size:.12rem;
    i{
        display:block;
        height:.22rem;
        width:.31rem
    }
}
.active{
    color: #008842;
}
`