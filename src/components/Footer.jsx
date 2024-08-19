import {
  Box,
  Container,
  Image,
  Flex,
  Link,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { React, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import logo from "./../assets/logo/logo.png";


const Footer = () => {

  const activeColor = useColorModeValue("#3489C8");
  const inactiveColor = useColorModeValue("black");

  const getLinkColor = (path) => {
    return location.pathname === path ? activeColor : inactiveColor;
  };

  return (
    <Box py={"60px"} bg={"#F8F8F8"}>
      <Container  maxW="container.xl">
        {/* MOBILE */}
        <Box display={{base: 'flex', md: 'none'}}>
          <Flex justifyContent={"space-between"} alignItems={"start"} >
          <Box>
            <NavLink to="/">
              <Image src={logo} alt="logo" w={"130px"} />
            </NavLink>
            <Flex
              flexDirection={{ base: "column" }}
              gap={"5px"}
              mt={{base: '20px', md: '0'}}
              fontWeight={500}
            >
              <Link
                as={NavLink}
                smooth
                to="/home/#about"
                px={2}
                py={1}
                _hover={{ textDecoration: "none", fontWeight: "600" }}
                color={getLinkColor("/#about")}
              >
          
              </Link>
              <Link
                as={NavLink}
                smooth
                to="/home/#product"
                px={2}
                py={1}
                _hover={{ textDecoration: "none", fontWeight: "600" }}
                color={getLinkColor("/product")}
              >
                
              </Link>
              <Link
                as={NavLink}
                to="/detail/#main"
                px={2}
                py={1}
                _hover={{ textDecoration: "none", fontWeight: "600" }}
                color={getLinkColor("/detail")}
              >
          
              </Link>
            </Flex>
          </Box>
          <VStack w={{ base: "50%" }} spacing={"20px"}>
            <Box>
              <Heading fontSize={"xs"}></Heading>
              <Flex
                flexDirection={{ base: "column" }}
                gap={{ base: "2px" }}
                mt={"8px"}
              >
                <Link href="mailto:office@monocure.ee" color="#3489C8">
                  office@monocure.ee
                </Link>
                <Link href="mailto:nikolai@monocure.ee" color="#3489C8">
                  nikolai@monocure.ee
                </Link>
              </Flex>
            </Box>
            <Box>
              <Heading fontSize={"xs"}></Heading>
              <Text mt={"10px"} t>
              
              </Text>
            </Box>
          </VStack>
        </Flex>
        </Box>
        
          {/* DESKTOP */}
          <Flex justifyContent={'space-between'} alignItems={'start'}  display={{base: 'none', md: 'flex'}}>
            <NavLink to="/">
              <Image src={logo} alt="logo" w={"130px"} />
            </NavLink>
            <Flex
              flexDirection={{ base: "column" }}
              gap={"5px"}
              mt={{base: '20px', md: '0'}}
              fontWeight={500}
            >
              <Link
                as={NavLink}
                smooth
                to="/home/#about"
                px={2}
                py={1}
                _hover={{ textDecoration: "none", fontWeight: "600" }}
                color={getLinkColor("/#about")}
              >
            
              </Link>
              <Link
                as={NavLink}
                smooth
                to="/home/#product"
                px={2}
                py={1}
                _hover={{ textDecoration: "none", fontWeight: "600" }}
                color={getLinkColor("/product")}
              >
            
              </Link>
              <Link
                as={NavLink}
                to="/detail/#main"
                px={2}
                py={1}
                _hover={{ textDecoration: "none", fontWeight: "600" }}
                color={getLinkColor("/detail")}
              >
          
              </Link>
            </Flex>
            <Box>
              <Heading fontSize={"xs"}></Heading>
              <Flex
                flexDirection={{ base: "column" }}
                gap={{ base: "2px" }}
                mt={"8px"}
              >
                <Link href="mailto:office@monocure.ee" color="#3489C8">
                  office@monocure.ee
                </Link>
                <Link href="mailto:nikolai@monocure.ee" color="#3489C8">
                  nikolai@monocure.ee
                </Link>
              </Flex>
            </Box>
            <Box>
              <Heading fontSize={"xs"}></Heading>
              <Text mt={"10px"} t>
   
              </Text>
            </Box>
          </Flex>
      </Container>
    </Box>
  );
};

export default Footer;

// прописать desktop
