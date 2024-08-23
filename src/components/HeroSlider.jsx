import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import slide02 from "./../assets/slider/slide-6.jpg";
import slide03 from "./../assets/slider/slide-7.jpg";
import slide05 from "./../assets/slider/slide-8.jpg";
import slide06 from "./../assets/slider/slide-9.jpg";
import slide07 from "./../assets/slider/slide-10.jpg";
import slide08 from "./../assets/slider/slide-11.jpg";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: false, // Оставляем отключенным, чтобы слайды не затухали
    cssEase: "ease", // Задаем тип анимации для плавного перелистывания
  };

  const images = [slide02, slide03, slide05, slide06, slide07, slide08];
  const texts = [
    "Cкидка 15% на все виды чек-апа",
    "Комплексное обследование сердечно-сосудистой системы",
    "Профилактика варикозных заболеваний",
    "Бесплатное обследование и лечение по полису обязательного медицинского страхования. ",
  ];
  const MotionButton = motion(Button);

  return (
    <Box
      id="hero"
      width="100vw"
      height={{ base: "300px", "2xs": "500px", md: "700px" }}
      overflow="hidden"
      position="relative"
      // py={{ base: "0", md: "60px" }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            {/* <Box
              h={"auto"}
              bgColor={"white"}
              opacity={"70%"}
              pos={"absolute"}
              zIndex={"1"}
              m={"120px 20px"}
              p={" 10px"}
              borderRadius={"10px"}
            >
              {texts.map((text, i) => (
                <Text key={2} fontSize={"50px"} color={"black"}>
                  {text}
                </Text>
              ))}
            </Box> */}

            <Image src={image} alt={`Slide ${index + 1}`} pos={"relative"} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSlider;
