import { Box, Text, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@chakra-ui/react";

const MotionBox = motion(Box);

const AboutUs = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.2, // Процент видимой области, после которого запускается анимация
  });
  return (
    <MotionBox
      id="about"
      m={{ base: '0px', md: "90px 0 60px " }}
      fontSize={{ base: "16px", md: "30px" }}
      ref={ref}
      fontWeight={"300"}
      initial={isMobile ? {} : { opacity: 0, y: 50 }} // Keep the structure but no animations on mobile
  animate={isMobile ? { opacity: 1, y: 0 } : { opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Ensure content is visible on mobile
  transition={isMobile ? {} : { duration: 0.6, ease: "easeOut" }} // Maintain default transition behavior
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

