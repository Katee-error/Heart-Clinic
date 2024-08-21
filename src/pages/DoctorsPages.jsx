import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import DoctorsList from "../components/DoctorsList";

const DoctorsPages = () => {
  return (
    <Box >
      <Container maxW="container.xl">
        <DoctorsList />
      </Container>
    </Box>
  );
};

export default DoctorsPages;
