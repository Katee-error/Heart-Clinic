import { useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Container,
  Image,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";

import promotion from "../data/promotion";

const PromotionDetail = () => {
  const { id } = useParams();
  const promotionItem = promotion.find((item) => item.id === Number(id));

  const { img, promotionName, description } = promotionItem;

  return (
    <Box py={"60px"}>
      <Container maxW="container.xl">
        <Image src={img} w={"auto"} h={"500px"} objectFit={"contain"}/>

        <Flex flexDirection={"column"}>
          <Text
            fontSize={{ base: "40px", md: "26px" }}
            fontWeight={"700"}
            my={"20px"}
          >
            {promotionName}
          </Text>
          <Text
            fontSize={{ base: "18px", md: "18px" }}
            fontWeight={"400"}
            w={"80%"}
          >
            {description}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default PromotionDetail;
