import React, { Component } from 'react'
import { Section} from './Style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class Footer extends Component {
    render() {
        return (
            <Section>
                <div className='flex' >

     <div className="flex-1" ></div>

     <div className="flex-2" >
   
   <div className="flex-21" >
   
   <i class="fab fa-facebook-f"></i>
   <i class="fab fa-twitter"></i>
   <i class="fab fa-instagram"></i>

   </div>

   <div className="flex-22" >
    
    <div className="top" >
   <div className='head' >
       <h2>Phone Number</h2>
       <h3>123-456-7890</h3>
   </div>

    </div>
    <div className="top" >
    <div className='head' >
       <h2>Email Address</h2>
       <h3>hello@himtrekstays.com</h3>
   </div>
        
    </div>
    <div className="top" >
    <div className='head' >
       <h2>Office Address</h2>
       <h3>123 Anywhere St., Any City, ST 12345</h3>
   </div>
    </div>

   </div>
   <div className="flex-23" >
       <div></div>

   <div className='head' >
       <h2>Him Trek Stays</h2>
       <h3>Presentations are  tools that can be  demonstrations.</h3>
   </div>
   </div>
   <div className="flex-23" >
 
   <div></div>

   <div className='head' >
       <h2>Him Trek Stays</h2>
       <h3>Presentations are  tools that can be  demonstrations.</h3>
   </div>

   </div>
     </div>

                </div>
            </Section>
        )
    }
}
