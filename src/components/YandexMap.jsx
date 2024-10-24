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
import ButtonMain from "./ButtonMain";

const MotionBox = motion(Box);

const YandexMap = ({ address, coordinates }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [isModalOpen, setIsModalOpen] = useState(false); //modal window
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <MotionBox
      ref={ref}
      initial={isMobile ? {} : { opacity: 0, y: 50 }} // Keep the structure but no animations on mobile
  animate={isMobile ? { opacity: 1, y: 0 } : { opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Ensure content is visible on mobile
  transition={isMobile ? {} : { duration: 0.6, ease: "easeOut" }} // Maintain default transition behavior
      my={["80px", "120px"]}
    >
      <Location address={address} coordinates={coordinates} />
      <Card
        maxW={"1100px"}
        bg={"#fff"}
        p={{ base: "10px", md: "20px" }}
        m={["0", "0 auto"]}
        w={["100%", "80%"]}
        borderRadius={["0px", "20px"]}
        pos={"relative"}
        mt={{ base: "0px", md: "-120px" }}
      >
        <CardBody id="contact">
          <Flex
            gap={"40px"}
            justifyContent={"space-between"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <VStack spacing={["10px", "40px"]} alignItems={"start"}   mt={["0", "30px"]}>
              <Flex
                alignItems={"start"}
                justifyContent={"space-between"}
                flexDirection={{ base: "column", md: "row" }}
                gap={["20px", '30px']}
              >
                <VStack alignItems={{ md: "start" }}  spacing={0.5}>
                  <Text color={"brand.main"} fontWeight={700} fontSize={"16px"}>
                    Телефон
                  </Text>
                  <Text fontSize={['14px',"16px"]}>
                    <Link href="tel:+79994780066">+7 (999) 478 00 66 </Link>
                    <br />
                    <Link href="tel:+79994780055">+7 (999) 478 00 55 </Link>
                  </Text>
                </VStack>
                <VStack alignItems={"start"} spacing={0.5}>
                  <Text color={"brand.main"} fontWeight={700} fontSize={"16px"}>
                    Время работы
                  </Text>
                  <Text ffontSize={['14px',"16px"]}>
                    пн-пт 8:00-18:00
                    <br /> сб 9:00-14:00
                  </Text>
                </VStack>
                <VStack alignItems={"start"}  spacing={0.5}>
                  <Text color={"brand.main"} fontWeight={700} fontSize={"16px"}>
                    Адрес
                  </Text>
                  <Text fontSize={['14px',"16px"]}>
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
                <ButtonMain onClick={() => setIsModalOpen(true)}>
                  Связаться с нами
                </ButtonMain>
                <Flex gap={"20px"}>
                  <Link href="https://t.me/clinicaserdca" isExternal>
                    <Image
                      src={telegram}
                      alt="telegram"
                      w={"36px"}
                      h={"100%"}
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
                      h={"100%"}
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
              h={"100%"}
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
