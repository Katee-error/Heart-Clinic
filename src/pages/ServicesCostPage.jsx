import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const ServicesCostPage = () => {
  return (
    <Box py={{ md: "60px" }}>
      <Container maxW="container.xl">
        <Heading
          fontSize={{ base: "40px", md: "50px" }}
          fontWeight={"300"}
          mb={{ base: "20px", md: "40px" }}
        >
          Стоимость медицинских услуг
        </Heading>
        <Box></Box>
      </Container>
    </Box>
  );
};

export default ServicesCostPage;
