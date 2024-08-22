import { React, useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage, // error text check
  Input,
  Button,
  Divider,
  Link,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import AutoResizeTextarea from "./AutoResizeTexarea";
import { toast } from "react-toastify";
import formImg from "./../assets/all/form-img.jpg";
import { useScroll } from "./ScrollContext";
const MotionBox = motion(Box);

const ContactForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.6, // Процент видимой области, после которого запускается анимация
  });
  const MotionButton = motion(Button);

  //use smooth scroll section
  //const { sectionRefs } = useScroll();

  // SENDING FORM
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({});

  const handleChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  const formInitialDetails = {
    fullName: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappUrl =
      `https://wa.me/` 
      +79536995362`?text=Имя: ${encodeURIComponent(
        fullName
      )}%0AТелефон: ${encodeURIComponent(
        phone
      )}%0AСообщение: ${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  // Valid form
  const isFormValid =
    formDetails.fullName && formDetails.phone && formDetails.message;

  return (
    <MotionBox
      id="form"
      //  ref={sectionRefs["form"]}
      textAlign={"center"}
      // py={{ base: "100px", md: "150px" }}
      my={"120px"}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container maxW="container.xl">
        <Heading
          mb={{ base: "30px", md: "60px" }}
          fontSize={{ base: "40px", md: "50px" }}
          fontWeight={"300"}
          as={"h2"}
        >
          Записаться на консультацию
        </Heading>
        <Flex justifyContent={"space-between"} gap={"50px"}>
          <form onSubmit={handleSubmit}>
            <VStack align={"start"} spacing="25px">
              <FormControl isRequired>
                <FormLabel htmlFor="ФИО" fontSize={"xs"}>
                  ФИО
                </FormLabel>
                <Input
                  minW={"350px"}
                  type="text"
                  onChange={handleChange}
                  id="fullName"
                  name="fullName"
                  fontSize={"xs"}
                  value={formDetails.fullName}
                  placeholder={"Иван Иванов"}
                  _placeholder={{ fontSize: "xs" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="" fontSize={"xs"}>
                  Телефон
                </FormLabel>
                <Input
                  minW={"350px"}
                  type="tel"
                  id="tel"
                  name="phone"
                  onChange={handleChange}
                  value={formDetails.phone}
                  fontSize={"xs"}
                  placeholder={"+7(999) 999-99-99"}
                  _placeholder={{ fontSize: "xs" }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize={"xs"} htmlFor="message">
                  Комментарий
                </FormLabel>
                <AutoResizeTextarea
                  onChange={handleChange}
                  id="message"
                  fontSize={"xs"}
                  type="text"
                  name="message"
                  value={formDetails.message}
                  placeholder={"Введите ваш вопрос"}
                />
              </FormControl>

              <MotionButton
                type={"submit"}
                w={"100%"}
                border={"2px solid #3a3a9c"}
                bgColor={"transparent"}
                fontSize={"xxs"}
                fontWeight={500}
                p={"25px 40px"}
                borderRadius={"5px"}
                _hover={{ bgColor: "hover.button" }}
                whileTap={{ scale: 1.2 }}
                whileHover={{ scale: 1.05 }}
                isLoading={isLoading}
                isDisabled={!isFormValid}
                mt={"30px"}
              >
                Записаться
              </MotionButton>
              <Divider w={"70%"} borderBottomWidth={"1px"} m={"0 auto"} />
              <Text textAlign={"center"} fontWeight={500} m={"0 auto"}>
                <Box as={"span"}>
                  Нажимая кнопку "Отправить", вы даете
                  <Link href="" color="#3a3a9c">
                    согласие на обработку персональных данных
                  </Link>
                </Box>
              </Text>
            </VStack>
          </form>
          <Box maxW={"50%"} mt={"25px"}>
            <Image
              src={formImg}
              borderRadius={"20px"}
              w={"100%"}
              h={"400px"}
              objectFit={"cover"}
            />
          </Box>
        </Flex>
      </Container>
    </MotionBox>
  );
};

export default ContactForm;
