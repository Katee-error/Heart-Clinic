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
    autoplaySpeed: 4000,
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
    <Box>
      <Container maxW="container.xl">
        <Heading
          fontSize={{ base: "40px", md: "50px" }}
          fontWeight={"300"}
          mb={{ base: "20px", md: "40px" }}
        >
          О нашей клинике
        </Heading>
        <Box>
          <Text>
            Медицинский центр «Клиника Сердца» - это современная клиника,
            предоставляющая медицинские услуги по диагностике и лечению
            заболеваний сердца и сосудов, а также по другим областям медицины.
          </Text>
        </Box>
        <Box mt={{ base: "70px", md: "-70px" }} zIndex={"1"} pos={"relative"}>
          <SimpleGrid
            minChildWidth="200px"
            spacing={{ base: "50px", md: "100px" }}
          >
            <GridItem>
              <MotionCard
                maxW="sm"
                border={"1px solid #3a3a9c"}
                whileHover={{ scale: 1.08 }}
              >
                <CardBody>
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
            </GridItem>{" "}
            <GridItem>
              <MotionCard
                maxW="sm"
                border={"1px solid #3a3a9c"}
                whileHover={{ scale: 1.08 }}
              >
                <CardBody>
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
                <CardBody>
                  <Image src={en} w={"50px"} h={"50px"} mb={"15px"} />
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
                <CardBody>
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
          width="100vw"
          height={{ base: "300px", "2xs": "500px", md: "700px" }}
          overflow="hidden"
          position="relative"
          py={{ base: "0", md: "60px" }}
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
