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
  VStack,
  Link,
} from "@chakra-ui/react";
import doctor from "./../assets/about-us/icons/doctor.webp";
import letter from "./../assets/about-us/icons/letter.webp";
import stethoscope from "./../assets/about-us/icons/stethoscope.webp";

import { motion } from "framer-motion";

const AboutUsPage = () => {
  const MotionCard = motion(Card);

  return (
    <Box py={{ md: "60px" }}>
      <Container maxW="container.xl">
        <Heading
          fontSize={{ base: "40px", md: "50px" }}
          fontWeight={"300"}
          mb={{ base: "20px", md: "40px" }}
        >
          О нашей клинике
        </Heading>
        <VStack alignItems={"start"} spacing={"20px"} fontSize={"18px"}>
          <Text w={"70%"}>
            Медицинский центр «Клиника Сердца» - это современная клиника,
            предоставляющая медицинские услуги по диагностике и лечению
            заболеваний сердца и сосудов, а также по другим областям медицины.
          </Text>
          <Text>
            - Наша клиника оснащена самым современным оборудованием. Врачи
            клиники имеют многолетний опыт диагностики и лечения
            сердечно-сосудистых заболеваний.
          </Text>
          <Text>
            - Лаборатория Клиники Сердца позволяет сдать различные комплексы
            анализов и оперативно получить результат.
          </Text>
          <Text>
            - В клинике есть стандартная и VIP палаты дневного стационара для
            послеоперационной реабилитации.
          </Text>
          <Link color={"blue"} href="./about_us.pdf" isExternal>
            О нашей клинике
          </Link>
          <Link color={"blue"} href="./license.pdf" isExternal>
            Лицензия клиники
          </Link>
        </VStack>
        <Box my={{ base: "70px", md: "70px" }}>
          <SimpleGrid minChildWidth="230px" spacing={{ base: "50px" }}>
            <GridItem>
              <MotionCard
                maxW="sm"
                border={"1px solid #3a3a9c"}
                whileHover={{ scale: 1.08 }}
              >
                <CardBody minH={"350px"}>
                  <Image src={doctor} alt="doctor" w={"50px"} h={"50px"} mb={"15px"} loading="lazy" />
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
            </GridItem>
            <GridItem>
              <MotionCard
                maxW="sm"
                border={"1px solid #3a3a9c"}
                whileHover={{ scale: 1.08 }}
              >
                <CardBody minH={"350px"}>
                  <Image src={stethoscope} alt="stethoscope" w={"50px"} h={"50px"} mb={"15px"} loading="lazy"/>
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
                maxW="sm"
                border={"1px solid #3a3a9c"}
                whileHover={{ scale: 1.08 }}
              >
                <CardBody minH={"350px"}>
                  <Image src={letter} alt="letter" w={"50px"} h={"50px"} mb={"15px"} loading="lazy" />
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
            </GridItem>{" "}
          </SimpleGrid>
        </Box>
        <Box
          display={"none"}
          id="hero"
          width={{ base: "100%", md: "80%" }}
          height={{
            base: "300px",
            xs: "565px",
            sm: "600px",
            md: "650px",
            lg: "700px",
            xl: "900px",
          }}
          overflow="hidden"
          position="relative"
          py={{ base: "0", md: "60px" }}
          m={"0 auto"}
          borderRadius={"20px"}
        ></Box>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
