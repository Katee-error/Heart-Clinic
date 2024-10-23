import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { motion } from "framer-motion";
const FormModal = React.lazy(() => import("./FormModal"));

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide01 from "./../assets/slider/slide-1.webp";
import slide02 from "./../assets/slider/slide-2.webp";
import slide03 from "./../assets/slider/slide-3.webp";
import slide04 from "./../assets/slider/slide-4.webp";
import slide05 from "./../assets/slider/slide-5.webp";
import slide06 from "./../assets/slider/slide-6.webp";
import slide07 from "./../assets/slider/slide-7.webp";
import slide08 from "./../assets/slider/slide-8.webp";
import slide09 from "./../assets/slider/slide-9.webp";
import slide10 from "./../assets/slider/slide-10.webp";
import slide11 from "./../assets/slider/slide-11.webp";

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: false,
    cssEase: "ease",
    pauseOnHover: false,
  };

  const sliderRef = useRef(null);

  const images = [slide01, slide02, slide03, slide04, slide05, slide06, slide07, slide08, slide09, slide10, slide11];
  const MotionButton = motion(Button);
  const [isModalOpen, setIsModalOpen] = useState(false); //modal window

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = () => {
      let loaded = 0;
      const firstTwoImages = images.slice(0, 2); 
  
      firstTwoImages.forEach((image) => {
        const img = new window.Image();
        img.src = image;
        img.onload = () => {
          loaded++;
          if (loaded === firstTwoImages.length) {
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
      width={{ base: '94vw', md: '80vw'}}
      height={{ base: "300px", xs: '565px', sm:'600px', md: "650px", lg: '700px', xl: '850px' }}
      overflow="hidden"
      position="relative"
      textAlign="center"
      mt={{ base: "50px", md: "0" }}
      mx={'auto'}

    >
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <Box key={index} position="relative">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width="100%"
              height="100%"
              borderRadius={'20px'}
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
              <Text fontWeight={500} fontSize={{ base: "30px", md: "80px" }}>
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
