import React from "react";

import { Box, Container} from "@chakra-ui/react";

import PromotionList from "../components/PromotionList";

const Promotion = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        <PromotionList />
      </Container>
    </Box>
  );
};

export default Promotion;
