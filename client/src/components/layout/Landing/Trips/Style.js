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

  background-image:url('https://res.cloudinary.com/dzcmadjl1/image/upload/v1606535935/4_ntvg9g.png') , url('https://res.cloudinary.com/dzcmadjl1/image/upload/v1606535934/6_vqnjve.png') ;
    
   background-position: left bottom , right bottom;
              background-repeat: no-repeat , no-repeat;
              background-size: 10rem , 20rem;

  .flex {
      width:80rem;
    

       
         .flex-1 {
           width:100%;
  ul {
    display:flex;
    justify-content:center;
    li {
   
    font-size: 2.4rem;
    border-left: 4px solid ${colors.primary.grey};
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  
    }
    #first {
       border:none;
    }
  }
           
          
        
             
         }

         .flex-2 {
           
           display:flex;
           justify-content:center;
   padding-top:2rem;
   height:40rem;
           .flex-21 {
               padding:3rem;
              width:33%;
             
               background-image: url('https://res.cloudinary.com/dzcmadjl1/image/upload/v1606387474/photo-1568785919846-27fd1c8f8982_gmr3wj.jpg');
               background-position: center;
               background-repeat: no-repeat;
               background-size: cover;
               display:flex;
           justify-content:space-between;
             flex-direction:column;

             .head {
         
           h2 {
            display:flex;
           justify-content:center;
           font-size:2.4rem;
           color:white;
           }
           h3 {
             
            display:flex;
           justify-content:center;
           font-size:2rem;
           font-size:2.4rem;
           color:white;
           
           }
             }
             .bottom {
             
              h2 {
                display:flex;
           justify-content:center;
      
           background-color:white;
           padding-top:1rem;
           padding-bottom:1rem;
           font-size:1.5rem;
           border: 2px solid ${colors.primary.grey};
           cursor: pointer;

              }
             }

           }
           .flex-22 {
              
              width:67%;
             
              display:flex;
           justify-content:center;
           flex-direction:column;

           .top {
           
            height:50%;
            display:flex;
           justify-content:center;
           .top-1 {
           
             background-image:url('https://res.cloudinary.com/dzcmadjl1/image/upload/v1606388096/photo-1475483768296-6163e08872a1_qducmj.jpg');
           height:100%;
           width:100%;
           background-position: center;
               background-repeat: no-repeat;
               background-size: cover;
               display:flex;
           justify-content:center;
             flex-direction:column;
             h2 {
               display:flex;
               justify-content:center;
               font-size:2.4rem;
               color:white;
             }
           }
           .top-2 {
           
            background-image:url('https://res.cloudinary.com/dzcmadjl1/image/upload/v1606388089/photo-1496080174650-637e3f22fa03_h22tin.jpg');
            background-position: center;
            height:100%;
           width:100%;
               background-repeat: no-repeat;
               background-size: cover;
               display:flex;
           justify-content:center;
             flex-direction:column;
             h2 {
              padding-left: 6rem;
    font-size: 2.4rem;
    width: 9rem;
    text-align: center;
    color:white;
               font-size:2.4rem;
             }
           }
           
           }
           .bottom {
           
            height:50%;
             background-image: url('https://res.cloudinary.com/dzcmadjl1/image/upload/v1606387925/photo-1496165493909-5494251d69f7_ijom32.jpg');
             background-position: center;
               background-repeat: no-repeat;
               background-size: cover;
               display:flex;
           justify-content:center;
           flex-direction:column;
           h2 {
               display:flex;
               justify-content:center;
               font-size:2.4rem;
               color:white;
              
             }
           
           }
              

           }
        
   

  }
       

   
   
    
}
}
`
