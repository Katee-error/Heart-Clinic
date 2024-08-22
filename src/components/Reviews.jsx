import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  IconButton,
  Heading,
  Image,
} from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import box from "./../assets/slider/box-ben.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

const testimonials = [
  { text: "Центр ,которому можно доверить свое сердце", author: "Анжела Р." },
  {
    text: "Я уверен эта клиника вернет многим пациентам здоровье, потому что руководитель этой клиники врач с большой буквы ",
    author: "Игорь К.",
  },
  {
    text: "Была в этой клинике !! Все очень понравилось ! Все на высшем уровне !! Врачи профессионалы!!",
    author: "Мария С.",
  },
  {
    text: "Недавно проходил полное обследование в этой клинике, чек-ап «профилактика середечно-сосудистых катастроф». Все было на высшем уровне! Спасибо за клинику, Титалав Хайруллаевич",
    author: "Дмитрий Л.",
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
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.4, // Процент видимой области, после которого запускается анимация
  });

  return (
    <MotionBox
      my={"120px"}
      py={{ base: "0px", md: "60px" }}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box bg={""} pos={"relative"}>
        <Image src={box} w={"100%"} h={{ base: "120px", md: "auto" }} />
        <Heading
          mb={"60px"}
          fontSize={{ base: "24px", md: "50px" }}
          fontWeight={300}
          pos={"absolute"}
          top={"10"}
          left={{ base: "10px", md: "20" }}
          color={"#fff"}
        >
          {" "}
          Отзывы наших клиентов
        </Heading>
      </Box>
      <Box
        width="100%"
        overflow="hidden"
        position="relative"
        mt={{ base: "50px", md: "-70px" }}
      >
        <Flex
          transition="transform 0.5s ease"
          transform={`translateX(-${currentIndex * (100 / 3)}%)`} // Ширина слайда с учетом видимости следующего слайда
          width={`${testimonials.length * (100 / 3)}%`} // Ширина контейнера для всех слайдов
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              flex="0 0 33.3333%" // Ширина каждого слайда (1/3 для того чтобы следующий слайд был наполовину виден)
              p={4}
              boxSizing="border-box"
            >
              <Box
                bg="white"
                borderRadius="md"
                boxShadow="md"
                p={'30px'}
                mx={2}
                minHeight={{ base: "270px", md: "250px" }}
              >
                <Text
                  fontSize={{ base: "16px", md: "20px" }}
                  mb={'15px'}
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
