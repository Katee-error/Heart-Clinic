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
import arrow from "./../assets/icons/arrow-right.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

const Test = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.3, // Процент видимой области, после которого запускается анимация
  });
  return (
    <MotionBox
      my={"120px"}
      py={"60px"}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container maxW={"container.xl"}>
        <SimpleGrid
          minChildWidth="270px"
          p={"20px"}
          spacing={"60px"}
          maxChildHeight="120px"
          alignItems={"center"}
        >
          <GridItem>
            <Box>
              <Text color={"brand.main"} fontWeight={600} fontSize={"18px"}>
                НАПРАВЛЕНИЯ
              </Text>
              <Heading
                mb={{ base: "40px", md: "60px" }}
                fontSize={"50px"}
                fontWeight={"300"}
                as={"h2"}
              >
                Мы заботимся о вашем здоровье
              </Heading>
            </Box>
          </GridItem>
          <GridItem>
            <Card maxW="sm">
              <CardBody>
                <Image src={test1} h={"100px"} w={"100%"} objectFit={"cover"} />
                <Stack mt="6" spacing="3">
                  <Heading fontSize={"20px"}>Название направления</Heading>
                  <Text color={"gray.500"} fontSize={"14px"}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus voluptatibus totam, numquam incidunt culpa id
                    commodi iusto fugit voluptas quibusdam perferendis vel
                    doloribus amet eum similique tenetur blanditiis quaerat
                    dignissimos.
                  </Text>
                  <Button
                    p={"10px 20px"}
                    borderRadius={"10px"}
                    fontSize={"14px"}
                    fontWeight={500}
                    border={"1px solid #3a3a9c"}
                    bg={"transparent"}
                    // bg={"#C7323D"}
                    _hover={{ bgColor: "hover.button" }}
                    whileHover={{ scale: 1.05 }}
                    mt={"30px"}
                  >
                    Узнать больше
                    <Image src={arrow} w={"20px"} ml={"10px"} />
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card maxW="sm">
              <CardBody>
                <Image src={test1} h={"100px"} w={"100%"} objectFit={"cover"} />
                <Stack mt="6" spacing="3">
                  <Heading fontSize={"20px"}>Название направления</Heading>
                  <Text color={"gray.500"} fontSize={"14px"}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus voluptatibus totam, numquam incidunt culpa id
                    commodi iusto fugit voluptas quibusdam perferendis vel
                    doloribus amet eum similique tenetur blanditiis quaerat
                    dignissimos.
                  </Text>
                  <Button
                    p={"10px 20px"}
                    borderRadius={"10px"}
                    fontSize={"14px"}
                    fontWeight={500}
                    border={"1px solid #3a3a9c"}
                    bg={"transparent"}
                    // bg={"#C7323D"}
                    _hover={{ bgColor: "hover.button" }}
                    whileHover={{ scale: 1.05 }}
                    mt={"30px"}
                  >
                    Узнать больше
                    <Image src={arrow} w={"20px"} ml={"10px"} />
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card maxW="sm">
              <CardBody>
                <Image src={test1} h={"100px"} w={"100%"} objectFit={"cover"} />
                <Stack mt="6" spacing="3">
                  <Heading fontSize={"20px"}>Название направления</Heading>
                  <Text color={"gray.500"} fontSize={"14px"}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus voluptatibus totam, numquam incidunt culpa id
                    commodi iusto fugit voluptas quibusdam perferendis vel
                    doloribus amet eum similique tenetur blanditiis quaerat
                    dignissimos.
                  </Text>
                  <Button
                    p={"10px 20px"}
                    borderRadius={"10px"}
                    fontSize={"14px"}
                    fontWeight={500}
                    border={"1px solid #3a3a9c"}
                    bg={"transparent"}
                    // bg={"#C7323D"}
                    _hover={{ bgColor: "hover.button" }}
                    whileHover={{ scale: 1.05 }}
                    mt={"30px"}
                  >
                    Узнать больше
                    <Image src={arrow} w={"20px"} ml={"10px"} />
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card maxW="sm">
              <CardBody>
                <Image src={test1} h={"100px"} w={"100%"} objectFit={"cover"} />
                <Stack mt="6" spacing="3">
                  <Heading fontSize={"20px"}>Название направления</Heading>
                  <Text color={"gray.500"} fontSize={"14px"}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus voluptatibus totam, numquam incidunt culpa id
                    commodi iusto fugit voluptas quibusdam perferendis vel
                    doloribus amet eum similique tenetur blanditiis quaerat
                    dignissimos.
                  </Text>
                  <Button
                    p={"10px 20px"}
                    borderRadius={"10px"}
                    fontSize={"14px"}
                    fontWeight={500}
                    border={"1px solid #3a3a9c"}
                    bg={"transparent"}
                    // bg={"#C7323D"}
                    _hover={{ bgColor: "hover.button" }}
                    whileHover={{ scale: 1.05 }}
                    mt={"30px"}
                  >
                    Узнать больше
                    <Image src={arrow} w={"20px"} ml={"10px"} />
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card maxW="sm">
              <CardBody>
                <Image src={test1} h={"100px"} w={"100%"} objectFit={"cover"} />
                <Stack mt="6" spacing="3">
                  <Heading fontSize={"20px"} fontWeight={500}>
                    Название направления
                  </Heading>
                  <Text color={"gray.500"} fontSize={"14px"}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus voluptatibus totam, numquam incidunt culpa id
                    commodi iusto fugit voluptas quibusdam perferendis vel
                    doloribus amet eum similique tenetur blanditiis quaerat
                    dignissimos.
                  </Text>
                  <Button
                    p={"10px 20px"}
                    borderRadius={"10px"}
                    fontSize={"14px"}
                    fontWeight={500}
                    border={"1px solid #3a3a9c"}
                    bg={"transparent"}
                    // bg={"#C7323D"}
                    _hover={{ bgColor: "hover.button" }}
                    whileHover={{ scale: 1.05 }}
                    mt={"30px"}
                  >
                    Узнать больше
                    <Image src={arrow} w={"20px"} ml={"10px"} />
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        </SimpleGrid>
      </Container>
    </MotionBox>
  );
};

export default Test;
