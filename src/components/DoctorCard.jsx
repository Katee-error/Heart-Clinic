import React from "react";
import {
  Box,
  Text,
  Button,
  GridItem,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const DoctorCard = ({ doctor, onOpen }) => {
  const MotionCard = motion(GridItem);

  return (
    <MotionCard
      whileHover={{ scale: 1.08 }}
      onClick={() => onOpen(doctor.id)}
      cursor="pointer"
    >
      <Card maxW="sm">
        <CardBody>
          <Image
            borderRadius="lg"
            src={doctor.img}
            w={"auto"}
            h={"250px"}
            m={"0 auto"}
          />
          <Stack mt="6" spacing="3">
            <Heading fontSize={"20px"}>{doctor.name}</Heading>
            <Text color={"gray.500"}>{doctor.specialty}</Text>
            <Box
              bg={"brand.main"}
              color={"white"}
              borderRadius={"10px"}
              fontWeight={600}
              p={"10px "}
              display={"inline-block"}
              w={"70%"}
            >
              Опыт {doctor.experience}
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </MotionCard>
  );
};

export default DoctorCard;
