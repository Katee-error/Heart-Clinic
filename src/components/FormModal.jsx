import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Box,
  Link,
  Flex,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AutoResizeTextarea from "./../components/AutoResizeTexarea";
import InputMask from 'react-input-mask';

const FormModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);


 // SENDING FORM

 const [name, setName] = useState("");
 const [phone, setPhone] = useState("");
 const [comment, setComment] = useState("");

 const handleSubmit = (e) => {
   e.preventDefault();

   // Формируем сообщение для отправки в WhatsApp
   const message = `Имя: ${name}\nТелефон: ${phone}\nКомментарий: ${comment}`;

   // Указываем номер компании (в международном формате, без знака "+")
   const companyPhoneNumber = '79994780055';

   // Сгенерируем ссылку для отправки сообщения
   const whatsappUrl = `https://wa.me/${companyPhoneNumber}?text=${encodeURIComponent(
     message
   )}`;

   // Открываем ссылку
   window.open(whatsappUrl, "_blank");
 };

 // Valid form
 const isFormValid =
   name && phone && comment;

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleReset}>
      <ModalOverlay />
      <ModalContent
        maxW={{ base: "350px", md: "700px" }}
        p={{ base: "20px", md: "30px" }}
      >
        <ModalHeader fontSize={{ base: "26px", md: "40px" }} fontWeight={400}>
          Записаться на прием
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isSubmitted ? (
            <Text fontSize="24px" fontWeight="bold" color="green.500">
              Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.
            </Text>
          ) : (
            <form onSubmit={handleSubmit}>
              <VStack align={"start"} spacing="25px">
              <FormControl isRequired>
                <FormLabel htmlFor="ФИО" fontSize={"xs"}>
                  ФИО
                </FormLabel>
                <Input
                  minW={{base:"200px", md: '350px'}}
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
                minW={{base:"200px", md: '350px'}}
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

                <Text
                  textAlign={"center"}
                  fontSize={{ base: "12px", md: "14px" }}
                  fontWeight={500}
                  m={"0 auto"}
                >
                  <Box as={"span"}>
                    Нажимая кнопку "Отправить", вы даете
                    <Link href="" color="#3a3a9c">
                      {" "}
                      согласие на обработку персональных данных
                    </Link>
                  </Box>
                </Text>
              </VStack>
              <Flex justifyContent={"space-between"} mt={12}>
                <Button
                  p={"20px"}
                  borderRadius={"10px"}
                  fontSize={"16px"}
                  fontWeight={600}
                  // bg={"transparent"}
                  bg={"gray.400"}
                  _hover={{ bgColor: "hover.button", color: "black" }}
                  whileHover={{ scale: 1.05 }}
                  color={"white"}
                  mr={3}
                  onClick={handleReset}
                >
                  {isSubmitted ? "Закрыть" : "Отмена"}
                </Button>
                <Button
                  p={"20px"}
                  borderRadius={"10px"}
                  fontSize={"16px"}
                  fontWeight={600}
                  // bg={"transparent"}
                  bg={"brand.main"}
                  _hover={{ bgColor: "hover.button", color: "black" }}
                  whileHover={{ scale: 1.05 }}
                  color={"white"}
                  type="submit"
                >
                  Отправить
                </Button>
              </Flex>
            </form>
          )}
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FormModal;
