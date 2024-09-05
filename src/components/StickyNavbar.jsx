import React, { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Button,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Link,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { NavLink } from "react-router-dom";


const StickyNavbar = () => {
 
  const [isOpen, setIsOpen] = useState(null);
  
  return (
    <Flex
      as={"nav"}
      color={"brand.main"}
      gap={"50px"}
      fontWeight={700}
      fontSize={"xs"}
      alignItems={"center"}
      justifyContent={"space-around"}
      h={"70px"}
      borderRadius={"20px"}
    >
      <NavLink to="/home">
          <Link _hover={{ textDecoration: "none", color: "hover.link" }}>
            Главная
          </Link>
        </NavLink>
        <NavLink to="/servicesCost">
          <Link _hover={{ textDecoration: "none", color: "hover.link" }}>
            Услуги клиники
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
        {/* <Link border={"none"}>
          <Menu>
            <MenuButton
              fontSize={"16px"}
              fontWeight={700}
              color={"brand.main"}
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
        </Link> */}
    </Flex>
  );
};

export default StickyNavbar;
