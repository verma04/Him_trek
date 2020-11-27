import React, { Component } from 'react';
import { Section} from './Style'

export default class List extends Component {
    render() {
        return (
            <Section>

                <div className="flex" >
   


                    <div className="flex-1" >
                        <div className='head' >
                     
                     <h2>We have all the arsenal for an amazing trip to the Himalayas</h2>
                     <p>Himtrek Stays | The Activities & Tools for Mindblowing Holidays</p>
</div>
                    </div>
                    <div className="flex-2" >
                 
                      <div className="logo" >

                          <div className="img" >
                        <img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606406807/camping_s8cc4n.png'}  ></img>
              <h3 style={{color:"rgb(251 ,232 ,173)"}} >Camping</h3>
                          </div>
                          <div className="img" >
                        <img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606406794/Hut_stay_u4ryzo.png'}  ></img>
<h3 style={{color:'rgb(251 ,236 ,155)'}}  >Hut Stay</h3>
                          </div>
                          <div className="img" >
                        <img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606406775/Road_trip_q221ul.png'}  ></img>
<h3 className="road" >Roadtrips</h3>
                          </div>
                          <div className="img" >
                        <img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606406773/Trekking_ze1oeo.png'}  ></img>
                        <h3  stye={{color:"rgb(206 ,165 ,163)"}} className="trek" >Trekking</h3>
                          </div>
                          <div className="img" >
                        <img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606406804/Event_pehekc.png'}  ></img>
                        <h3  style={{color:"rgb(251 ,236 ,155)"}} id="set" > Events</h3>
                          </div>
                          <div className="img" >
                        <img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606406807/Adventure_g9tje6.png'}  ></img>
                        <h3  style={{color:'rgb(189 ,187 ,188)'}} className='adv' >Adventure</h3>
                          </div>
                          <div className="img" >
                        <img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606406770/Yoga_c3re8n.png'}  ></img>
                        <h3  style={{color:"rgb(248 ,235 ,165)"}} stye={{color:'rgb(251 ,232 ,173)'}}  id="set" > Yoga</h3>
                          </div>
                          <div className="img" >
                        <img  src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606406798/Meditation_momcig.png'}  ></img>
                        <h3 className="medi" >Meditation</h3>
                          </div>
                        

                      </div>


                    </div>
                </div>
                
            </Section>
        )
    }
}
