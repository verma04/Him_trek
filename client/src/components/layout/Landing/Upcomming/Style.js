import styled from 'styled-components'

import { colors} from '../../../../theme/color';


export const  Section = styled.div`


    
  @media (min-width: 1281px) {

    display:flex;
    justify-content:center; 
 .flex {

  background-image:url('https://res.cloudinary.com/dzcmadjl1/image/upload/v1606406775/Road_trip_q221ul.png');
   
   background-position: center;
              background-repeat: no-repeat;
   width:80rem;
   height:40rem;
   margin-top:5rem;
   position: relative;
   padding-bottom:3rem;

   .slick-slider {
    position: relative;
    display: block;
    width: 30rem;
    height:35rem;
    margin-top:3rem;
    margin-left: 50rem;
    box-sizing: border-box;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}
img {
  height: 39rem;
  width: 37rem;
}
.slick-dots {
    position: absolute;
    bottom: -25px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    margin-left: -47rem;
    margin-bottom: 3rem;
}
.slick-prev {
  font-size: 0;
    line-height: 0;
    position: absolute;
    top: 83%;
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    padding: 0;
    -webkit-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    transform: translate(0,-50%);
    box-shadow: 5px 10px rgb( 249,248,246);
    cursor: pointer;
    color: #888888;
    border: none;
    outline: none;
    margin-top: 4rem;
    background: #888888;
    margin-left: -48rem;
}
 .slick-next {
  font-size: 0;
    line-height: 0;
    position: absolute;
    top: 95%;
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    padding: 0;
    -webkit-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    transform: translate(0,-50%);
    cursor: pointer;
    color: #888888;
    box-shadow: 5px 10px rgb( 249,248,246);
    outline: none;
    background: #888888;
    position: absolute;
    margin-right: 48rem;
}

.slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
  
    padding: 5px;
    cursor: pointer;
    box-shadow: 5px 10px rgb( 249, 248, 246) ;
    border: 0;
    outline: none;
    width: 2rem;
    height: 2rem;
    border-radius:50%;
    background: #888888;
    color: #888888;
}

.slick-dots li {
  
    display: inline-block;
    width: 50px;
    height: 20px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
}

.slick-dots li button:before
{
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '';
    text-align: center;

    opacity: .25;
      color: red;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.slick-dots li.slick-active button:before
{
    opacity: .75;
     background-color: rgb(241 ,166 ,51);
     width:2rem;
     height:2rem;
     border-radius:50%
}
 .wrapper {
   width:30rem;
   img {
 width:100%;
   }
   
 }

 #lll {
   position:absolute;
   top:0;
 }
  
  .data {
    position: absolute;
    width:40rem;
    height:30rem;
    top:0;

  
    .data-1 {
      
      border-bottom: 5px solid #667079;
      width:100%;
      height:100%;
      display:flex;
       justify-content:space-evenly;
       flex-direction: column;
       h3 {
        font-size: 2rem;
    font-weight: 1000
       }
       h2 {
        font-size: 4rem;
    font-weight: 1000
       }
       p{
        font-size: 2rem;
    line-height: 1.6;
  font-family: Cour;
       }
    }
  }
   .btn {
     bottom:0;
   position:absolute;
   right: 8rem
  }

 }

  
  }

  `