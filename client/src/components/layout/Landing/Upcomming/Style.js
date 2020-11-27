import styled from 'styled-components'

import { colors} from '../../../../theme/color';


export const  Section = styled.div`


    
  @media (min-width: 1281px) {

    display:flex;
    justify-content:center; 
 .flex {
   width:80rem;

   .slick-slider {
    position: relative;
    display: block;
    width: 30rem;
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
  height: 30rem
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
    margin-left: -51rem;
    margin-bottom: 5rem;
}
.slick-prev {
    position: absolute;
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 71%;
    display: block;
    width: 32px;
    height: 26px;
    border-radius: 50%;
    padding: 0;
    transform: translate(0, -50%);
    box-shadow: 5px 10px rgb( 249, 248, 246) ;
    cursor: pointer;
    color:#888888;;
    border: none;
    outline: none;
    margin-top: 4rem;
    background: #888888;
    
    margin-left: -50rem;
}
 .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 84%;
    display: block;
    width: 32px;
    height: 26px;
    border-radius: 50%;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color:#888888;;
   
    box-shadow: 5px 10px rgb( 249, 248, 246) ;
    outline: none;
    background: #888888;
    position: absolute;
    margin-right: 54rem;
}

.slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 20px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
    box-shadow: 5px 10px rgb( 249, 248, 246) ;
    border: 0;
    outline: none;
   
    background: #888888;
    color: #888888
}

.slick-dots li {
  
    display: inline-block;
    width: 50px;
    height: 20px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
}


 }

  
  }

  `