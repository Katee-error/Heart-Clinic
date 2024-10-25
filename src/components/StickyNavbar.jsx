import { Flex } from "@chakra-ui/react";
import NavLinks from "./NavLinks";

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
    >
      <NavLinks/>
    </Flex>
  );
};

export default StickyNavbar;
