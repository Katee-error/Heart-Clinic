import React, { useState } from "react";
import {
  Box,
  Flex,

  Link,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


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
        
      </Flex>
    </Box>
  );
};

export default Navbar;
