import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 
import { Section} from './Style'
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
      <Section>
          <div className='flex' >

            
    <Slider {...settings}>
      <div className="wrapper" >
        <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373140/1__Page_07_Image_0001_qpwt1l.jpg'} ></img>
      </div>
      <div>
      <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373140/1__Page_07_Image_0001_qpwt1l.jpg'} ></img>
      </div>
      <div>
      <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373140/1__Page_07_Image_0001_qpwt1l.jpg'} ></img>
      </div>
      <div>
      <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373140/1__Page_07_Image_0001_qpwt1l.jpg'} ></img>
      </div>
      <div>
      <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373140/1__Page_07_Image_0001_qpwt1l.jpg'} ></img>
      </div>
      <div>
      <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373140/1__Page_07_Image_0001_qpwt1l.jpg'} ></img>
      </div>
     
   
    </Slider>
     
    

    <div className="data" >
    
    <div className='data-1' >

      <h3>UPCOMING TOURS EVENTS</h3>
      <h2>The Trip for the
New Year</h2>

<p>All accommodation, activities, in-
country transport & select meals
included on each trip!</p>

<p></p>

    </div>

    
</div>

<button className='btn' >Explore Trips</button>
    </div>
    </Section>
  );
}