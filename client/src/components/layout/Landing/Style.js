import styled from 'styled-components'

import  { colors } from '../../../theme/color'

export const Section = styled.section`
display:flex;
justify-content:center;

@media  (max-width: 767px) {
}
@media (min-width: 768px) and (max-width: 1280px) {
  
}
@media (min-width: 1281px) {

  .flex {
      width:80rem;
      display:flex;
      justify-content:space-between;
      margin-top:15rem;
       
         .flex-1 {
           
          
           width:30rem;
           img {
      width:100%;
           }
             
         }

         .flex-2 {
             padding-top:3rem;
             padding-bottom:3rem;
            display:flex;
      justify-content:space-between;
      flex-direction:column;
            
           width:37rem;
           text-align: left;
           .top {
               font-size:3rem;
               color:${colors.text.text1};
           }
           .mid {
               font-family: Cour;
              
               font-size: 2.6rem;

               border-bottom: 3px solid   ${colors.text.text};
               padding-bottom:3rem;
          
           }
           .btn {
            display:flex;
               justify-content:center;
           button {
            background-color: rgb(189 ,179 ,173);
    width: 24rem;
    height: 4rem;
    border: none;
    font-size: 2rem;
    color: rgb(16,18,15);
    font-weight: 1000;
    font-family: Cour;
    box-shadow: 10px 10px #888888;
           }
         }
   

  }
       

   
   
    
}
`