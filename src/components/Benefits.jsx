import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Image,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import doctor from "./../assets/about-us/icons/doctor.webp";
import en from "./../assets/about-us/icons/en.webp";
import stethoscope from "./../assets/about-us/icons/stethoscope.webp";

const MotionBox = motion(Box);

const Benefits = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.3, // Процент видимой области, после которого запускается анимация
  });

  const MotionCard = motion(Card);

  return (
    <MotionBox
      my={"120px"}
      py={{ base: "0px", md: "60px" }}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container maxW="container.xl">
        <Box
          pos={"relative"}
          w={"100%"}
          h={{ base: "120px", md: "300px" }}
          borderRadius={'10px'}
          bgColor={"brand.main"}
        >
          <Heading
            mb={"60px"}
            fontSize={{ base: "24px", md: "50px" }}
            fontWeight={300}
            pos={"absolute"}
            top={"10"}
            left={{ base: "10px", md: "20" }}
            color={"#fff"}
          >
            {" "}
            Почему нас выбирают?
          </Heading>
        </Box>
        <Box mt={{ base: "30px", md: "-70px" }} zIndex={"1"} pos={"relative"}>
          <SimpleGrid
            minChildWidth="200px"
            // minChildHeight='300px'
            spacing={{ base: "30px", md: "100px" }}
          >
            <GridItem>
              <MotionCard
                minH={{ md: "400px" }}
                maxW="sm"
                border={"1px solid #3a3a9c"}
                whileHover={{ scale: 1.08 }}
              >
                <CardBody>
                  <Image
                    src={doctor}
                    alt="doctor"
                    w={"50px"}
                    h={"50px"}
                    mb={"15px"}
                    loading="lazy"
                  />
                  <Heading fontSize={"16px"} mb={"10px"}>
                    Квалифицированные специалисты
                  </Heading>
                  <Text fontSize={"14px"}>
                    Врачи и сотрудники нашей клиники являются лучшими
                    специалистами в сердечно-сосудистой области. Опыт
                    медицинского персонала «Клиники Сердца» позволяет помочь
                    пациентам с самыми сложными диагнозами, а постоянное
                    изучение новых технологий и тенденций в медицине, регулярное
                    повышение квалификации и участие во всероссийских и
                    всемирных конференциях дает возможность использовать
                    современные способы лечения.
                  </Text>
                </CardBody>
              </MotionCard>
            </GridItem>{" "}
            <GridItem>
              <MotionCard
                minH={{ md: "400px" }}
                maxW="sm"
                border={"1px solid #3a3a9c"}
                whileHover={{ scale: 1.08 }}
              >
                <CardBody>
                  <Image
                    src={stethoscope}
                    w={"50px"}
                    h={"50px"}
                    mb={"15px"}
                    loading="lazy"
                    alt="stethoscope"
                  />
                  <Heading fontSize={"16px"} mb={"10px"}>
                    Современное оборудование
                  </Heading>
                  <Text fontSize={"14px"}>
                    «Клиника Сердца» оснащена передовым оборудованием для
                    диагностики и лечения всей сердечно-сосудистой системы
                    человека. Современная лаборатория позволяет сделать все
                    необходимые для диагностики анализы на месте. Более того, в
                    клинике применяется специальная система подготовки
                    медицинского оборудования и инструментария для приема
                    пациентов, а также ведется постоянный мониторинг за
                    санитарно-гигиеническим состоянием всех кабинетов.
                  </Text>
                </CardBody>
              </MotionCard>
            </GridItem>{" "}
            <GridItem>
              <MotionCard
                minH={{ md: "400px" }}
                maxW="sm"
                border={"1px solid #3a3a9c"}
                whileHover={{ scale: 1.08 }}
              >
                <CardBody>
                  <Image
                    src={en}
                    w={"50px"}
                    h={"50px"}
                    mb={"15px"}
                    loading="lazy"
                    alt="enviroment"
                  />
                  <Heading fontSize={"16px"} mb={"10px"}>
                    Главное для нас – решение Вашей проблемы!
                  </Heading>
                  <Text fontSize={"14px"}>
                    Врачи «Клиники Сердца» назначают только те обследования,
                    которые необходимы для пациента, без навязывания ненужных
                    процедур. Здоровье и благополучие наших пациентов – это
                    первоочередная задача клиники.
                  </Text>
                </CardBody>
              </MotionCard>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Container>
    </MotionBox>
  );
};

export default Benefits;
