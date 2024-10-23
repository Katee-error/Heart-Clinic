import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import Benefits from "../components/Benefits";

const AboutUsPage = () => {

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
        <VStack alignItems={"start"} spacing={"20px"} fontSize={"18px"} mb={'-60px'}>
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
          <Link color={"brand.main"} fontWeight={700} href="./about_us.pdf" isExternal>
            О нашей клинике
          </Link>
          <Link color={"brand.main"} fontWeight={700} href="./license.pdf" isExternal>
            Лицензия клиники
          </Link>
        </VStack>
        <Benefits/>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
