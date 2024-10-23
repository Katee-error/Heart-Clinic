import {
  Box,
  Container,
  Image,
  Flex,
  Link,
  Heading,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/logo/logo.webp";
import telegram from "./../assets/icons/social/telegram.svg";
import whatsap from "./../assets/icons/social/whatsapp.svg";
import FormModal from "./FormModal";
import ButtonMain from "./ButtonMain";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); //modal window

  return (
    <Box py={"60px"} bg={"#F8F8F8"} as="footer" w="100%" mt="auto">
      <Container maxW="container.lg">
        {/* DESKTOP */}
        <Flex
          justifyContent={"space-between"}
          alignItems={"start"}
          flexDirection={{ base: "column", md: "row" }}
          gap={"30px"}
        >
          <VStack spacing={"20px"} w={"220px"} alignItems={"start"}>
            <NavLink to="/">
              <Image
                src={logo}
                alt="logo"
                w={"200px"}
                h={"auto"}
                loading="lazy"
              />
            </NavLink>
            <Text fontSize={"12px"} color={"gray.500"}>
              Cовременная клиника, предоставляющая медицинские услуги по
              диагностике и лечению заболеваний сердца и сосудов
            </Text>
          </VStack>
          <Flex
            justifyContent={"space-between"}
            gap={{ base: "40px", md: "100px" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <VStack alignItems={"start"} spacing={"20px"}>
              <Heading fontSize={"16px"}>О клинике</Heading>
              <VStack alignItems={"start"} fontSize={"14px"} color={"gary.500"}>
                <NavLink to="/aboutUs" border={"none"}>
                  <Link
                    _hover={{
                      textDecoration: "none",
                      color: "hover.link",
                    }}
                  >
                    О нас
                  </Link>
                </NavLink>

                <NavLink to="/doctors" border={"none"}>
                  <Link
                    _hover={{
                      textDecoration: "none",
                      color: "hover.link",
                    }}
                  >
                    Наши врачи
                  </Link>
                </NavLink>
                <NavLink to="/contact" border={"none"}>
                  <Link
                    _hover={{
                      textDecoration: "none",
                      color: "hover.link",
                    }}
                  >
                    Контакты
                  </Link>
                </NavLink>
              </VStack>
            </VStack>
            <VStack alignItems={"start"} spacing={"20px"}>
              <Heading fontSize={"16px"}>Пациентам</Heading>
              <VStack alignItems={"start"} fontSize={"14px"} color={"gary.500"}>
                <NavLink to="/servicesCost">
                  <Link
                    _hover={{
                      textDecoration: "none",
                      color: "hover.link",
                    }}
                  >
                    Услуги клиники
                  </Link>
                </NavLink>
                <NavLink to="/oms" border={"none"}>
                  <Link
                    _hover={{
                      textDecoration: "none",
                      color: "hover.link",
                    }}
                  >
                    ОМС
                  </Link>
                </NavLink>
              </VStack>
            </VStack>
            <Flex
              justifyContent={"space-between"}
              gap={"70px"}
              alignItems={"center"}
            >
              <VStack alignItems={"start"} spacing={"20px"}>
                <Heading fontSize={"16px"}>Связаться с нами</Heading>

                <Text fontSize={"14px"}>
                  <Link href="tel:+79994780066">+7 (999) 478 00 66 </Link>
                  <br />
                  <Link href="tel:+79994780055">+7 (999) 478 00 55 </Link>
                </Text>
                <Flex gap={"20px"}>
                  <Link>
                    <Image
                      src={telegram}
                      alt="telegram"
                      w={"36px"}
                      h={"auto"}
                      loading="lazy"
                    />
                  </Link>
                  <Link>
                    <Image
                      src={whatsap}
                      alt="whatsap"
                      w={"36px"}
                      h={"auto"}
                      loading="lazy"
                    />
                  </Link>
                </Flex>
              </VStack>
              <Box display={{ base: "block", md: "none" }}>
                <ButtonMain onClick={() => setIsModalOpen(true)} />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  );
};

export default Footer;

// прописать desktop
