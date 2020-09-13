import React from "react";
// React Slick → Slideshow
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Components
import { Img } from "./main";

const settings = {
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 4000,
}

export default function Carousel() {
  return (
    <>
      <Slider {...settings}>
        <Img>
          <img src="https://icdn2.digitaltrends.com/image/digitaltrends/samsung-gear-vr-thumb-2-1200x630-c-ar1.91.jpg" alt="1" />
        </Img>
        <Img>
          <img src="https://icdn2.digitaltrends.com/image/digitaltrends/samsung-gear-vr-thumb-2-1200x630-c-ar1.91.jpg" alt="2" />
        </Img>
      </Slider>
    </>
  )
}
