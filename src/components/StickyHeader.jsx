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
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

import logo from "./../assets/logo/logo.png";
import mapIcon from "./../assets/header-icons/map.svg";
import phoneIcon from "./../assets/header-icons/phone.svg";
import clockIcon from "./../assets/header-icons/clock.svg";
import calendarIcon from "./../assets/header-icons/calendar.svg";
import { FiMenu } from "react-icons/fi";

import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FiChevronDown } from "react-icons/fi";
import links from "../data/links";

import Navbar from "./Navbar";
import StickyNavbar from "./StickyNavbar";
import FormModal from "./FormModal";

// import { NavLink } from "react-router-dom";
const StickyHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false); //modal window
  const [activeMenu, setActiveMenu] = useState(null);

  const handleOpenModal = () => {
    onClose(); // Закрываем боковое меню
    setIsModalOpen(true); // Открываем модальное окно
  };

  const MotionBox = motion(Box);
  const MotionButton = motion(Button);
  const btnRef = React.useRef();

  return (
    <Box top="0" w="100%" bg={"white"} pb={"30px"} boxShadow="sm">
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
              onClick={() => setIsModalOpen(true)} // Open modal window
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
          <Link to="/">
            <Image src={logo} alt="logo" w={"200px"} />
          </Link>
          <Flex gap={"50px"} alignItems={"center"}>
            <Flex
              justifyContent={"space-between"}
              gap={"50px"}
              alignItems={"center"}
              fontSize={"14px"}
              fontWeight={600}
              display={{ base: "none", sm: "flex", md: "none" }}
            >
              <Flex gap={"8px"} alignItems={"center"}>
                <Image src={mapIcon} color={"#3a3a9c"} w={"25px"} />
                <Text>
                  Туп. Каммаева 1-й,
                  <br /> влд.30
                </Text>
              </Flex>
              <Flex gap={"8px"} alignItems={"center"}>
                <Image src={phoneIcon} color={"#3a3a9c"} w={"25px"} />
                <Text>
                  +7 (999) 478 00 66 <br />
                  +7 (999) 478 00 55
                </Text>
              </Flex>
              <Flex gap={"8px"} alignItems={"center"}>
                <Image src={clockIcon} color={"#3a3a9c"} w={"25px"} />
                <Text>
                  пн-пт 8:00-18:00
                  <br /> сб 9:00-14:00
                </Text>
              </Flex>
            </Flex>
            <Link
              as={RouterLink}
              to="/"
              display={{ base: "none", xs: "block", sm: "none" }}
            >
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
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton
                  _hover={{ border: "none", bg: "transparent" }}
                  _focus={{ border: "none", bg: "transparent" }}
                  _active={{ border: "none", bg: "transparent" }}
                />
                <DrawerBody p={"30px"}>
                  <VStack align="stretch" spacing={4}>
                    {links.map((link, i) => (
                      <Box key={i} w="100%">
                        <Box
                          fontSize={"20px"}
                          color={"brand.main"}
                          fontWeight={500}
                          py={2}
                          _hover={{
                            textDecoration: "none",
                          }}
                          display="block"
                        >
                          {link.hasMenu ? (
                            <Accordion allowToggle>
                              <AccordionItem>
                                <AccordionButton
                                  px={0}
                                  _hover={{ bg: "none" }}
                                  _focus={{ boxShadow: "none" }}
                                >
                                  <Box
                                    flex="1"
                                    textAlign="left"
                                    fontSize={"20px"}
                                  >
                                    {link.text}
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4} pl={4}>
                                  {link.items.map((item, idx) => (
                                    <Link
                                      key={idx}
                                      as={RouterLink}
                                      to={`/${item
                                        .toLowerCase()
                                        .replace(/\s/g, "-")}`}
                                      onClick={onClose}
                                      fontWeight={400}
                                      fontSize={"16px"}
                                      py={1}
                                      _hover={{
                                        textDecoration: "none",
                                      }}
                                      display="block"
                                    >
                                      {item}
                                    </Link>
                                  ))}
                                </AccordionPanel>
                              </AccordionItem>
                            </Accordion>
                          ) : (
                            <ScrollLink
                              to={link.href}
                              smooth={true}
                              duration={500}
                              offset={-70} // Учитываем высоту фиксированного меню
                            >
                              <Link
                                as="span"
                                onClick={onClose}
                                fontWeight={500}
                                py={2}
                                _hover={{
                                  textDecoration: "none",
                                  color: "hover.link",
                                }}
                                display="block"
                              >
                                {link.text}
                              </Link>
                            </ScrollLink>
                          )}
                        </Box>
                      </Box>
                    ))}
                    <MotionButton
                      mt={"30px"}
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
                      // onClick={onClose}
                      onClick={handleOpenModal}
                    >
                      Записаться
                    </MotionButton>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Flex>
      </Container>
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  );
};

export default StickyHeader;
