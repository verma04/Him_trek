import React, { Component } from 'react';

import { Section} from './Style'
import ReactPlayer from 'react-player'

export default class Expore extends Component {
    render() {
        return (
            <Section>

                <div className='flex' >

             <div className="flex-1" >
     
     <div className="flex-11" >

     <p className="top" >Book yourself a
well-deserved
holiday!</p>
   <p className="mid" >
   Amazing Homestays and
Delicious food at exotics place
are waiting for you.
   </p>

     </div>

     <div className="flex-12" >

     <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'  width='100%'
          height='120%'  />
         
</div>
  

             </div>
          <div className='flex-2' >
  
   <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373448/mohit-tomar--x449rNhXQw-unsplash_dq7f4x.jpg'} ></img>
     
     <button>Explore Videos</button>

          </div>

                </div>
                
            </Section>
        )
    }
}
