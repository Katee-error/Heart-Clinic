import React from "react";
import { useRef, useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Flex,
  Image,
  Text,
  IconButton,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  Link,
  VStack,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import logo from "./../assets/logo/logo.png";
import logoMobile from "./../assets/logo/logo-mobile.png";
import mapIcon from "./../assets/header-icons/map.svg";
import phoneIcon from "./../assets/header-icons/phone.svg";
import clockIcon from "./../assets/header-icons/clock.svg";
import calendarIcon from "./../assets/header-icons/calendar.svg";

import Navbar from "./Navbar";
import FormModal from "./FormModal";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false); //modal window

  const handleOpenModal = () => {
    onClose(); // Закрываем боковое меню
    setIsModalOpen(true); // Открываем модальное окно
  };

  const MotionBox = motion(Box);
  const MotionButton = motion(Button);
  const btnRef = React.useRef();

  return (
    <Box
      as="nav"
      position="relative"
      top={0}
      left={0}
      width="100%"
      backgroundColor="white"
      py="20px"
      px={'10px'}
      zIndex={5}
    >
      <Box>
        {/* DESKTOP */}
        <Flex
          as={"header"}
          justifyContent={"space-between"}
          gap={"50px"}
          alignItems={"center"}
          display={{ base: "none", md: "flex" }}
        >
          <Link as={NavLink} to="/">
            <Image
              src={logo}
              alt="logo"
              w={"210px"}
              h={"50px"}
              objectFit={"contain"}
            />
          </Link>
          <Flex gap={"30px"}>
            <Flex
              justifyContent={"space-around"}
              gap={"30px"}
              fontSize={"13px"}
              fontWeight={500}
              alignItems={"center"}
            >
              <NavLink to="/contact">
                <Flex w={"180px"} gap={"10px"} alignItems={"center"}>
                  <Box
                    position={"relative"}
                    h={"36px"}
                    w={"36px"}
                    borderRadius={"100%"}
                    fill={"white"}
                    boxShadow={"1px 2px 5px 0 #3a3a9c"}
                  >
                    <Image
                      src={mapIcon}
                      margin={"8px auto"}
                      color={"#3a3a9c"}
                      size={"20px"}
                    />
                  </Box>
                  <Text>
                    Туп. Каммаева 1-й,
                    <br /> влд.30
                  </Text>
                </Flex>
              </NavLink>
              <Flex w={"180px"} gap={"10px"} alignItems={"center"}>
                <Box
                  position={"relative"}
                  h={"36px"}
                  w={"36px"}
                  borderRadius={"100%"}
                  fill={"white"}
                  boxShadow={"1px 2px 5px 0 #3a3a9c"}
                >
                  <Image
                    src={phoneIcon}
                    margin={"8px auto"}
                    color={"#3a3a9c"}
                    size={"20px"}
                  />
                </Box>
                <Text>
                  <Link href="tel:+79994780066">+7 (999) 478 00 66 </Link>
                  <br />
                  <Link href="tel:+79994780055">+7 (999) 478 00 55 </Link>
                </Text>
              </Flex>
              <Flex w={"180px"} gap={"10px"} alignItems={"center"}>
                <Box
                  position={"relative"}
                  h={"36px"}
                  w={"36px"}
                  borderRadius={"100%"}
                  fill={"white"}
                  boxShadow={"1px 2px 5px 0 #3a3a9c"}
                >
                  <Image
                    src={clockIcon}
                    margin={"8px auto"}
                    color={"#3a3a9c"}
                    size={"20px"}
                  />
                </Box>
                <Text>
                  <Box as="span" fontWeight={700}>
                    пн-пт{" "}
                  </Box>
                  8:00-18:00
                  <br />{" "}
                  <Box as="span" fontWeight={700}>
                    сб
                  </Box>{" "}
                  9:00-14:00
                </Text>
              </Flex>
            </Flex>
            <Link as={RouterLink} href="#form">
              <MotionButton
                p={"30px"}
                borderRadius={"20px"}
                boxShadow={"1px 2px 5px 0 #3a3a9c"}
                fontSize={"14px"}
                fontWeight={700}
                border={"1px solid #3a3a9c"}
                bg={"transparent"}
                _hover={{ bgColor: "hover.button" }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsModalOpen(true)} // Open modal window
              >
                <Image src={calendarIcon} mr={"10px"} />
                Записаться на прием
              </MotionButton>
            </Link>
          </Flex>
        </Flex>

        {/* Mobile */}
        
        <Navbar />
      </Box>

      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  );
};

export default Header;
