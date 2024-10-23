import { Box, Text, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@chakra-ui/react";

const MotionBox = motion(Box);

const AboutUs = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.2, // Процент видимой области, после которого запускается анимация
  });
  return (
    <MotionBox
      id="about"
      m={{ base: "10px 0 60px", md: "60px 0 100px" }}
      fontSize={{ base: "20px", sm: "24px", md: "30px" }}
      ref={ref}
      fontWeight={"300"}
      initial={{ opacity: 0, y: isMobile ? 0 : 50 }} 
      animate={{ opacity: inView ? 1 : 0, y: inView && !isMobile ? 0 : 50 }}
      transition={{ duration: isMobile ? 0.3 : 0.6, ease: "easeOut" }} 
    >
      <Container maxW={"container.lg"}>
        <Box textAlign={"center"}>
          <Text>
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
