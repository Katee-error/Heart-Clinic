import React from "react";
import {
  Box,
  GridItem,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PromotionCard = ({ promotion }) => {
  const MotionCard = motion(GridItem);
  return (
    <MotionCard whileHover={{ scale: 1.08 }} cursor="pointer">
      <Link to={`/promotion/${promotion.id}`}>
        <Card maxW="lg" p={"20px"} h={{ base: "520px", md: "650px" }}>
          <CardBody>
            <Box position={"relative"} w={"100%"} height={"auto"}>
              <Image
                alt={promotion.promotionName}
                loading="lazy"
                borderRadius="lg"
                src={promotion.img}
                w={"100%"}
                h={"auto"}
                objectFit={"contain"}
              />
            </Box>

            <Stack mt="6" spacing="4">
              <Box
                bg={"transparent"}
                border={"1px solid #3A3A9C"}
                color={"brand.main"}
                borderRadius={"10px"}
                fontWeight={600}
                p={"5px 10px "}
                w={{ base: "40%", md: "20%" }}
                textAlign={"center"}
              >
                Акция
              </Box>
              <Heading fontSize={{ base: "18px", md: "20px" }}>
                {promotion.promotionName}
              </Heading>
            </Stack>
          </CardBody>
        </Card>
      </Link>
    </MotionCard>
  );
};

export default PromotionCard;
