import { useState } from "react";
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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import servicesAll from "../data/servicesDetail";
import { FiSearch } from "react-icons/fi";
import { FaRubleSign } from "react-icons/fa6";

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все услуги");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Фильтрация услуг по названию
  const searchedServices = servicesAll.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Фильтрация услуг по категории и результатам поиска
  const filteredServices =
    selectedCategory === "Все услуги"
      ? searchedServices
      : searchedServices.filter(
          (service) => service.category === selectedCategory
        );

  // Получаем уникальные категории из данных
  const categories = [
    "Все услуги",
    ...new Set(servicesAll.map((service) => service.category)),
  ];

  const handleTabClick = (index) => {
    setCurrentIndex(index);
    setSelectedCategory(categories[index]);
  };

  const handleTabChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box bg={"#f0f4fc"}>
      <Box>
        <Container maxW="container.xl">
          <Box
            h={{base:"200px", md: '400px'}}
            borderRadius={"0px 0px 20px 20px "}
            bgImage="url('/cost-3.jpg')"
            bgPosition="center bottom"
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
            fontSize={{ base: "30px", md: "50px" }}
            fontWeight={"300"}
            mb={{ base: "20px", md: "40px" }}
          >
            Стоимость медецинских услуг
          </Heading>

          <Box>
            <InputGroup mb={"40px"}>
              <InputLeftElement pointerEvents="none" px={'10px'}>
                <FiSearch size={'20px'}/>
              </InputLeftElement>
              <Input
                fontSize={"16px"}
                bg={"white"}
                py={"20px"}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                  borderBottom={"1px solid #E2E8F0"}
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
                  <TabPanels py="60px">
                    {categories.map((category, index) => (
                      <TabPanel key={index}>
                        <SimpleGrid columns={[1]} gap="20px 70px">
                          {filteredServices.map((service) => (
                            <Box
                              key={service.id}
                              p="20px 30px"
                              boxShadow={"sm"}
                              
                              bg={"white"}
                              borderRadius={"10px"}
                            >
                              <Flex
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                gap={'10px'}
                              >
                                <Text fontWeight="600" whiteSpace={'wrap'}>{service.name}</Text>
                                <Flex
                                  color={"brand.main"}
                                  gap={"5px"}
                                  alignItems={"center"}
                            
                             
                                >
                                  <Text fontWeight={700} whiteSpace={'nowrap'}>{service.cost}</Text>
                                  <FaRubleSign />
                                </Flex>
                              </Flex>
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
    </Box>
  );
};

export default ServicesPage;
