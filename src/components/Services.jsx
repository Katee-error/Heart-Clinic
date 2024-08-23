import {
  Box,
  Container,
  Flex,
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
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import services from "../data/services";
import { Link } from 'react-router-dom';

const MotionBox = motion(Box);

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.3, // Процент видимой области, после которого запускается анимация
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTabClick = (index) => {
    setCurrentIndex(index);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (index) => {
    setActiveIndex(index);
  };

  const MotionImage = motion(Image);
  const MotionButton = motion(Button);
  return (
    <MotionBox
      id="services"
      bgImage="url('/services.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      pt={"80px"}
      pb={"40px"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container maxW={"container.xl"}>
        <Flex justifyContent={'space-between'} alignItems={'start'} >
          <Heading
            mb={{ base: "40px", md: "60px" }}
            fontSize={{ base: "40px", md: "50px" }}
            fontWeight={"300"}
            as={"h2"}
          >
            Услуги клиники
          </Heading>
          <Link to='/services'>
            <MotionButton
              h={"40px"}
              w={"150px"}
              p={"10px 20px"}
              mt={'15px'}
              borderRadius={"10px"}
              fontSize={"14px"}
              fontWeight={700}
              border={"1px solid #3a3a9c"}
              bg={"white"}
              _hover={{ bgColor: "hover.button" }}
              whileHover={{ scale: 1.05 }}
              boxShadow={"1px 2px 5px 0 #3a3a9c"}
            >
              Все услуги
            </MotionButton>
          </Link>
        </Flex>
        <Box className="tabs-container">
          <Tabs
            position="relative"
            variant="unstyled"
            isLazy
            index={currentIndex}
            onChange={(index) => handleTabClick(index)}
          >
            <Box className="tabs-wrapper">
              <TabList className="scrolling-tabs" position="relative">
                {services.map((service, index) => (
                  <Tab
                    key={index}
                    fontSize={"16px"}
                    mr={"20px"}
                    position="relative"
                    onClick={() => handleTabChange(index)}
                  >
                    {service.tabName}
                    {activeIndex === index && (
                      <Box
                        position="absolute"
                        bottom={0}
                        left={0}
                        width="100%"
                        height="2px"
                        bg="brand.main"
                        transition="all 0.3s ease"
                      />
                    )}
                  </Tab>
                ))}
              </TabList>
            </Box>

            <TabPanels mt={"60px"}>
              {services.map((service, index) => (
                <TabPanel key={index}>
                  <Flex
                    alignItems={"start"}
                    justifyContent={"space-between"}
                    flexDirection={{ base: "column", md: "row" }}
                    gap={{ base: "20px" }}
                  >
                    <Box w={{ base: "100%", md: "50%" }}>
                      <Heading mb={"30px"} fontWeight={400} fontSize={"md"}>
                        {service.title}
                      </Heading>
                      <Text color={"gray.500"}>{service.desc}</Text>
                    </Box>
                    <Box>
                      <MotionImage
                        src={service.img}
                        borderRadius={"20px"}
                        whileHover={{ scale: 1.05 }}
                      />
                    </Box>
                  </Flex>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </MotionBox>
  );
};

export default Services;
