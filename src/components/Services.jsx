import {
  Box,
  Container,
  Flex,
  Link,
  Text,
  Heading,
  Button,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import services1 from "./../assets/all/services-1.jpg";
import arrow from "./../assets/icons/arrow-right.svg";

const Services = () => {
  return (
    <Box
      bgImage="url('/services.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      pt={"80px"}
      pb={"40px"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW={"container.xl"}>
        <Heading
          mb={{ base: "40px", md: "60px" }}
          fontSize={"50px"}
          fontWeight={"300"}
          as={"h2"}
        >
          Услуги клиники
        </Heading>
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab fontSize={"16px"} mr={"20px"}>
              название
            </Tab>
            <Tab fontSize={"16px"} mr={"20px"}>
              название
            </Tab>
            <Tab fontSize={"16px"} mr={"20px"}>
              название
            </Tab>
            <Tab fontSize={"16px"} mr={"20px"}>
              название
            </Tab>
            <Tab fontSize={"16px"} mr={"20px"}>
              название
            </Tab>
            <Tab fontSize={"16px"} mr={"20px"}>
              название
            </Tab>
            <Tab fontSize={"16px"} mr={"20px"}>
              название
            </Tab>
            <Tab fontSize={"16px"} mr={"20px"}>
              название
            </Tab>
            <Tab fontSize={"16px"} mr={"20px"}>
              название
            </Tab>
            <Tab fontSize={"16px"} mr={"20px"}>
              название
            </Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="brand.main"
            borderRadius="1px"
            zIndex={"1000"}
          />
          <Divider
            borderBottomWidth={"2px"}
            borderBottomColor={"gray.300"}
            mt="-1.5px"
          />
          <TabPanels mt={"60px"}>
            <TabPanel>
              <Flex alignItems={"start"} justifyContent={"space-between"}>
                <Box w={"50%"}>
                  <Heading mb={"30px"} fontWeight={400} fontSize={"md"}>
                    Name Services
                  </Heading>
                  <Text color={"gray.500"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis fugiat rerum error molestias obcaecati alias ab
                    ut dolore temporibus incidunt nemo quos officiis, laborum
                    perferendis officia voluptatibus explicabo vero repellat.
                  </Text>
                  <Button
                    p={"10px 20px"}
                    borderRadius={"10px"}
                    fontSize={"14px"}
                    fontWeight={500}
                    border={"1px solid #3a3a9c"}
                    bg={"transparent"}
                    // bg={"#C7323D"}
                    _hover={{ bgColor: "hover.button" }}
                    whileHover={{ scale: 1.05 }}
                    mt={"30px"}
                  >
                    Узнать больше
                    <Image src={arrow} w={"20px"} ml={"10px"} />
                  </Button>
                </Box>
                <Box>
                  <Image src={services1} borderRadius={"20px"} />
                </Box>
              </Flex>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};

export default Services;
