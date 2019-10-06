import styled from 'styled-components'
export const SwiperContainer=styled.div`
    width:100%;
    min-height:.2rem;
    position: relative;
    overflow:hidden;
    .swiper_content{
        display:flex;
        position: relative;
        z-index:4;
        left:0;
        transition:left .2s ease-in-out;
        div{
            width:100%;
            img{
            width:100%;
            height: auto;

            }
        }
    }
    .swiper_spot{
        width:100%;
        display:flex;
        justify-content:center;
        position:absolute;
        z-index:5;
        bottom:0;
        /* left:0;
        right:0;
        margin: 0 auto; */
        div{
            width:.05rem;
            height: .05rem;
            background:#fff;
            border-radius:50%;
            margin:.05rem;
          
        }
        .active{
            background:#000;
        }
    }
`