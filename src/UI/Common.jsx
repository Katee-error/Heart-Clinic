import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";

const Common = ({ title }) => {
  return (
    <Box
      bgGradient="linear(to-b, #fff 37.5%, rgba(52, 137, 200, 0.86) 100%)"
      // bgImage="url('/common-section/common-2.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h={{ base: "200px", md: "200px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Center>
        <Heading
          as={"h1"}
          fontWeight={600}
          color={"black"}
          fontSize={{ base: "md", xs: "30px" }}
        >
          {title}
        </Heading>
      </Center>
    </Box>
  );
};

export default Common;

// bg image
// title locales
