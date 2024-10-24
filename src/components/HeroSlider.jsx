import React, { useState, useEffect, useRef } from "react";
import { Box, Image, Text, Button, Skeleton } from "@chakra-ui/react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import FormModal from "./FormModal";
import { useMediaQuery } from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide01 from "./../assets/slider/slide-1.webp";
import slide03 from "./../assets/slider/slide-2.webp";
import slide02 from "./../assets/slider/slide-4.webp";
import slide04 from "./../assets/slider/slide-5.webp";
import slide05 from "./../assets/slider/slide-6.webp";

const HeroSlider = () => {
  
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const settings = {
    dots: false,
    infinite: true,
    speed: isMobile ? 300 : 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: isMobile ? 6000 : 4000,
    fade: false,
    cssEase: "ease",
    pauseOnHover: false,
    lazyLoad: "ondemand",
    beforeChange: (current, next) => handleLazyLoad(next), // Обработчик смены слайдов
  };

  const sliderRef = useRef(null);
  const images = [slide01, slide02, slide03, slide04, slide05];
  const MotionButton = motion(Button);
  const [isModalOpen, setIsModalOpen] = useState(false); // Модальное окно
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState([0, 1]); // Индексы загруженных изображений

  // Функция для ленивой загрузки изображений
  const handleLazyLoad = (nextIndex) => {
    // Если индекс следующего слайда больше текущего количества загруженных изображений,
    // добавляем его в список для загрузки
    if (!loadedImages.includes(nextIndex)) {
      setLoadedImages((prev) => [...prev, nextIndex]);
    }

    // Если мы близки к концу слайдов, подгружаем последние слайды
    if (nextIndex >= images.length - 3) {
      setLoadedImages((prev) =>
        [
          ...prev,
          images.length - 3,
          images.length - 2,
          images.length - 1,
        ].filter((v, i, a) => a.indexOf(v) === i)
      );
    }
  };

  useEffect(() => {
    const loadInitialImages = () => {
      let loaded = 0;
      const firstTwoImages = images.slice(0, 1); // Загрузить только первые 2 изображения

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

    loadInitialImages();
  }, [images]);

  return imagesLoaded ? (
    <Box
      id="hero"
      width={{ base: "90%", md: "80%" }}
      height={{ base: "300px", md: "700px" }}
      overflow="hidden"
      position="relative"
      textAlign="center"
      mt={{ base: "70px", md: "0" }}
      mx={"auto"}
    >
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <Box key={index} position="relative">
            {/* Отображаем изображение только если оно загружено */}
            {loadedImages.includes(index) && (
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width="100%"
                height="100%"
                borderRadius={"20px"}
                loading="lazy" // Атрибут для ленивой загрузки
              />
            )}
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
              <Text fontWeight={700} fontSize={{ base: "34px", md: "80px" }}>
                Клиника Сердца
              </Text>
              <Text fontWeight={700} fontSize={{ base: "16px", md: "24px" }}>
                Забота о сердце начинается здесь
              </Text>
              <MotionButton
                p={{ base: "10px 15px", md: "25px 30px" }}
                borderRadius="10px"
                fontSize={["12px", "16px"]}
                fontWeight={700}
                border="1px solid #3a3a9c"
                bg="white"
                boxShadow="1px 2px 5px 0 #3a3a9c"
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
      <Skeleton h={{ base: "300px", md: "700px" }} w={"100%"}></Skeleton>
    </Box>
  );
};

export default HeroSlider;
