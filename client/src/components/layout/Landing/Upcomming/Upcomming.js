import React, { Component } from 'react'
import { Slider } from './Style'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



import { withRouter } from "react-router";

import Img from 'react-cool-img';
 class Upcomming extends Component {
    render() {
        return (
            <Slider>
                <div    className="center" >
              <Carousel   showThumbs={false} showStatus={false} useKeyboardArrows  autoPlay interval="2000">
                  <div className="img-1">
              <div className="img-wrapper" >
                    <Img alt="sdd"       src={'https://res.cloudinary.com/pankaj-k-amakein-com/image/upload/v1605860885/3_ol4lxg.jpg'}/>
                   

                </div>
              
                </div>
                <div className="img-1">
                <div className="img-wrapper" >
                    <Img alt="sdd"      src={'https://res.cloudinary.com/pankaj-k-amakein-com/image/upload/v1605860885/3_ol4lxg.jpg'}/>
                   

                </div>
         
                </div>
              
                <div className="img-1">
              <div className="img-wrapper" >
              <Img  alt="sdd"      src={'https://res.cloudinary.com/pankaj-k-amakein-com/image/upload/v1605860885/4_pvzixs.jpg'} />
                  
                   

                </div>
        
                </div>
                
            </Carousel>
            </div>
            </Slider>
        )
    }
}


export default withRouter(Upcomming)