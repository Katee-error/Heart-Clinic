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

import doctor from "./../assets/about-us/icons/doctor.png";
import en from "./../assets/about-us/icons/en.png";
import letter from "./../assets/about-us/icons/letter.png";
import stethoscope from "./../assets/about-us/icons/stethoscope.png";
import box from "./../assets/slider/box-ben.png";

const Benefits = () => {
  return (
    <Box my={"120px"} py={"60px"}>
      <Container maxW="container.xl">
        <Box bg={""} pos={"relative"}>
          <Image src={box} w={"100%"} />
          <Heading
            mb={"60px"}
            fontSize={"50px"}
            fontWeight={300}
            pos={"absolute"}
            top={"10"}
            left={"20"}
            color={"#fff"}
          >
            {" "}
            Почему нас выбирают?
          </Heading>
        </Box>
        <Box mt={"-70px"} zIndex={"1"} pos={"relative"}>
          <SimpleGrid minChildWidth="200px" spacing={"100px"}>
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
              <Card maxW="sm">
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
              </Card>
            </GridItem>{" "}
            <GridItem>
              <Card maxW="sm">
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
              </Card>
            </GridItem>{" "}
            <GridItem>
              <Card maxW="sm">
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
              </Card>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Benefits;
