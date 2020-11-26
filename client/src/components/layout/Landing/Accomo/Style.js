import styled from 'styled-components'

import  { colors } from '../../../../theme/color'

export const Section = styled.section`
display:flex;
justify-content:center;
background-color:white;
padding-top:3rem;
padding-bottom:3rem;
@media  (max-width: 767px) {
}
@media (min-width: 768px) and (max-width: 1280px) {
  
}
@media (min-width: 1281px) {
margin-top:5rem;
 

 width:100%;

 height:40rem;
 background-image:url('https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373141/1__Page_09_Image_0001_yl8sfy.jpg');
 background-size: cover;
   background-position: center;
               background-repeat: no-repeat;

               .flex {
                width:100%;
                
              .flex-1 {
                
                   display:flex;
                   justify-content:center;
                 
                   height:30%;
                   

                   .head {
                    display:flex;
                   justify-content:space-between;
                   width:80rem;
                  h2 {
                      text-align:right;
                      color:white;
                      font-size: 8rem;
                  }
                   }
              }
              .flex-2 {
                
                   display:flex;
                   justify-content:center;
                   box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.3);
    height: 31rem;
                   width:100%;
                  .para {
                      width:80rem;
                     
                    display:flex;
                   justify-content:space-between;
                      
                      list-style:none;
                       ul {
                           height:100%;
                      display:flex;
                   justify-content:space-around;
                   flex-direction:column;
                  
            li {
                font-family: Cour;
                cursor: pointer;
    font-size: 2rem;
    width: 30rem;
    color: white;
            }
          
                  }
                  }
              }

               }
       

   
   
    
}
`