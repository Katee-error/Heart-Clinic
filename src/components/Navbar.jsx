import { Box, Flex } from "@chakra-ui/react";
import NavLinks from "./NavLinks";

const Navbar = () => {
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
        <NavLinks />
      </Flex>
    </Box>
  );
};

export default Navbar;
