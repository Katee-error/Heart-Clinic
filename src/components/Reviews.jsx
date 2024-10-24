import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Heading,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@chakra-ui/react";

const MotionBox = motion(Box);

const testimonials = [
  { text: "Центр ,которому можно доверить свое сердце", author: "Мадина Р." },
  {
    text: "Я уверен эта клиника вернет многим пациентам здоровье, потому что руководитель этой клиники врач с большой буквы ",
    author: "Султан К.",
  },
  {
    text: "Была в этой клинике !! Все очень понравилось ! Все на высшем уровне !! Врачи профессионалы!!",
    author: "Шамиль С.",
  },
  {
    text: "Недавно проходил полное обследование в этой клинике, чек-ап «профилактика середечно-сосудистых катастроф». Все было на высшем уровне! Спасибо за клинику, Титалав Хайруллаевич",
    author: "Шарип Л.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const slideWidth = useBreakpointValue({ base: "300px", md: "33.3333%" });

  return (
    <MotionBox
      my={['50px',"80px"]}
      py={{ base: "0px", md: "60px" }}
      ref={ref}
      initial={isMobile ? undefined : { opacity: 0, y: 50 }} // Установка undefined вместо пустого объекта
      animate={isMobile ? undefined : { opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={isMobile ? undefined : { duration: 0.6, ease: "easeOut" }} // undefined для отключения анимации
    >
      <Box
        pos={"relative"}
        w={"100%"}
        h={{ base: "120px", md: "270px" }}
        bgColor={"brand.main"}
      >
        <Heading
          mb={['30px',"60px"]}
          fontSize={{ base: "24px", md: "50px" }}
          fontWeight={300}
          pos={"absolute"}
          top={"10"}
          left={{ base: "10px", md: "20" }}
          color={"#fff"}
        >
          Отзывы наших клиентов
        </Heading>
      </Box>
      <Box
        width="100%"
        overflow="hidden"
        position="relative"
        mt={{ base: "30px", md: "-70px" }}
      >
        <Flex
          transition="transform 0.5s ease"
          transform={`translateX(-${currentIndex * 300}px)`} // Сдвиг слайдов на мобильных устройствах
          width={
            slideWidth === "300px"
              ? `${testimonials.length * 300}px`
              : `${testimonials.length * (100 / 3)}%`
          } // Ширина контейнера для всех слайдов
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              flex={slideWidth === "300px" ? "0 0 300px" : "0 0 33.3333%"} // Фиксированная ширина слайда на мобильных устройствах
              p={4}
              boxSizing="border-box"
            >
              <Box
                bg="white"
                borderRadius="md"
                boxShadow="md"
                p={"30px"}
                mx={2}
                minHeight={{ base: "320px", md: "250px" }}
              >
                <Text
                  fontSize={{ base: "16px", md: "20px" }}
                  mb={"15px"}
                >{`"${testimonial.text}"`}</Text>
                <Text
                  fontWeight="700"
                  color="gray.500"
                >{`— ${testimonial.author}`}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
        <IconButton
          icon={<FiArrowLeft />}
          position="absolute"
          top="50%"
          left="0"
          transform="translateY(-50%)"
          onClick={handlePrev}
          aria-label="Previous Slide"
          bg="white"
          boxShadow="md"
          _hover={{ bg: "gray.100" }}
        />
        <IconButton
          icon={<FiArrowRight />}
          position="absolute"
          top="50%"
          right="0"
          transform="translateY(-50%)"
          onClick={handleNext}
          aria-label="Next Slide"
          bg="white"
          boxShadow="md"
          _hover={{ bg: "gray.100" }}
        />
      </Box>
    </MotionBox>
  );
};

export default TestimonialSlider;
