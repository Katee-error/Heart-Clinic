import React from "react";
import { Box, Text, Container } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box my={"120px"} py={'60px'}>
      <Container maxW={"container.lg"}>
        <Box textAlign={'center'}>
          <Text  mb={{ base: "40px", md: "60px" }}
          fontSize={"30px"}
          fontWeight={"300"}
          >
            «Клиника Сердца» - это современная клиника, предоставляющая
            медицинские услуги по диагностике и лечению заболеваний сердца и
            сосудов, а также по другим областям медицины. Клиника входит в
            систему ОМС, поэтому есть возможность провести бесплатно диагностику
            и обследование для пациентов.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
// сделать на заднем фоне ритм сердца с экг
