import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import oms from "../data/oms";

const OmsPage = () => {
  return (
    <Box py={{ md: "60px" }}>
      <Container maxW="container.xl">
        <Heading
          fontSize={{ base: "40px", md: "50px" }}
          fontWeight={"300"}
          mb={{ base: "20px", md: "40px" }}
        >
          ОМС
        </Heading>
        <Box mb={"60px"}>
          <Text w={"70%"} fontSize={"20px"}>
            Обследование и лечение по полису ОМС Пациенты МЦ «Клиника Сердца»
            имеют возможность получить бесплатное обследование и лечение по
            полису обязательного медицинского страхования. Для планового
            обследования и лечения необходимо получить направление по форме
            057/у от лечащего (участкового) врача, а также предъявить паспорт и
            полис ОМС.
          </Text>
        </Box>
        <Text fontSize={"30px"} mb={"20px"}>
          Документы по ОМС
        </Text>
        <Accordion w={{ base: "100%", md: "80%" }} allowMultiple>
          {oms.map((item, i) => (
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
                      <Text fontSize={"16px"} fontWeight={500}>
                        {item.title}
                      </Text>
                    </Flex>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel py={"20px"}>
                <Text px={"20px"}>
                  С дополнительной информацией можно ознакломиться по ссылке
                  {item.link}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

export default OmsPage;
