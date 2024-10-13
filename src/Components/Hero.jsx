import React from "react";
import Slider from "react-slick";

import img1 from "./../assets/banner5.png";
import img2 from "./../assets/banner1.png";
import img3 from "./../assets/banner3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: false, // Hide next arrow
    prevArrow: false, // Hide previous arrow
  };
  return (
    <div className="space-y-3 w-full  overflow-hidden">
      <div className="slider-container ">
        <Slider {...settings}>
          <div className=" ">
            <img className="w-full min-h-[250px] md:h-fit" src={img1} alt="" />
          </div>
          <div className=" ">
            <img className="w-full min-h-[250px] md:h-fit" src={img2} alt="" />
          </div>
          <div className="  ">
            <img className="w-full min-h-[250px] md:h-fit" src={img3} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
