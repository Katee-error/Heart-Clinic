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
import React, { useState } from "react";
import services1 from "./../assets/all/services-1.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

const services = [
  {
    tabName: "Консультация флеболога",
    title: "Консультация врача сердечно-сосудистого хирурга / флеболога",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat rerum error molestias obcaecati alias ab ut dolore temporibus incidunt nemo quos officiis, laborum perferendis officia voluptatibus explicabo vero repellat.",
    img: services1,
  },
  {
    tabName: "Консультация кардиолога",
    title: "Консультация врача кардиолога",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat rerum error molestias obcaecati alias ab ut dolore temporibus incidunt nemo quos officiis, laborum perferendis officia voluptatibus explicabo vero repellat.",
    img: services1,
  },
  {
    tabName: "ЭКГ",
    title: "Электрокардиография (ЭКГ)",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat rerum error molestias obcaecati alias ab ut dolore temporibus incidunt nemo quos officiis, laborum perferendis officia voluptatibus explicabo vero repellat.",
    img: services1,
  },
  {
    tabName: "СМЭКГ",
    title: "Суточное (холтеровское) мониторирование ЭКГ (СМЭКГ)",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat rerum error molestias obcaecati alias ab ut dolore temporibus incidunt nemo quos officiis, laborum perferendis officia voluptatibus explicabo vero repellat.",
    img: services1,
  },
  {
    tabName: "СМАД",
    title: "Суточное мониторирование артериального давления (СМАД)",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat rerum error molestias obcaecati alias ab ut dolore temporibus incidunt nemo quos officiis, laborum perferendis officia voluptatibus explicabo vero repellat.",
    img: services1,
  },
  {
    tabName: "УЗИ сердца ",
    title: "Ультразвуковое исследование (УЗИ) сердца (эхокардиография, ЭхоКГ)",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat rerum error molestias obcaecati alias ab ut dolore temporibus incidunt nemo quos officiis, laborum perferendis officia voluptatibus explicabo vero repellat.",
    img: services1,
  },
  {
    tabName: "ЭхоКГс",
    title: "ЭхоКГс физической или фармакологической нагрузкой (стресс-ЭхоКГ)",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat rerum error molestias obcaecati alias ab ut dolore temporibus incidunt nemo quos officiis, laborum perferendis officia voluptatibus explicabo vero repellat.",
    img: services1,
  },
  {
    tabName: "УЗДГ сосудов",
    title: "Ультразвуковая допплерография (УЗДГ) сосудов",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat rerum error molestias obcaecati alias ab ut dolore temporibus incidunt nemo quos officiis, laborum perferendis officia voluptatibus explicabo vero repellat.",
    img: services1,
  },
  {
    tabName: "Дневной стационар",
    title: "Дневной стационар",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat rerum error molestias obcaecati alias ab ut dolore temporibus incidunt nemo quos officiis, laborum perferendis officia voluptatibus explicabo vero repellat.",
    img: services1,
  },
  {
    tabName: "Лабораторная диагностика",
    title: "Лабораторная диагностика",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugiat rerum error molestias obcaecati alias ab ut dolore temporibus incidunt nemo quos officiis, laborum perferendis officia voluptatibus explicabo vero repellat.",
    img: services1,
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.4, // Процент видимой области, после которого запускается анимация
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTabClick = (index) => {
    setCurrentIndex(index);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (index) => {
    setActiveIndex(index);
  };
  return (
    <MotionBox
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
        <Heading
          mb={{ base: "40px", md: "60px" }}
          fontSize={"50px"}
          fontWeight={"300"}
          as={"h2"}
        >
          Услуги клиники
        </Heading>
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
                  <Tab key={index} fontSize={"16px"} mr={"20px"}  position="relative" onClick={() => handleTabChange(index)}>
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
                  <Flex alignItems={"start"} justifyContent={"space-between"}>
                    <Box w={"50%"}>
                      <Heading mb={"30px"} fontWeight={400} fontSize={"md"}>
                        {service.title}
                      </Heading>
                      <Text color={"gray.500"}>{service.desc}</Text>
                    </Box>
                    <Box>
                      <Image src={service.img} borderRadius={"20px"} />
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
