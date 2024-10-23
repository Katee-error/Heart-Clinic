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
  Link,
  Button
} from "@chakra-ui/react";
import { useState } from "react";
import oms from "../data/oms";
import { motion } from "framer-motion";
import FormModal from "../components/FormModal";
import { FiArrowRight } from "react-icons/fi";
import ButtonMain from "../components/ButtonMain";

const OmsPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false); //modal window
  const MotionButton = motion(Button);

  return (
    <Box py={{base: '80px', md: "60px" }}>
      <Container maxW="container.xl">
        <Heading
          fontSize={{ base: "40px", md: "50px" }}
          fontWeight={"300"}
          mb={{ base: "20px", md: "40px" }}
        >
          ОМС
        </Heading>
        <Box mb={"60px"}>
          <Text w={['100%',"70%"]} fontSize={"18px"} mb={'20px'}>
            Обследование и лечение по полису ОМС Пациенты МЦ «Клиника Сердца»
            имеют возможность получить бесплатное обследование и лечение по
            полису обязательного медицинского страхования. Для планового
            обследования и лечения необходимо получить направление по форме
            057/у от лечащего (участкового) врача, а также предъявить паспорт и
            полис ОМС.
          </Text>
          <ButtonMain onClick={() => setIsModalOpen(true)}/>
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
                <Link href={item.link} isExternal>
                  С дополнительной информацией можно ознакомиться по ссылке
                </Link>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  );
};

export default OmsPage;
