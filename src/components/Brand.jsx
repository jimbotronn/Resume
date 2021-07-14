import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (

    <ul>
      <Slider {...settings}>
        <li className="item">
          <div className="itemLogo1">
          <img src="/resume/img/partners/1.png" alt="partners brand" />
          </div>
          <div className="itemName1">
            <h6 style="color:#bb0000;">The Ohio State Universite</h6>
            <p>B.S. Computer Science and Engineering
            <br></br>
              2003-2008</p>
          </div>
      </li>
      <li className="item">
          <div className="itemLogo2">
          <img src="/resume/img/partners/2.png" alt="partners brand" />
          </div>
          <div className="itemName2">
            <h6 style="color:#35297f;">Capital University</h6>
            <p>Master of Business Administration (MBA)
              <br></br>
              2015-2017
            </p>
          
          </div>
      </li>
       
      </Slider>
    </ul>
  );
}
