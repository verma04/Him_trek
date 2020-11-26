import styled from 'styled-components'

import  { colors } from '../../../../theme/color'

export const Section = styled.section`
display:flex;
justify-content:center;
background-color:white;
padding-top:3rem;
@media  (max-width: 767px) {
}
@media (min-width: 768px) and (max-width: 1280px) {
  
}
@media (min-width: 1281px) {
margin-top:5rem;
  .flex {
      width:80rem;
      

      .flex-1 {
             
            display:flex;
            justify-content:space-between;
          
            .flex-11 {
                width:34rem;
                height: 22rem;
                padding:1rem;
                padding-top:2rem;
                

                 .top {
               font-size:3rem;
               color:${colors.text.text1};
               padding-bottom:2rem;
               border-bottom: 3px solid   ${colors.text.text};
           }
           .mid {
               font-family: Cour;
               padding-top:2rem;
               font-size: 2.6rem;

            
               padding-bottom:3rem;
          
           }

            }
            .flex-12 {
                width:50rem;
       
                 

            }

      }
      .flex-2 {
        position: relative;
           img {
           
               width:100%;
               height:100%;
           }
           button {
               position: absolute;
               top:7rem;
               left:2rem;
           }
      }
     

  }
       

   
   
    
}
`