import React, { useState } from "react";
import {
  Box,
  Container,
  Flex,
  VStack,
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
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleMouseEnter = (index) => {
    setIsOpen(index);
  };

  const handleMouseLeave = () => {
    setIsOpen(null);
  };

  return (
    <Box my={"40px"}>
      <Flex
        as={"nav"}
        color={"white"}
        gap={"20px"}
        fontWeight={600}
        fontSize={"xs"}
        alignItems={"center"}
        justifyContent={"space-around"}
        bgColor={"brand.main"}
        h={"70px"}
        px={"90px"}
        borderRadius={"20px"}
        display={{ base: "none", md: "flex" }}
      >
        <NavLink to="/home">
          <Link _hover={{ textDecoration: "none", color: "hover.link" }}>
            Главная
          </Link>
        </NavLink>
        <NavLink to="/services">
          <Link _hover={{ textDecoration: "none", color: "hover.link" }}>
            Услуги клиники
          </Link>
        </NavLink>
        <NavLink to="/servicesCost" border={"none"}>
          <Link _hover={{ textDecoration: "none", color: "hover.link" }}>
            Цены
          </Link>
        </NavLink>
        <NavLink to="/doctors" border={"none"}>
          <Link _hover={{ textDecoration: "none", color: "hover.link" }}>
            Наши врачи
          </Link>
        </NavLink>
        <NavLink to="/oms" border={"none"}>
          <Link _hover={{ textDecoration: "none", color: "hover.link" }}>
            ОМС
          </Link>
        </NavLink>
        <NavLink to="/aboutUs" border={"none"}>
          <Link _hover={{ textDecoration: "none", color: "hover.link" }}>
            О нас
          </Link>
        </NavLink>
        <NavLink to="/contact" border={"none"}>
          <Link _hover={{ textDecoration: "none", color: "hover.link" }}>
            Контакты
          </Link>
        </NavLink>
        <Link border={"none"}>
          <Menu>
            <MenuButton
              fontSize={"16px"}
              fontWeight={600}
              color={"white"}
              as={Button}
              bg={"none"}
              rightIcon={<FiChevronDown />}
              _hover={{ bg: "none", boxShadow: "transparent" }}
              _active={{ bg: "none", boxShadow: "none" }}
              _focus={{ bg: "none", boxShadow: "none" }}
            >
              Еще
            </MenuButton>
            <MenuList
              mt={"7px"}
              pos={"absolute"}
              left={"-100px"}
              minW={"300px"}
              color={"brand.main"}
              fontWeight={500}
              gap={"20px"}
              py={"10px"}
            >
              <NavLink to="" border={"none"}>
                <MenuItem>Download</MenuItem>
              </NavLink>
              <NavLink to="" border={"none"}>
                <MenuItem>Download</MenuItem>
              </NavLink>
              <NavLink to="" border={"none"}>
                <MenuItem>Download</MenuItem>
              </NavLink>
              <NavLink to="" border={"none"}>
                <MenuItem>Download</MenuItem>
              </NavLink>
            </MenuList>
          </Menu>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
