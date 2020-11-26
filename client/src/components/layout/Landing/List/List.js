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
                        <img></img>

                          </div>

                      </div>


                    </div>
                </div>
                
            </Section>
        )
    }
}
