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
          
          <div className='data' > 
          
            <p>
            It was one of the best experience...
If you are are visiting kasol this is a must stay
place ... Very nice people, location and food.
Everything is great
            </p>
            <h2>Swara Khatti</h2>
           </div>
     
     
      </div>
      <div className="wrapper" >
        <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373140/1__Page_07_Image_0001_qpwt1l.jpg'} ></img>
          
          <div className='data' > 
          
            <p>
            It was one of the best experience...
If you are are visiting kasol this is a must stay
place ... Very nice people, location and food.
Everything is great
            </p>
            <h2>Swara Khatti</h2>
           </div>
     
     
      </div>
      <div className="wrapper" >
        <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373140/1__Page_07_Image_0001_qpwt1l.jpg'} ></img>
          
          <div className='data' > 
          
            <p>
            It was one of the best experience...
If you are are visiting kasol this is a must stay
place ... Very nice people, location and food.
Everything is great
            </p>
            <h2>Swara Khatti</h2>
           </div>
     
     
      </div>
      <div className="wrapper" >
        <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373140/1__Page_07_Image_0001_qpwt1l.jpg'} ></img>
          
          <div className='data' > 
          
            <p>
            It was one of the best experience...
If you are are visiting kasol this is a must stay
place ... Very nice people, location and food.
Everything is great
            </p>
            <h2>Swara Khatti</h2>
           </div>
     
     
      </div>
      <div className="wrapper" >
        <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373140/1__Page_07_Image_0001_qpwt1l.jpg'} ></img>
          
          <div className='data' > 
          
            <p>
            It was one of the best experience...
If you are are visiting kasol this is a must stay
place ... Very nice people, location and food.
Everything is great
            </p>
            <h2>Swara Khatti</h2>
           </div>
     
     
      </div>
      <div className="wrapper" >
        <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373140/1__Page_07_Image_0001_qpwt1l.jpg'} ></img>
          
          <div className='data' > 
          
            <p>
            It was one of the best experience...
If you are are visiting kasol this is a must stay
place ... Very nice people, location and food.
Everything is great
            </p>
            <h2>Swara Khatti</h2>
           </div>
     
     
      </div>
      <div className="wrapper" >
        <img src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1606373140/1__Page_07_Image_0001_qpwt1l.jpg'} ></img>
          
          <div className='data' > 
          
            <p>
            It was one of the best experience...
If you are are visiting kasol this is a must stay
place ... Very nice people, location and food.
Everything is great
            </p>
            <h2>Swara Khatti</h2>
           </div>
     
     
      </div>
    
     
     
      
     
   
    </Slider>
     
    
<div className="head" >
<h2>Explore what people say</h2>
</div>

<button className='btn' >Explore Trips</button>
    </div>
    </Section>
  );
}