import React, { Component } from "react";


import { Section }  from './Style'

class Landing extends Component {
  render() {
    return (
      <Section>

        <div className='flex' >

               
        <div className='flex-1' >

           <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606369314/1__Page_01_Image_0001_ygp6at.jpg'} ></img>
         </div>  

         <div className='flex-2' >
   
   <p  className='top' >
     
   Howdy! We are Him
Trek Stays. Handpicked
Cafes, Homestays &
Campsites
   </p>
          

   <p className="mid">
     
   Amazing Homestays and Delicious
food at exotics place are waiting for
you. Treat yourself and see our offers.
     </p>
<div className="btn" >
     <button>Explore Trips</button>
     </div>
          </div>



        </div>


  
      </Section>
    );
  }
}

export default Landing;
