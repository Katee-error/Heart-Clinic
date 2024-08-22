import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  SimpleGrid,
  Flex,
  Button,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import servicesAll from "../data/servicesDetail";
import { FiSearch } from "react-icons/fi";
import servicesImg from "/services-img.jpg";

const ServicesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все услуги');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Фильтрация услуг по названию
  const searchedServices = servicesAll.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Фильтрация услуг по категории и результатам поиска
  const filteredServices = selectedCategory === 'Все услуги'
    ? searchedServices
    : searchedServices.filter(service => service.category === selectedCategory);

  // Получаем уникальные категории из данных
  const categories = [
    'Все услуги',
    ...new Set(servicesAll.map(service => service.category)),
  ];

  const handleTabClick = index => {
    setCurrentIndex(index);
    setSelectedCategory(categories[index]);
  };

  const handleTabChange = index => {
    setActiveIndex(index);
  };
  

  return (
    <Box>
      <Box>
        <Container maxW="container.xl">
          <Box
            h={"300px"}
            borderRadius={"20px"}
            bgImage="url('/services-img.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            pt={"80px"}
            pb={"40px"}
            mb={"80px"}
            display="flex"
            alignItems="center"
            justifyContent="center"
          />
          <Heading
            fontSize={{ base: "40px", md: "50px" }}
            fontWeight={"300"}
            mb={{ base: "20px", md: "40px" }}
          >
            Наши услуги
          </Heading>

          <Box>
            <InputGroup mb={"40px"}>
              <InputLeftElement pointerEvents="none">
                <FiSearch />
              </InputLeftElement>
              <Input
                fontSize={"16px"}
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Поиск по услугам"
          
                focusBorderColor={"brand.main"}
              />
            </InputGroup>
            <Box className="tabs-container">
              <Tabs
                position="relative"
                variant="unstyled"
                isLazy
                index={currentIndex}
                onChange={(index) => setSelectedCategory(categories[index])}
              >
                <Box
                  className="tabs-wrapper"
                  borderBottom={"1px solid #EDF2F7"}
                >
                  <TabList className="scrolling-tabs" position="relative">
                    {categories.map((category, index) => (
                      <Tab
                        key={index}
                        fontSize={"18px"}
                        fontWeight={600}
                        color={"gray.500"}
                        mr={"20px"}
                        position="relative"
                        onClick={() => handleTabChange(index)}
                      >
                        {category}
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
                {filteredServices.length === 0 ? (
                  <Heading py="60px">Услуга не найдена</Heading>
                ) : (
                  <TabPanels my="60px">
                    {categories.map((category, index) => (
                      <TabPanel key={index}>
                        <SimpleGrid columns={[1, 2]} gap="20px 70px">
                          {filteredServices.map(service => (
                            <Box key={service.id} p="15px">
                              <Text fontWeight="600">{service.name}</Text>
                            </Box>
                          ))}
                        </SimpleGrid>
                      </TabPanel>
                    ))}
                  </TabPanels>
                )}
              </Tabs>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* <Box>
        <Container maxW={"container.xl"}>
          <SimpleGrid minChildWidth="300px">
            {servicesData.length === 0 ? (
              <Heading>Услуг с таким названием не найдено </Heading>
            ) : (
              <ServicesList data={servicesData} />
            )}
          </SimpleGrid>
        </Container>
      </Box> */}
    </Box>
  );
};

export default ServicesPage;
