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

const OurDoctors = () => {
  const MotionCard = motion(GridItem);
  return (
    <Box my={"120px"} py={'60px'}>
      <Container maxW="container.xl">
        <Flex justifyContent={"space-between"} pb={"60px"}>
          <Heading fontSize={'50px'} fontWeight={"300"} maxW={'500px'}>Квалифицированные Специалисты</Heading>
          <Button
            p={"10px 30px"}
            borderRadius={"10px"}
            fontSize={"14px"}
            fontWeight={400}
            border={"1px solid #3a3a9c"}
            bg={"transparent"}
            // bg={"#C7323D"}
            _hover={{ bgColor: "hover.button" }}
            whileHover={{ scale: 1.05 }}
          >
            Все врачи
            <Image src={arrow} w={"20px"} ml={"10px"} />
          </Button>
        </Flex>
        <Tabs variant="soft-rounded" align="center" colorScheme="gray">
          <TabList mb={"30px"}>
            <Tab
              fontSize={"16px"}
              border={"1px solid #3a3a9c"}
              mr={"15px"}
              fontWeight={500}
           
            >
              Кардиолог
            </Tab>
            <Tab
              fontSize={"16px"}
              border={"1px solid #3a3a9c"}
              mr={"15px"}
              fontWeight={500}
            >
              Хирург
            </Tab>
            <Tab
              fontSize={"16px"}
              border={"1px solid #3a3a9c"}
              mr={"15px"}
              fontWeight={500}
            >
              Врач-терапевт
            </Tab>
            <Tab
              fontSize={"16px"}
              border={"1px solid #3a3a9c"}
              mr={"15px"}
              fontWeight={500}
            >
              Врач-терапевт
            </Tab>
            <Tab
              fontSize={"16px"}
              border={"1px solid #3a3a9c"}
              mr={"15px"}
              fontWeight={500}
            >
              Врач-терапевт
            </Tab>
            <Tab fontSize={"16px"} border={"1px solid #3a3a9c"}>
              Врач-терапевт
            </Tab>
          </TabList>
          {/* <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels> */}
        </Tabs>

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
                  </Stack>
                </CardBody>
              </Card>
            </MotionCard>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default OurDoctors;
