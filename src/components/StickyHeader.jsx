import React from "react";
import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  useColorModeValue,
  IconButton,
  Button,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  DrawerFooter,
  Link,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import logo from "./../assets/logo/logo.png";
import mapIcon from "./../assets/header-icons/map.svg";
import phoneIcon from "./../assets/header-icons/phone.svg";
import clockIcon from "./../assets/header-icons/clock.svg";
import calendarIcon from "./../assets/header-icons/calendar.svg";
import { FiMenu } from "react-icons/fi";
import { HashLink as NavLink } from "react-router-hash-link";
import { Link as RouterLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

import Navbar from "./Navbar";
import StickyNavbar from "./StickyNavbar";

// import { NavLink } from "react-router-dom";
const StickyHeader = () => {
  const links = [
    { text: "Главная", href: "/", hasMenu: false },
    {
      text: "ОМС",
      //   href: "/",
      hasMenu: true,
      items: [
        "Постановление Правительства РД",
        "Перечень ЖНВЛП",
        "Программа государственных гарантий",
      ],
    },
    {
      text: "Платные услуги ",
      //   href: "/",
      hasMenu: true,
      items: ["Платные услуги", "Договор", "Акт", "Прейскурант"],
    },
    {
      text: "Наши врачи",
      //   href: "/",
      hasMenu: true,
      items: ["Платные услуги", "Договор", "Акт", "Прейскурант"],
    },
    {
      text: "О нас",
      //   href: "/",
      hasMenu: true,
      items: [
        "Персонал",
        "Документы",
        "Контролирующие органы",
        "Вакансии",
        "Отзывы пациентов",
      ],
    },
    {
      text: "Контакты",
      section: "contact",
      hasMenu: false,
    },
  ];

  const { onOpen, isOpen, onClose } = useDisclosure();
  const location = useLocation();
  const activeColor = useColorModeValue("#3489C8");
  const inactiveColor = useColorModeValue("black");

  const MotionBox = motion(Box);
  const MotionButton = motion(Button);
  const btnRef = React.useRef();

  const getLinkColor = (path) => {
    return location.pathname === path ? activeColor : inactiveColor;
  };

  return (
    <Box top="0" w="100%" bg={"white"} pb={'15px'} boxShadow="sm">
      <Container maxW="container.xl">
        {/* DESKTOP */}
        <Flex
          as={"header"}
          justifyContent={"space-between"}
          gap={"50px"}
          alignItems={"center"}
          display={{ base: "none", md: "flex" }}
        >
          <Link as={RouterLink} to="/">
            <Image
              src={logo}
              alt="logo"
              w={"200px"}
              h={"50px"}
              objectFit={"contain"}
            />
          </Link>

          <StickyNavbar />

          <Link as={RouterLink} to="/">
            <MotionButton
              p={"20px"}
              borderRadius={"10px"}
              fontSize={"16px"}
              fontWeight={600}
              border={"1px solid #3a3a9c"}
              // bg={"transparent"}
              bg={"brand.main"}
              _hover={{ bgColor: "hover.button", color: "black" }}
              whileHover={{ scale: 1.05 }}
              color={"white"}
            >
              Записаться
            </MotionButton>
          </Link>
        </Flex>
        {/* Mobile */}
        <Flex
          display={{ base: "flex", md: "none" }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <NavLink to="/">
            <Image src={logo} alt="logo" w={"130px"} />
          </NavLink>
          <Flex gap={"20px"} alignItems={"center"}>
            {/* Menu hamburger */}
            <IconButton
              ref={btnRef}
              onClick={onOpen}
              bg={"none"}
              as={FiMenu}
              w={"30px"}
              h={"30px"}
              mt={"10px"}
              _hover={{ border: "transparent", bg: "transparent" }}
              _focus={{ border: "transparent", bg: "transparent" }}
              _active={{ border: "transparent", bg: "transparent" }}
            />
            <Drawer
              isOpen={isOpen}
              placement="top"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton
                  size={"2xl"}
                  pt={"30px"}
                  pr={"20px"}
                  bg={"none"}
                  _hover={{ border: "transparent", bg: "transparent" }}
                  _focus={{ boxShadow: "none", bg: "transparent" }}
                  _active={{ border: "transparent", bg: "transparent" }}
                />
                <DrawerBody>
                  <Flex
                    py={"70px"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    gap={"40px"}
                    onClick={onClose}
                    fontSize={"md"}
                    fontWeight={500}
                  >
                    <Link
                      as={RouterLink}
                      to="/"
                      // state={{ section: "hero" }}
                    >
                      <Link
                        px={2}
                        py={1}
                        // _hover={{ textDecoration: 'none', fontWeight:'600'}}
                        color={getLinkColor("/home")}
                      ></Link>
                    </Link>
                    <Link as={RouterLink} to="/" state={{ section: "about" }}>
                      <Link
                        px={2}
                        py={1}
                        color={getLinkColor("/about-us")}
                      ></Link>
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/"
                      //   state={{ section: "product" }}
                      border={"none"}
                    >
                      <Link
                        px={2}
                        py={1}
                        // color={getLinkColor("/our-product")}
                      ></Link>
                    </Link>
                    <Link as={NavLink} to="/detail/#main">
                      <Link
                        px={2}
                        py={1}
                        fontWeight={500}
                        // _hover={{ textDecoration: 'none', fontWeight:'600'}}
                        color={getLinkColor("/product-detail")}
                      ></Link>
                    </Link>
                  </Flex>
                </DrawerBody>
                <DrawerFooter pb={"30px"}>
                  <Link
                    as={RouterLink}
                    to="/"
                    state={{ section: "form" }}
                    m={" 0 auto"}
                  >
                    <MotionButton
                      border={"#3489C8 2px solid"}
                      bgColor={"transparent"}
                      fontSize={"xxs"}
                      fontWeight={500}
                      p={"25px 40px"}
                      borderRadius={"5px"}
                      _hover={{ bgColor: "#ECECFF" }}
                      whileTap={{ scale: 1.2 }}
                      whileHover={{ scale: 1.05 }}
                      // onClick={() => scrollToSection("form")}
                      onClick={onClose}
                    ></MotionButton>
                  </Link>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default StickyHeader;
