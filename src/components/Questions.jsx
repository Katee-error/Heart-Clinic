import React from "react";
import {
  Box,
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  Text,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

import questions from "../data/Questions";
import questionsImg from "./../assets/all/questions-img.webp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

const Questions = () => {
  const MotionImage = motion(Image);

  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.4, // Процент видимой области, после которого запускается анимация
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
      <Container maxW="container.xl">
        <Heading
          fontSize={"50px"}
          fontWeight={"300"}
          mb={"60px"}
          textAlign={"center"}
        >
          {" "}
          Часто задаваемые вопросы
        </Heading>
        <Flex
          justifyContent={"space-between"}
          gap={"50px"}
          alignItems={"center"}
        >
          <Image
            src={questionsImg}
            w={"40%"}
            h={"auto"}
            objectFit={"contain"}
            borderRadius={"20px"}
          />
          <Accordion allowToggle w={"50%"}>
            {questions.map((question, i) => (
              <AccordionItem mb={"20px"} border={"transparent"} key={i}>
                <h2>
                  <AccordionButton
                    _expanded={{
                      bg: "hover.button",
                      color: "#3a3a9c",
                      border: "#3a3a9c solid 1px",
                    }}
                    borderRadius={"5px"}
                    border={"#3a3a9c solid 1px"}
                    _hover={{ bgColor: "hover.button" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                      <Flex gap={"10px"} alignItems={"center"}>
                        <Text fontSize={"18px"} fontWeight={500}>
                          {question.title}
                        </Text>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel py={"30px"}>
                  <Text mb={"30px"} px={"20px"}>
                    {question.desc}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>
      </Container>
    </MotionBox>
  );
};

export default Questions;
