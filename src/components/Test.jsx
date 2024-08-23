import {
  GridItem,
  SimpleGrid,
  Box,
  Container,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import test1 from "./../assets/all/test-1.jpg";
import test2 from "./../assets/all/test-2.jpg";
import test3 from "./../assets/all/test-3.jpg";
import test4 from "./../assets/all/test-4.jpg";
import test5 from "./../assets/all/test-5.jpg";

import arrow from "./../assets/icons/arrow-right.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

const Test = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.3, // Процент видимой области, после которого запускается анимация
  });

  const MotionCard = motion(Card);
  return (
    <MotionBox
      my={"120px"}
      py={{base: '0px' ,md:"60px"}}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container maxW={"container.xl"}>
        <SimpleGrid
          minChildWidth="270px"
          p={"20px"}
          gap={{base: '30px',md:"60px"}}
          maxChildHeight="120px"
          alignItems={"center"}
        >
          <GridItem>
            <Box>
              <Text color={"brand.main"} fontWeight={600} fontSize={"18px"}>
                НАПРАВЛЕНИЯ
              </Text>
              <Heading
                mb={{ base: "20px", md: "60px" }}
                fontSize={{base: '40px',md:"50px"}}
                fontWeight={"300"}
                as={"h2"}
              >
                Мы заботимся
                <br /> о вашем здоровье
              </Heading>
            </Box>
          </GridItem>
          <GridItem >
            <MotionCard maxW="sm" whileHover={{ scale: 1.08 }}  h={'400px'}>
              <CardBody>
                <Image src={test2} h={"100px"} w={"100%"} objectFit={"cover"} />
                <Stack mt="6" spacing="3">
                  <Heading fontSize={"20px"}>Медпомощь по ОМС</Heading>
                  <Text color={"gray.500"} fontSize={"14px"}>
                    {" "}
                    Пациенты Медицинского центра «Клиника Сердца» имеют
                    возможность получить бесплатное обследование и лечение по
                    полису обязательного медицинского страхования. Для планового
                    обследования и лечения необходимо получить направление по
                    форме 057/у от лечащего (участкового) врача, а также
                    предъявить паспорт и полис ОМС.
                  </Text>
                </Stack>
              </CardBody>
            </MotionCard>
          </GridItem>
          <GridItem >
            <MotionCard maxW="sm" whileHover={{ scale: 1.08 }} h={'400px'}>
              <CardBody>
                <Image src={test3} h={"100px"} w={"100%"} objectFit={"cover"} />
                <Stack mt="6" spacing="3">
                  <Heading fontSize={"20px"}>Лабораторные анализы</Heading>
                  <Text color={"gray.500"} fontSize={"14px"}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus voluptatibus totam, numquam incidunt culpa id
                    commodi iusto fugit voluptas quibusdam perferendis vel
                    doloribus amet eum similique tenetur blanditiis quaerat
                    dignissimos.
                  </Text>
                </Stack>
              </CardBody>
            </MotionCard>
          </GridItem>
          <GridItem>
            <MotionCard maxW="sm" whileHover={{ scale: 1.08 }} h={'400px'}>
              <CardBody>
                <Image src={test1} h={"100px"} w={"100%"} objectFit={"cover"} />
                <Stack mt="6" spacing="3">
                  <Heading fontSize={"20px"}>УЗИ сердца и сосудов</Heading>
                  <Text color={"gray.500"} fontSize={"14px"}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus voluptatibus totam, numquam incidunt culpa id
                    commodi iusto fugit voluptas quibusdam perferendis vel
                    doloribus amet eum similique tenetur blanditiis quaerat
                    dignissimos.
                  </Text>
                </Stack>
              </CardBody>
            </MotionCard>
          </GridItem>
          <GridItem>
            <MotionCard maxW="sm" whileHover={{ scale: 1.08 }} h={'400px'}>
              <CardBody>
                <Image src={test5} h={"100px"} w={"100%"} objectFit={"cover"} />
                <Stack mt="6" spacing="3">
                  <Heading fontSize={"20px"}>Консультации специалистов</Heading>
                  <Text color={"gray.500"} fontSize={"14px"}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus voluptatibus totam, numquam incidunt culpa id
                    commodi iusto fugit voluptas quibusdam perferendis vel
                    doloribus amet eum similique tenetur blanditiis quaerat
                    dignissimos.
                  </Text>
                </Stack>
              </CardBody>
            </MotionCard>
          </GridItem>
          <GridItem>
            <MotionCard maxW="sm" whileHover={{ scale: 1.08 }} h={'400px'}>
              <CardBody>
                <Image src={test4} h={"100px"} w={"100%"} objectFit={"cover"} />
                <Stack mt="6" spacing="3">
                  <Heading fontSize={"20px"}>Дневной стационар</Heading>
                  <Text color={"gray.500"} fontSize={"14px"}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus voluptatibus totam, numquam incidunt culpa id
                    commodi iusto fugit voluptas quibusdam perferendis vel
                    doloribus amet eum similique tenetur blanditiis quaerat
                    dignissimos.
                  </Text>
                </Stack>
              </CardBody>
            </MotionCard>
          </GridItem>
        </SimpleGrid>
      </Container>
    </MotionBox>
  );
};

export default Test;
