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
      <div>
      <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373140/1__Page_07_Image_0001_qpwt1l.jpg'} ></img>
      </div>

   
    </Slider>
   
    </div>
    </Section>
  );
}