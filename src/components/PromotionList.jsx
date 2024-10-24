import { Box, Heading, Flex, Container, SimpleGrid } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import promotion from "../data/promotion";
import PromotionCard from "./PromotionCard";
import { useMediaQuery } from "@chakra-ui/react";

const MotionBox = motion(Box);

const PromotionList = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.2, // Процент видимой области, после которого запускается анимация
  });
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <MotionBox
      my={["50px", "80px"]}
      ref={ref}
      initial={isMobile ? {} : { opacity: 0, y: 50 }} // Keep the structure but no animations on mobile
      animate={
        isMobile
          ? { opacity: 1, y: 0 }
          : { opacity: inView ? 1 : 0, y: inView ? 0 : 50 }
      } // Ensure content is visible on mobile
      transition={isMobile ? {} : { duration: 0.6, ease: "easeOut" }} // Maintain default transition behavior
    >
      <Container maxW="container.xl">
        <Flex justifyContent={"space-between"} pb={["30px", "40px"]}>
          <Heading
            fontSize={{ base: "40px", md: "50px" }}
            fontWeight={"300"}
            maxW={"500px"}
          >
            Акции
          </Heading>
        </Flex>

        <SimpleGrid minChildWidth="250px" p={"20px"} spacing={"40px"}>
          {promotion.map((promotion) => (
            <PromotionCard key={promotion.id} promotion={promotion} />
          ))}
        </SimpleGrid>
      </Container>
    </MotionBox>
  );
};

export default PromotionList;
