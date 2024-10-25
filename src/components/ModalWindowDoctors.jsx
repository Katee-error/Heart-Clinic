import formatTextWithLineBreaks from "../services/split";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Image,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import FormModal from "./FormModal";

const DoctorModal = React.memo(({ doctor, isOpen, onClose }) => {
  if (!doctor) return null; // Возвращаем null, если doctor не определен

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxW={{ base: "90%", md: "1000px" }}
          p={{ base: "20px", md: "40px" }}
        >
          <Flex
            gap={{ base: "10px", md: "40px" }}
            alignItems={{ base: "center", md: "start" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Image
              alt={doctor.name}
              loading="lazy"
              src={doctor.img}
              maxW={{ base: "100%", md: "auto" }}
              maxH={{ base: "400px", md: "600px" }}
              objectFit={'cover'}
            />
            <Box>
              <Flex
                justifyContent={"space-between"}
                alignItems={"baseline"}
                flexDirection={{ base: "column", md: "row" }}
                px={"20px"}
                mb={"20px"}
                gap={"20px"}
              >
                <ModalHeader fontSize={'30px'} p={"0px"}>
                  {doctor.name}
                </ModalHeader>
                <Box
                  bg={"brand.main"}
                  color={"white"}
                  borderRadius={"10px"}
                  fontWeight={600}
                  p={"10px "}
                  display={"inline-block"}
                  w={{ base: "70%", md: "120px" }}
                  h={"40px"}
                >
                  Опыт {doctor.experience}
                </Box>
              </Flex>
              <ModalCloseButton />
              <ModalBody>
                <Text fontSize={"16px"} mb={"20px"}>
                  <Box
                    as="span"
                    fontSize={"18px"}
                    color={"brand.main"}
                    fontWeight="bold"
                  >
                    Специальность:{" "}
                  </Box>{" "}
                  {doctor.specialty}
                </Text>
                <Text fontWeight="400" fontSize={"16px"} mb={"20px"}>
                  <Box
                    as="span"
                    fontSize={"18px"}
                    color={"brand.main"}
                    fontWeight="bold"
                  >
                    Образование:{" "}
                  </Box>{" "}
                  {formatTextWithLineBreaks(doctor.education)}
                </Text>
                <Button
                  mt={"20px"}
                  p={"30px"}
                  borderRadius={"20px"}
                  boxShadow={"1px 2px 5px 0 #3a3a9c"}
                  fontSize={"16px"}
                  color={"white"}
                  fontWeight={700}
                  border={"1px solid #3a3a9c"}
                  bg={"brand.main"}
                  _hover={{ bgColor: "hover.button", color: "black" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsModalOpen(true);
                  }}
                >
                  Записаться на прием
                </Button>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </Box>
          </Flex>
        </ModalContent>
      </Modal>
      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Закрываем модальное окно для записи
      />
    </>
  );
});
export default DoctorModal;
