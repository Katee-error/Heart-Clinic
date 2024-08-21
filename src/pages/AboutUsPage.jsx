import React from "react";
import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Image,
  Card,
  CardBody,
  Text,
  Flex,
  Button,
  VStack,
} from "@chakra-ui/react";
import doctor from "./../assets/about-us/icons/doctor.png";
import en from "./../assets/about-us/icons/en.png";
import letter from "./../assets/about-us/icons/letter.png";
import stethoscope from "./../assets/about-us/icons/stethoscope.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";

import about01 from "./../assets/about-us/about01.webp";
import about02 from "./../assets/about-us/about02.jpg";
import about03 from "./../assets/about-us/about03.jpg";
import about04 from "./../assets/about-us/about04.jpg";
import about05 from "./../assets/about-us/about05.jpg";
import about06 from "./../assets/about-us/about06.jpg";
import about07 from "./../assets/about-us/about07.jpg";
import about08 from "./../assets/about-us/about08.jpg";

const AboutUsPage = () => {
  const MotionCard = motion(Card);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: false, // Оставляем отключенным, чтобы слайды не затухали
    cssEase: "ease", // Задаем тип анимации для плавного перелистывания
  };

  const images = [
    about01,
    about02,
    about03,
    about04,
    about05,
    about06,
    about07,
    about08,
  ];

  const MotionButton = motion(Button);
  return (
    <Box py={{md:'60px'}}>
      <Container maxW="container.xl">
        <Heading
          fontSize={{ base: "40px", md: "50px" }}
          fontWeight={"300"}
          mb={{ base: "20px", md: "40px" }}
        >
          О нашей клинике
        </Heading>
        <VStack alignItems={'start'} spacing={'20px'} fontSize={"20px"} >
          <Text w={"70%"}>
            Медицинский центр «Клиника Сердца» - это современная клиника,
            предоставляющая медицинские услуги по диагностике и лечению
            заболеваний сердца и сосудов, а также по другим областям медицины.
          </Text>
          <Text>
            - Наша клиника оснащена самым современным оборудованием. Врачи клиники
            имеют многолетний опыт диагностики и лечения сердечно-сосудистых
            заболеваний.
          </Text>
          <Text>
            - Лаборатория Клиники Сердца позволяет сдать различные комплексы
            анализов и оперативно получить результат.
          </Text>
          <Text>
            - В клинике есть стандартная и VIP палаты дневного стационара для
            послеоперационной реабилитации.
          </Text>
        </VStack>
        <Box my={{ base: "70px", md: "70px" }}>
          <SimpleGrid minChildWidth="230px" spacing={{ base: "50px" }}>
            <GridItem>
              <MotionCard
                maxW="sm"
                border={"1px solid #3a3a9c"}
                whileHover={{ scale: 1.08 }}
              >
                <CardBody minH={"350px"}>
                  <Image src={doctor} w={"50px"} h={"50px"} mb={"15px"} />
                  <Heading fontSize={"16px"} mb={"10px"}>
                    Квалифицированные специалисты
                  </Heading>
                  <Text fontSize={"14px"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem, provident culpa excepturi quae modi voluptatibus
                    deserunt dolor, beatae, minus adipisci reprehenderit
                    nesciunt aliquid! Veritatis nihil reprehenderit, unde saepe
                    repellendus inventore.
                  </Text>
                </CardBody>
              </MotionCard>
            </GridItem>
            <GridItem>
              <MotionCard
                maxW="sm"
                border={"1px solid #3a3a9c"}
                whileHover={{ scale: 1.08 }}
              >
                <CardBody minH={"350px"}>
                  <Image src={stethoscope} w={"50px"} h={"50px"} mb={"15px"} />
                  <Heading fontSize={"16px"} mb={"10px"}>
                    Современное оборудование
                  </Heading>
                  <Text fontSize={"14px"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem, provident culpa excepturi quae modi voluptatibus
                    deserunt dolor, beatae, minus adipisci reprehenderit
                    nesciunt aliquid! Veritatis nihil reprehenderit, unde saepe
                    repellendus inventore.
                  </Text>
                </CardBody>
              </MotionCard>
            </GridItem>{" "}
            <GridItem>
              <MotionCard
                maxW="sm"
                border={"1px solid #3a3a9c"}
                whileHover={{ scale: 1.08 }}
              >
                <CardBody minH={"350px"}>
                  <Image src={letter} w={"50px"} h={"50px"} mb={"15px"} />
                  <Heading fontSize={"16px"} mb={"10px"}>
                    Широкий спектр услуг
                  </Heading>
                  <Text fontSize={"14px"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem, provident culpa excepturi quae modi voluptatibus
                    deserunt dolor, beatae, minus adipisci reprehenderit
                    nesciunt aliquid! Veritatis nihil reprehenderit, unde saepe
                    repellendus inventore.
                  </Text>
                </CardBody>
              </MotionCard>
            </GridItem>{" "}
            <GridItem>
              <MotionCard
                maxW="sm"
                border={"1px solid #3a3a9c"}
                whileHover={{ scale: 1.08 }}
              >
                <CardBody minH={"350px"}>
                  <Image src={en} w={"50px"} h={"50px"} mb={"15px"} />
                  <Heading fontSize={"16px"} mb={"10px"}>
                    Бесплатные консультации
                  </Heading>
                  <Text fontSize={"14px"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rem, provident culpa excepturi quae modi voluptatibus
                    deserunt dolor, beatae, minus adipisci reprehenderit
                    nesciunt aliquid! Veritatis nihil reprehenderit, unde saepe
                    repellendus inventore.
                  </Text>
                </CardBody>
              </MotionCard>
            </GridItem>
          </SimpleGrid>
        </Box>
        <Box
          id="hero"
          width={{base: '100%', md: '80%'}}
          height={{ base: "300px", "2xs": "500px", md: "500px" }}
          overflow="hidden"
          position="relative"
          py={{ base: "0", md: "60px" }}
          m={"0 auto"}
          borderRadius={"20px"}
        >
          <Slider {...settings}>
            {images.map((image, index) => (
              <Box key={index}>
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  pos={"relative"}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
