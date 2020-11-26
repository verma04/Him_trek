import React, { Component } from 'react'
import { Section} from './Style';

export default class Style extends Component {
    render() {
        return (
            <Section>
                <div className="flex" >

                    <div className="flex-1" >
                    <div className="head" >
              <div>dd</div>
                        <h2>Accomodations</h2>
                        </div>
                    </div>

                    <div className="flex-2" >
              <div></div>
                        <div  className="para" >
                            <div></div>
                          <ul>
                          <li>Cafe Him & Camps, Tosh
Presentations are communication tools.</li>
                          <li>Himtrek Camps, Manali
Presentations are communication tools.</li>
                          <li>HimTrek Camp, Mcleodganj
Presentations are communication tools.</li>
</ul>
                        </div>
                    </div>

                </div>
            </Section>
        )
    }
}
