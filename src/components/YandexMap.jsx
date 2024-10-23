import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  Button,
  Image,
  VStack,
  Card,
  CardBody,
} from "@chakra-ui/react";
import Location from "./Location";
import FormModal from "./FormModal";

import build from "./../assets/location/build.webp";
import { motion } from "framer-motion";
import telegram from "./../assets/icons/social/telegram.svg";
import whatsap from "./../assets/icons/social/whatsapp.svg";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@chakra-ui/react";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const YandexMap = ({ address, coordinates }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [isModalOpen, setIsModalOpen] = useState(false); //modal window
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: isMobile ? 0 : 50 }} 
      animate={{ opacity: inView ? 1 : 0, y: inView && !isMobile ? 0 : 50 }}
      transition={{ duration: isMobile ? 0.3 : 0.6, ease: "easeOut" }} 
      mb={"120px"}
    >
      <Location address={address} coordinates={coordinates} />
      <Card
        maxW={"1000px"}
        bg={"#fff"}
        p={{ base: "20px", md: "30px" }}
        m={"0 auto"}
        w={"80%"}
        borderRadius={"20px"}
        pos={"relative"}
        mt={{ base: "0px", md: "-120px" }}
      >
        <CardBody id="contact">
          <Flex
            gap={"50px"}
            justifyContent={"space-between"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <VStack spacing={"40px"} alignItems={"start"}>
              <Flex
                alignItems={"start"}
                justifyContent={"space-between"}
                flexDirection={{ base: "column", md: "row" }}
                gap={{ base: "20px" }}
              >
                <VStack fontSize={"xxs"} alignItems={{ md: "start" }}>
                  <Text color={"brand.main"} fontWeight={700}>
                    Телефон
                  </Text>
                  <Text>
                  <Link href="tel:+79994780066">+7 (999) 478 00 66 </Link>
                  <br />
                  <Link href="tel:+79994780055">+7 (999) 478 00 55 </Link>
                </Text>
                </VStack>
                <VStack fontSize={"xxs"} alignItems={"start"}>
                  <Text color={"brand.main"} fontWeight={700}>
                    Время работы
                  </Text>
                  <Text>
                    пн-пт 8:00-18:00
                    <br /> сб 9:00-14:00
                  </Text>
                </VStack>
                <VStack fontSize={"xxs"} alignItems={"start"}>
                  <Text color={"brand.main"} fontWeight={700}>
                    Адрес
                  </Text>
                  <Text>
                    г. Махачкала, <br />
                    Туп. Каммаева 1-й, влд.30
                  </Text>
                </VStack>
              </Flex>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={"20px"}
                mt={{ base: "30px", md: "0" }}
              >
                <MotionButton
                  h={"60px"}
                  w={"200px"}
                  p={"10px 20px"}
                  borderRadius={"20px"}
                  boxShadow={"1px 2px 5px 0 #3a3a9c"}
                  fontSize={"14px"}
                  fontWeight={600}
                  border={"1px solid #3a3a9c"}
                  bg={"transparent"}
                  _hover={{ bgColor: "hover.button" }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsModalOpen(true)}
                >
                  Связаться с нами
                </MotionButton>
                <Flex gap={"20px"}>
                  <Link href="https://t.me/clinicaserdca" isExternal>
                    <Image
                      src={telegram}
                      alt="telegram"
                      w={"36px"}
                      h={"auto"}
                      loading="lazy"
                    />
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send/?phone=79994780055"
                    isExternal
                  >
                    <Image
                      src={whatsap}
                      alt="whatsapp"
                      w={"36px"}
                      h={"auto"}
                      loading="lazy"
                    />
                  </Link>
                </Flex>
              </Flex>
            </VStack>
            <Image
              loading="lazy"
              src={build}
              alt="clinicaserdca"
              borderRadius={"20px"}
              w={{ base: "100%", md: "40%" }}
              h={"auto"}
              objectFit={"contain"}
            />
          </Flex>
        </CardBody>
      </Card>
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </MotionBox>
  );
};

export default YandexMap;
