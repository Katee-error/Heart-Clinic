import {
  Box,
  Text,
  GridItem,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import FormModal from "./FormModal";
const DoctorCard = ({ doctor, onOpen }) => {
  const MotionCard = motion(GridItem);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <MotionCard
      whileHover={{ scale: 1.08 }}
      onClick={() => onOpen(doctor.id)}
      cursor="pointer"
    >
      <Card maxW="sm">
        <CardBody position={"relative"}>
          <Box
            position={"absolute"}
            borderRadius={"10px"}
            fontSize={"14px"}
            fontWeight={700}
            p={"10px "}
            display={"inline-block"}
            w={"35%"}
            border={"1px solid #3a3a9c"}
            bg={"white"}
            boxShadow={"1px 2px 5px 0 #3a3a9c"}
          >
            Опыт {doctor.experience}
          </Box>
          <Image
            borderRadius="lg"
            alt="doctor"
            src={doctor.img}
            w={"auto"}
            h={"250px"}
            m={"0 auto"}
            loading="lazy"
          />
          <Stack mt="6" spacing="3">
            <Heading fontSize={"20px"}>{doctor.name}</Heading>
            <Text color={"gray.500"}>{doctor.shortSpeciality}</Text>
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
                e.stopPropagation(); // Останавливаем всплытие события, чтобы карточка не срабатывала
                setIsModalOpen(true); // Открываем модальное окно для записи на приём
              }} // Open modal window
            >
              Записаться на прием
            </Button>
          </Stack>
        </CardBody>
      </Card>
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </MotionCard>
  );
};

export default DoctorCard;
