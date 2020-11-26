import React, { Component } from 'react';

import { Section } from './Style'

export default class Trips extends Component {
    render() {
        return (
            <Section>
                <div className='flex' >
  
                <div className='flex-1' >

                
  <ul>

      <li id="first" > Dharamshala</li>
      <li> Manali</li>

      <li>Chamba</li>
      <li> Shimla</li>
      <li>Kasol</li>
  </ul>
                    
</div>


<div className='flex-2' >
   
   <div className='flex-21' >
      

      <div className='head' >
  <h2>Explore Cafes</h2>
  <h3>Cafe Him & Camps</h3>
      </div>

      <div className="bottom" >
         <h2> Discover Them all </h2>
      </div>
      

   </div>
   <div className='flex-22' >

   <div className='top' >

   <div className='top-1' >
   <h2> Events </h2>
   </div>
   <div className='top-2' >
       <h2>Adventure and Activities</h2>
   </div>
   </div>

   <div className='bottom' >
   <h2>Camping And Stays</h2>
</div>




</div>


                    
</div>

                </div>
            </Section>
        )
    }
}
