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
      initial={isMobile ? undefined : { opacity: 0, y: 50 }} // Установка undefined вместо пустого объекта
      animate={
        isMobile ? undefined : { opacity: inView ? 1 : 0, y: inView ? 0 : 50 }
      }
      transition={isMobile ? undefined : { duration: 0.6, ease: "easeOut" }} // undefined для отключения анимации
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
