import { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Link,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import AutoResizeTextarea from "./AutoResizeTexarea";
import formImg from "./../assets/all/form-img.jpg";
import InputMask from "react-input-mask";

const MotionBox = motion(Box);

const ContactForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.6, // Процент видимой области, после которого запускается анимация
  });
  const MotionButton = motion(Button);

  // SENDING FORM
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Формируем сообщение для отправки в WhatsApp
    const message = `Имя: ${name}\nТелефон: ${phone}\nКомментарий: ${comment}`;

    // Указываем номер компании (в международном формате, без знака "+")
    const companyPhoneNumber = "79994780055";

    // Сгенерируем ссылку для отправки сообщения
    const whatsappUrl = `https://wa.me/${companyPhoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Открываем ссылку
    window.open(whatsappUrl, "_blank");
  };

  // Valid form
  const isFormValid = name && phone && comment;

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
                  minW={{ base: "200px", md: "350px" }}
                  type="text"
                  id="name"
                  name="name"
                  fontSize={"xs"}
                  value={name}
                  placeholder={"Иван Иванов"}
                  _placeholder={{ fontSize: "xs" }}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="" fontSize={"xs"}>
                  Телефон
                </FormLabel>
                <InputMask
                  mask="+7 (999) 999-99-99"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                >
                  {(inputProps) => (
                    <Input
                      {...inputProps}
                      minW={{ base: "200px", md: "350px" }}
                      type="tel"
                      id="tel"
                      name="phone"
                      fontSize={"xs"}
                      placeholder="+7 (___) ___-__-__"
                      _placeholder={{ fontSize: "xs" }}
                    />
                  )}
                </InputMask>
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize={"xs"} htmlFor="message">
                  Комментарий
                </FormLabel>
                <AutoResizeTextarea
                  id="comment"
                  fontSize={"xs"}
                  type="text"
                  name="comment"
                  value={comment}
                  placeholder={"Введите комментарий..."}
                  onChange={(e) => setComment(e.target.value)}
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
          <Box maxW={"50%"} mt={"25px"} display={{base: 'none', md: 'block'}}>
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
