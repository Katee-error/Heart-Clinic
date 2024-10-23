import React from "react";
import { useState } from "react";

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

import logo from "./../assets/logo/logo.webp";
import logoMobile from "./../assets/logo/logo-mobile.webp";
import mapIcon from "./../assets/header-icons/map.svg";
import phoneIcon from "./../assets/header-icons/phone.svg";
import clockIcon from "./../assets/header-icons/clock.svg";
import { FiMenu } from "react-icons/fi";

import { NavLink } from "react-router-dom";

import StickyNavbar from "./StickyNavbar";
import FormModal from "./FormModal";
import { useScroll } from "./StickyContext";

const StickyHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false); //modal window
  const isStickyVisible = useScroll(); // плавное появление навигации

  const handleOpenModal = () => {
    onClose(); // Закрываем боковое меню
    setIsModalOpen(true); // Открываем модальное окно
  };

  const MotionButton = motion(Button);
  const btnRef = React.useRef();

  return (
    <Box w="100%" bg={"white"}>
      {/* DESKTOP */}
      <Flex
        as={"header"}
        justifyContent={"space-between"}
        gap={"40px"}
        alignItems={"center"}
        display={{ base: "none", md: "flex" }}
        position="fixed"
        top={0}
        left={0}
        width="100%"
        backgroundColor="white"
        boxShadow="sm"
        padding="20px"
        zIndex={isStickyVisible ? 100 : 0}
        opacity={isStickyVisible ? 1 : 0} // Плавное появление
        transform={`translateY(${isStickyVisible ? 0 : "-20px"})`} // Плавный сдвиг сверху
        transition="all 0.5s ease-in-out" // Плавный переход
      >
        <Link as={NavLink} to="/">
          <Image src={logo} alt="logo" w={"170px"} objectFit={"contain"} />
        </Link>

        <StickyNavbar />

        <MotionButton
          p={"25px 30px"}
          borderRadius={"10px"}
          fontSize={"16px"}
          fontWeight={600}
          border={"1px solid #3a3a9c"}
          // bg={"transparent"}
          bg={"brand.main"}
          _hover={{ bgColor: "hover.button", color: "black" }}
          whileHover={{ scale: 1.05 }}
          color={"white"}
          onClick={handleOpenModal}
        >
          Записаться
        </MotionButton>
      </Flex>

      {/* Mobile */}
      <Flex
        display={{ base: "flex", md: "none" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        position="fixed"
        top={0}
        left={0}
        p={"20px"}
        width="100%"
        bg={"white"}
        transform={`translateY(${isStickyVisible ? 0 : "-2px"})`} // Плавный сдвиг сверху
        transition="all 0.5s ease-in-out" // Плавный переход
        zIndex={10}
        boxShadow="sm"
      >
        <NavLink to="/home">
          <Image src={logoMobile} alt="logo" w={"70px"} />
        </NavLink>
        
        <Flex alignItems={"center"} gap={"10px"}>
          <Flex gap={"30px"} alignItems={"center"}>
            <Flex
              justifyContent={"space-between"}
              gap={"50px"}
              alignItems={"center"}
              fontSize={"14px"}
              fontWeight={600}
              display={{ base: "none", sm: "flex", lg: "none" }}
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
            <Link as={NavLink} to="/" display={{ base: "block", sm: "none" }}>
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
            {/* Menu hamburger */}
          </Flex>
          <Box w={"45px"} bg={"brand.main"} h={"45px"} borderRadius={"10px"}>
            <IconButton
              ref={btnRef}
              onClick={onOpen}
              color={"white"}
              as={FiMenu}
              w={"30px"}
              h={"30px"}
              bg={"none"}
              m={"7px 3px"}
              _hover={{ border: "transparent", bg: "transparent" }}
              _focus={{ border: "transparent", bg: "transparent" }}
              _active={{ border: "transparent", bg: "transparent" }}
            />
          </Box>

          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton
                _hover={{ border: "transparent", bg: "transparent" }}
                _focus={{ border: "transparent", bg: "transparent" }}
                _active={{ border: "transparent", bg: "transparent" }}
              />
              <DrawerBody p={"60px 30px"}>
                <VStack align="stretch" spacing={8} fontSize={"18px"}>
                  <NavLink to="/home">
                    <Link
                      onClick={onClose}
                      _hover={{
                        textDecoration: "none",
                        color: "hover.link",
                      }}
                    >
                      Главная
                    </Link>
                  </NavLink>
                  <NavLink to="/servicesCost">
                    <Link
                      onClick={onClose}
                      _hover={{
                        textDecoration: "none",
                        color: "hover.link",
                      }}
                    >
                      Услуги клиники
                    </Link>
                  </NavLink>
                  <NavLink to="/doctors" border={"none"}>
                    <Link
                      onClick={onClose}
                      _hover={{
                        textDecoration: "none",
                        color: "hover.link",
                      }}
                    >
                      Наши врачи
                    </Link>
                  </NavLink>
                  <NavLink to="/promotion" border={"none"}>
                    <Link
                      onClick={onClose}
                      _hover={{
                        textDecoration: "none",
                        color: "hover.link",
                      }}
                    >
                      Акции
                    </Link>
                  </NavLink>
                  <NavLink to="/oms" border={"none"}>
                    <Link
                      onClick={onClose}
                      _hover={{
                        textDecoration: "none",
                        color: "hover.link",
                      }}
                    >
                      ОМС
                    </Link>
                  </NavLink>
                  <NavLink to="/aboutUs" border={"none"}>
                    <Link
                      onClick={onClose}
                      _hover={{
                        textDecoration: "none",
                        color: "hover.link",
                      }}
                    >
                      О нас
                    </Link>
                  </NavLink>
                  <NavLink to="/contact" border={"none"}>
                    <Link
                      onClick={onClose}
                      _hover={{
                        textDecoration: "none",
                        color: "hover.link",
                      }}
                    >
                      Контакты
                    </Link>
                  </NavLink>

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

      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  );
};

export default StickyHeader;
