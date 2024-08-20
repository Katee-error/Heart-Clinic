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
import links from "../data/links";

const StickyNavbar = () => {
 
  const [isOpen, setIsOpen] = useState(null);
  return (
    <Flex
      as={"nav"}
      color={"brand.main"}
      // border={"1px solid #3a3a9c"}
      gap={"10px"}
      fontWeight={600}
      fontSize={"xs"}
      alignItems={"center"}
      justifyContent={"space-around"}
      h={"70px"}
      borderRadius={"20px"}
    >
      {links.map((link, i) => (
        <Link
          onMouseEnter={() => link.hasMenu && setIsOpen(i)}
          onMouseLeave={() => link.hasMenu && setIsOpen(null)}
          key={i}
          as={RouterLink}
          to="/"
          state={{ section: link.section }}
          px={2}
          py={1}
          _hover={{ textDecoration: "none" }}
          //   color={getLinkColor("/")}
        >
          {link.hasMenu ? (
            <Menu isOpen={isOpen === i}>
              <MenuButton
                fontSize={"16px"}
                fontWeight={600}
                color={"brand.main"}
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
            <Link
              pr={"10px"}
              _hover={{ textDecoration: "none", color: "hover.link" }}
            >
              {link.text}
            </Link>
          )}
        </Link>
      ))}
    </Flex>
  );
};

export default StickyNavbar;
