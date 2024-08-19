import React from "react";
import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { Link as RouterLink } from "react-router-dom";

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

import Navbar from "./Navbar";

// import { NavLink } from "react-router-dom";
const Header = () => {
  //  STICKY NAV
  const headerRef = useRef(null);
  const [isNavSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavSticky(true);
      } else {
        setNavSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* .........*/

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
    <Box
      id="sticky-nav"
      // position={isNavSticky ? "fixed" : "relative"}
      pt={"30px"}
      top="0"
      //  zIndex="sticky"
      w="100%"
      transition="0.3s"
      bg={"white"}

      //   boxShadow="sm"
    >
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
            >
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
                  +7 (999) 478 00 66 <br />
                  +7 (999) 478 00 55
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
                  пн-пт 8:00-18:00
                  <br /> сб 9:00-14:00
                </Text>
              </Flex>
            </Flex>
            <Link as={RouterLink} to="/" 
             
            >
              <MotionButton
                p={"30px"}
                borderRadius={"20px"}
                boxShadow={"1px 2px 5px 0 #3a3a9c"}
                // boxShadow={"1px 2px 5px 0 #C7323D"}
                fontSize={"14px"}
                fontWeight={700}
                // border={"1px solid #C7323D"}
                border={"1px solid #3a3a9c"}
                bg={"transparent"}
                // bg={"#C7323D"}
                _hover={{ bgColor: "hover.button" }}
                whileHover={{ scale: 1.05 }}
                //  color={'brand.main'}
                // color={"#C7323D"}
              >
                <Image src={calendarIcon} mr={"10px"} />
                Записаться на прием
              </MotionButton>
            </Link>
          </Flex>
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
        <Navbar />
      </Container>
    </Box>
  );
};

export default Header;
