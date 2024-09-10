import { Box, Container } from "@chakra-ui/react";
import DoctorsList from "../components/DoctorsList";

const DoctorsPages = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        <DoctorsList />
      </Container>
    </Box>
  );
};

export default DoctorsPages;
