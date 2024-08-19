import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slide01 from "./../assets/slider/slide-1.jpg";
import slide02 from "./../assets/slider/slide-2.jpg";
import slide03 from "./../assets/slider/slide-3.jpg";
import slide05 from './../assets/slider/slide-5.jpg'

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: false, // Оставляем отключенным, чтобы слайды не затухали
    cssEase: 'ease', // Задаем тип анимации для плавного перелистывания
  };

  const images = [slide01, slide02, slide03, slide05];
 
  return (
    <Box width="100vw" height="700px" overflow="hidden" position="relative" py={'60px'}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <Text></Text>
            <Image src={image} alt={`Slide ${index + 1}`} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSlider;
