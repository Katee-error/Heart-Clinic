import React, { useState } from "react";
import { Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const StickyNavbar = () => {

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
      <NavLink to="/promotion" border={"none"}>
        <Link _hover={{ textDecoration: "none", color: "hover.link" }}>
          Акции
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
  );
};

export default StickyNavbar;
