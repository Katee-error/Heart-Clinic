import React from "react";
import { Box, Text, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.4, // Процент видимой области, после которого запускается анимация
  });
  return (
    <MotionBox
      id="about"
      my={{base: '60px',md:"120px"}}
      pt={{'2xs': '0px',md: "60px"}}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container maxW={"container.lg"}>
        <Box textAlign={"center"}>
          <Text fontSize={{base: "20px", sm: '24px', md: "30px"}} fontWeight={"300"}>
            «Клиника Сердца» - это современная клиника, предоставляющая
            медицинские услуги по диагностике и лечению заболеваний сердца и
            сосудов, а также по другим областям медицины. Клиника входит в
            систему ОМС, поэтому есть возможность провести бесплатно диагностику
            и обследование для пациентов.
          </Text>
        </Box>
      </Container>
    </MotionBox>
  );
};

export default AboutUs;
// сделать на заднем фоне ритм сердца с экг
