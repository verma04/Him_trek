import styled from 'styled-components'

import  { colors } from '../../../../theme/color'

export const Section = styled.section`
display:flex;
justify-content:center;
margin-top:3rem;
background-color:white;
padding-top:3rem;
padding-bottom:3rem;
@media  (max-width: 767px) {
}
@media (min-width: 768px) and (max-width: 1280px) {
  
}
@media (min-width: 1281px) {

  background-image:url('https://res.cloudinary.com/dzcmadjl1/image/upload/v1606535935/2_kbstak.png') , url('https://res.cloudinary.com/dzcmadjl1/image/upload/v1606535935/3_owavlx.png') ;
   
   background-position: left bottom , right bottom;
              background-repeat: no-repeat , no-repeat;
              background-size: 10rem , 20rem;

  .flex {
      width:80rem;
    

       
         .flex-1 {
           width:100%;
           margin-bottom:2rem;
   
   h2 {
    display:flex;
           justify-content:center;
           font-size:3rem;
           font-weight:900;

   }
           
          
        
             
         }

         .flex-2 {
           
           display:flex;
           justify-content:center;
  height:40rem;
           .flex-21 {
   
   width:30%;
   background-image:url('https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373144/1__Page_07_Image_0003_rktiqk.jpg');
   background-size: cover;
   background-position: right;
               background-repeat: no-repeat;
               background-size: cover; 
               h2 {
                padding:2rem;
                color:white;
                font-weight:900;
                padding-top:33rem;
                font-size:2rem;
               }
              
   
   

           }
           .flex-22 {
          
            width:30%;
            background-image:url('https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373140/1__Page_07_Image_0001_qpwt1l.jpg');
            background-position: right;
               background-repeat: no-repeat;
               background-size: cover;
               margin-left:2rem;
               h2 {
                padding:2rem;
                color:white;
                font-weight:900;
                padding-top:33rem;
                font-size:2rem;
               }
               
           }

.flex-23 {

  width:30%;
  background-image:url('https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373141/1__Page_04_Image_0001_w6ejt2.jpg');
  background-position: right;
               background-repeat: no-repeat;
               background-size: cover;
               margin-left:2rem;    
               h2 {
                padding:2rem;
                color:white;
                font-weight:900;
                padding-top:33rem;
                font-size:2rem;
               }    
}

   

  }

  .btn {
    display:flex;
    justify-content: center;
    margin-top:2rem;
    button {
      color:white;
    }
  }
       

   
   
    
}
}
`
