import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Container,
  Skeleton,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import FormModal from "./FormModal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide01 from "./../assets/slider/slide-4.jpg";
import slide02 from "./../assets/slider/slide-2.jpg";
import slide03 from "./../assets/slider/slide-3.jpg";
import slide04 from "./../assets/slider/slide-1.jpg";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    cssEase: "ease",
    pauseOnHover: false,
  };

  const sliderRef = useRef(null);

  // useEffect(() => {
  //   // Запускаем автоплей вручную, когда компонент монтируется
  //   if (sliderRef.current) {
  //     sliderRef.current.slickPlay();
  //   }
  // }, []);

  const images = [slide01, slide02, slide03, slide04];
  const MotionButton = motion(Button);
  const [isModalOpen, setIsModalOpen] = useState(false); //modal window

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = () => {
      let loaded = 0;
      images.forEach((image) => {
        const img = new window.Image();
        img.src = image;
        img.onload = () => {
          loaded++;
          if (loaded === images.length) {
            setImagesLoaded(true);
          }
        };
      });
    };
    loadImages();
  }, [images]);

  return imagesLoaded ? (
    <Box
      id="hero"
      width="100vw"
      height={{ base: "300px", "2xs": "500px", md: "800px" }}
      overflow="hidden"
      position="relative"
      textAlign="center"
      mt={{ base: "50px", md: "0" }}
    >
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <Box key={index} position="relative">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width="100%"
              height="100%"
            />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="center"
              zIndex={1000}
              p="20px"
              width={{ base: "100%", md: "70%" }}
            >
              <Text fontWeight={500} fontSize={{ base: "40px", md: "80px" }}>
                Клиника Сердца
              </Text>
              <Text
                fontWeight={500}
                fontSize={{ base: "16px", md: "24px" }}
                mt="-10px"
              >
                Забота о сердце начинается здесь
              </Text>
              <MotionButton
                p={{ base: "10px 20px", md: "25px 30px" }}
                borderRadius="10px"
                fontSize="16px"
                fontWeight={600}
                border="1px solid #3a3a9c"
                bg="white"
                boxShadow="1px 2px 5px 0 #3a3a9c"
                _hover={{ bgColor: "hover.button", color: "black" }}
                whileHover={{ scale: 1.05 }}
                color="black"
                onClick={() => setIsModalOpen(true)}
                mt="20px"
              >
                Записаться
              </MotionButton>
            </Box>
          </Box>
        ))}
      </Slider>
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  ) : (
    <Box>
      <Skeleton h={{ base: '300px',md:'700px'}} w={'100%'}></Skeleton>
    </Box>
  );
};

export default HeroSlider;
