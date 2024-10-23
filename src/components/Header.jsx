import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Box, Flex, Image, Text, Button, Link } from "@chakra-ui/react";

import { motion } from "framer-motion";

import logo from "./../assets/logo/logo.webp";

import mapIcon from "./../assets/header-icons/map.svg";
import phoneIcon from "./../assets/header-icons/phone.svg";
import clockIcon from "./../assets/header-icons/clock.svg";
import calendarIcon from "./../assets/header-icons/calendar.svg";
import Telegram from "./../assets/header-icons/Telegram.svg";

import Navbar from "./Navbar";
import FormModal from "./FormModal";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); //modal window

  const MotionButton = motion(Button);

  return (
    <Box
      as="nav"
      position="relative"
      top={0}
      left={0}
      width="100%"
      backgroundColor="white"
      pt="20px"
      px={"10px"}
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
            loading="lazy"
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
                    loading="lazy"
                      src={mapIcon}
                      alt="map Icon"
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
                  loading="lazy"
                    src={phoneIcon}
                    alt="phone"
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
                  alt="clock"
                  loading="lazy"
                    src={clockIcon}
                    margin={"8px auto"}
                    color={"#3a3a9c"}
                    width="20px"
                    height="20px"
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
              <Link href="https://t.me/clinicaserdca">
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
                    alt="Telegram"
                      loading="lazy"
                      src={Telegram}
                      margin={"8px auto"}
                      color={"#3a3a9c"}
                      width="20px"
                      height="20px"
                    />
                  </Box>
                  <Link href="https://t.me/clinicaserdca">
                    <Text as="span" fontWeight={700}>
                      @clinicaserdca
                    </Text>
                  </Link>
                </Flex>
              </Link>
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
                _hover={{ bgColor: "transparent" }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsModalOpen(true)} // Open modal window
              >
                <Image src={calendarIcon} alt="calendar" mr={"10px"} loading="lazy" w={'20px'} h={'20px'} />
                Записаться на прием
              </MotionButton>
            </Link>
          </Flex>
        </Flex>

        <Navbar />
      </Box>

      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  );
};

export default Header;
