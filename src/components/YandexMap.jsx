import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Link,
  Button,
  Image,
  VStack,
  HStack,
  Card,
  CardBody,
} from "@chakra-ui/react";
import Location from "./Location";

import build from "./../assets/location/build.webp";
import { motion } from "framer-motion";
import telegram from "./../assets/icons/social/telegram.svg";
import whatsap from "./../assets/icons/social/whatsapp.svg";
// import { useScroll } from "./ScrollContext";

const YandexMap = () => {
  const address = "367009, г. Махачкала Туп. Каммаева 1-й, влд.30";
  const MotionButton = motion(Button);

  //use smooth scroll section
  // const { sectionRefs } = useScroll();

  return (
    <Box my={"120px"}>
      <Location address={address} />
      <Card
        maxW={"1000px"}
        bg={"#fff"}
        // border={"1px solid #3a3a9c"}
        p={"50px"}
        m={"0 auto"}
        w={"80%"}
        borderRadius={"20px"}
        pos={"relative"}
        mt={"-120px"}
      >
        <CardBody
          id="contact"
          // ref={sectionRefs["contact"]}
        >
          <Flex gap={"50px"} justifyContent={"space-between"}>
            <Box>
              <Flex alignItems={"start"} justifyContent={"space-between"}>
                <VStack fontSize={"xxs"} alignItems={"start"}>
                  <Text color={"brand.main"} fontWeight={600}>
                    Телефон
                  </Text>
                  <Link>
                    +7 (999) 478 00 66 <br />
                    +7 (999) 478 00 55
                  </Link>
                </VStack>
                <VStack fontSize={"xxs"} alignItems={"start"}>
                  <Text color={"brand.main"} fontWeight={600}>
                    Время работы
                  </Text>
                  <Text>
                    пн-пт 8:00-18:00
                    <br /> сб 9:00-14:00
                  </Text>
                </VStack>
                <VStack fontSize={"xxs"} alignItems={"start"}>
                  <Text color={"brand.main"} fontWeight={600}>
                    Адрес
                  </Text>
                  <Text>
                    г. Махачкала, <br />
                    Туп. Каммаева 1-й, влд.30
                  </Text>
                </VStack>
              </Flex>
              <Text my={"30px"} fontSize={"xxs"} color={"gray.500"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
                reiciendis quasi sit, libero earum non sequi vitae cumque
                nesciunt ullam placeat eveniet maiores asperiores fugiat dolorem
                quos ad aperiam nobis.
              </Text>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <MotionButton
                  h={"60px"}
                  w={"200px"}
                  p={"10px 20px"}
                  borderRadius={"20px"}
                  boxShadow={"1px 2px 5px 0 #3a3a9c"}
                  fontSize={"14px"}
                  fontWeight={600}
                  border={"1px solid #3a3a9c"}
                  bg={"transparent"}
                  // bg={"#C7323D"}
                  _hover={{ bgColor: "hover.button" }}
                  whileHover={{ scale: 1.05 }}
                  // color={'white'}
                >
                  Связаться с нами
                </MotionButton>
                <Flex gap={"20px"}>
                  <Link>
                    <Image src={telegram} w={"36px"} />
                  </Link>
                  <Link>
                    <Image src={whatsap} w={"36px"} />
                  </Link>
                </Flex>
              </Flex>
            </Box>
            <Image
              src={build}
              borderRadius={"20px"}
              w={"40%"}
              h={"auto"}
              objectFit={"contain"}
            />
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
};

export default YandexMap;
