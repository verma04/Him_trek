import styled from 'styled-components'

import { colors} from '../../../../theme/color';

export const  Slider = styled.div`
  display:flex;
  justify-content:center;
   margin-top:1rem;
margin-bottom:1rem;
  .center {
    width:100%;
    -webkit-box-shadow: 0 1rem 6px -6px grey;
	   -moz-box-shadow: 0 1rem 6px -6px grey;
	        box-shadow: 0 1rem 6px -6px grey;
          .img-1 {
             background-color:white; 
            position: relative;
    .img-wrapper {

        width: 29rem;
    margin-left: 51rem;
      
    img {
      width:100%;
  
      
    }
   
    
   }
   .hero-section {
    top:1rem;
      position:absolute;
     
   h2 {
      
      color:#4E372A;
     
      text-align:left;
      margin-left:3rem;
   
      line-height:1.2;
    }
    button {
     
      background-color:white;
      border:none;
   
      border-radius:10%;
      margin-right:20rem;
      margin-top:0.5rem;
      padding: 0.5rem 1rem 0.5rem 1rem;
      
    
    }
          }
          }
     
  }

    
  @media (min-width: 1281px) {
       
    .center {
      margin-top:2rem;
      width:80rem;
      -webkit-box-shadow: 0 1rem 6px -6px grey;
	   -moz-box-shadow: 0 1rem 6px -6px grey;
	        box-shadow: 0 1rem 6px -6px grey;
          .img-1 {
            position: relative;
    .img-wrapper {
      box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);
    img {
      width:100%;
      height: 25rem;
    }
   
    
   }
   .hero-section {
    top:3.5rem;
      position:absolute;
      width:30rem;
   h2 {
    width: 33rem;
    color:#4E372A;
      font-size:2rem;
      text-align:left;
      margin-left:6rem;
      margin-top:3rem;
      line-height:1.2;
    }
    button {
      font-size:1.5rem;
      background-color:white;
      border:none;
      align-items:left;
      border-radius:10%;
      margin-left: 6rem;
      margin-right:20rem;
      margin-top:1rem;
      padding: 0.5rem 1rem 0.5rem 1rem;
      
    }
          }
          }
  }

  .carousel .control-dots .dot {
    transition: opacity .25s ease-in;
    opacity: .3;
    filter: alpha(opacity=30);
    box-shadow: 1px 1px 2px rgba(0,0,0,0.9);
    background: #fff;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    display: inline-block;
    margin: 0 8px;
}

  
  }

  `