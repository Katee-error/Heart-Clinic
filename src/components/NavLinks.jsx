import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const NavLinks = () => {
  return (
    <>
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
    </>
  )
}

export default NavLinks
