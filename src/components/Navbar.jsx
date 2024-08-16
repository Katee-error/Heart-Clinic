import React, { useState } from "react";
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
import { HashLink as NavLink } from "react-router-hash-link";
import { Link as RouterLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
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
      // href: "/",
      hasMenu: false,
    },
  ];
  const [isOpen, setIsOpen] = useState(null);

  return (
    <Box my={"40px"}>
      <Flex
        as={"nav"}
        // color={"brand.main"}
        color={"white"}
        // border={"1px solid #3a3a9c"}
        gap={"20px"}
        fontWeight={500}
        fontSize={"xs"}
        alignItems={"center"}
        justifyContent={"space-around"}
        bgColor={"brand.main"}
        h={"70px"}
        px={"90px"}
        borderRadius={"20px"}
      >
        {links.map((link, i) => (
          <Link
            onMouseEnter={() => link.hasMenu && setIsOpen(i)}
            onMouseLeave={() => link.hasMenu && setIsOpen(null)}
            key={i}
            as={RouterLink}
            to="/"
            //   state={{ section: "hero" }}
            px={2}
            py={1}
             _hover={{ textDecoration: "none"}}
            //   color={getLinkColor("/")}
          >
            {link.hasMenu ? (
              <Menu isOpen={isOpen === i}>
                <MenuButton
                  fontSize={"16px"}
                  fontWeight={500}
                  color={"white"}
                  as={Button}
                  bg={"none"}
                  rightIcon={<FiChevronDown />}
                  _hover={{ bg: "none", boxShadow: "transparent" }}
                  _active={{ bg: "none", boxShadow: "none" }}
                  _focus={{ bg: "none", boxShadow: "none" }}
                >
                  {link.text}
                </MenuButton>
                <MenuList
                  mt={"7px"}
                //   pos={"absolute"}
                //   left={"-100px"}
                  minW={"300px"}
                  color={"brand.main"}
                  fontWeight={500}
                  gap={"20px"}
                  py={"10px"}
                >
                  {link.items.map((item, idx) => (
                    <MenuItem key={idx}>{item}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
            ) : (
              <Link pr={'20px'}  _hover={{ textDecoration: "none", color: "hover.link"}}>{link.text}</Link>
            )}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default Navbar;
