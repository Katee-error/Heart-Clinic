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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import doctor from "./../assets/about-us/icons/doctor.png";
import en from "./../assets/about-us/icons/en.png";
import letter from "./../assets/about-us/icons/letter.png";
import stethoscope from "./../assets/about-us/icons/stethoscope.png";
import box from "./../assets/slider/box-ben.png";

const MotionBox = motion(Box);

const Benefits = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.4, // Процент видимой области, после которого запускается анимация
  });

  const MotionCard = motion(Card)

  return (
    <MotionBox
      my={"120px"}
      py={{base: '0px' ,md:"60px"}}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container maxW="container.xl">
        <Box bg={""} pos={"relative"}>
          <Image src={box} w={"100%"} h={{base: '120px', md: 'auto'}} />
          <Heading
            mb={"60px"}
            fontSize={{base: '24px',md:"50px"}}
            fontWeight={300}
            pos={"absolute"}
            top={"10"}
            left={{base: "10px",md:"20"}}
            color={"#fff"}
          >
            {" "}
            Почему нас выбирают?
          </Heading>
        </Box>
        <Box mt={{base: '70px', md: "-70px"}} zIndex={"1"} pos={"relative"}>
          <SimpleGrid minChildWidth="200px" spacing={{base: '50px',md:"100px"}}>
            {/* <GridItem>
                <Imagex
                  src={doctor}
                  w={"40px"}
                  h={"40px"}
                  mb={"15px"}
                  top={"-10px"}
                />

                <Heading fontSize={"16px"} mb={"10px"}>
                  Широкий спектр услуг
                </Heading>
                <Text fontSize={"14px"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  provident culpa excepturi quae modi voluptatibus deserunt
                  dolor, beatae, minus adipisci reprehenderit nesciunt aliquid!
                  Veritatis nihil reprehenderit, unde saepe repellendus
                  inventore.
                </Text>
              </GridItem> */}
            <GridItem>
              <MotionCard maxW="sm"  border={"1px solid #3a3a9c"} whileHover={{ scale: 1.08 }}>
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
              <MotionCard maxW="sm"  border={"1px solid #3a3a9c"} whileHover={{ scale: 1.08 }}>
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
              <MotionCard maxW="sm"  border={"1px solid #3a3a9c"} whileHover={{ scale: 1.08 }}>
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
      </Container>
    </MotionBox>
  );
};

export default Benefits;
