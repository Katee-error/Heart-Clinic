import {
  Box,
  Heading,
  Text,
  Flex,
  Card,
  Stack,
  CardBody,
  Image,
  Button,
  Container,
  GridItem,
  SimpleGrid,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";

import specialistics from "../data/OurSpecialists";
import arrow from "./../assets/icons/arrow-right.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

const OurDoctors = () => {
  const MotionCard = motion(GridItem);
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.3, // Процент видимой области, после которого запускается анимация
  });
  return (
    <MotionBox
      my={"120px"}
      py={"60px"}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container maxW="container.xl">
        <Flex justifyContent={"space-between"} pb={"60px"}>
          <Heading fontSize={"50px"} fontWeight={"300"} maxW={"500px"}>
            Квалифицированные Специалисты
          </Heading>
        </Flex>

        <SimpleGrid minChildWidth="250px" p={"20px"} spacing={"40px"}>
          {specialistics.map((item, i) => (
            <MotionCard key={i} whileHover={{ scale: 1.08 }}>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    borderRadius="lg"
                    src={item.img}
                    w={"auto"}
                    h={"250px"}
                    m={"0 auto"}
                  />
                  <Stack mt="6" spacing="3">
                    <Heading fontSize={"20px"}>{item.name}</Heading>
                    <Text color={"gray.500"}>{item.post}</Text>
                    <Box bg={'brand.main'} color={'white'} borderRadius={'10px'} fontWeight={600} p={'10px '} display={'inline-block'} w={'50%'}>
                      Опыт {item.experience}
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </MotionCard>
          ))}
        </SimpleGrid>
      </Container>
    </MotionBox>
  );
};

export default OurDoctors;
