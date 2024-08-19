import React, { useState } from 'react';
import { Box, Button, Flex, Text, IconButton, Heading, Image } from '@chakra-ui/react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import box from './../assets/slider/box-ben.png'


const testimonials = [
  { text: "Центр ,которому можно доверить свое сердце", author: "Анжела Р." },
  { text: "Я уверен эта клиника вернет многим пациентам здоровье, потому что руководитель этой клиники врач с большой буквы ", author: "Игорь К." },
  { text: "Была в этой клинике !! Все очень понравилось ! Все на высшем уровне !! Врачи профессионалы!!", author: "Мария С." },
  { text: "Недавно проходил полное обследование в этой клинике, чек-ап «профилактика середечно-сосудистых катастроф». Все было на высшем уровне! Спасибо за клинику, Титалав Хайруллаевич", author: "Дмитрий Л." }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box my={'120px'}>
        <Box bg={''} pos={'relative'}>
            <Image src={box} w={'100%'}  />
            <Heading mb={"60px"} fontSize={"50px"} fontWeight={300} pos={'absolute'} top={'10'} left={'20'} color={'#fff'}>
              {" "}
              Отзывы наших клиентов
            </Heading>
          </Box>
    <Box width="100%" overflow="hidden" position="relative" mt={'-70px'}>
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
           
              p={6}
              mx={2}
              minHeight="270px"
            >
              <Text fontSize="20px" mb={2}>{`"${testimonial.text}"`}</Text>
              <Text fontWeight="bold" color="gray.600">{`— ${testimonial.author}`}</Text>
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
        icon={<FiArrowRight/>}
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
    </Box>
    
  );
};

export default TestimonialSlider;
