import {
  Box,
  Text,
  GridItem,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Button
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const DoctorCard = ({ doctor, onOpen }) => {
  const MotionCard = motion(GridItem);
  const MotionButton = motion(Button)

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
            <Text color={"gray.500"}>{doctor.shortSpeciality}</Text>
            <Box
              bg={"brand.main"}
              color={"white"}
              borderRadius={"10px"}
              fontWeight={600}
              p={"10px "}
              display={"inline-block"}
              w={"40%"}
            >
              Опыт {doctor.experience}
            </Box>
            <MotionButton
                p={"30px"}
                borderRadius={"20px"}
                boxShadow={"1px 2px 5px 0 #3a3a9c"}
                fontSize={"14px"}
                fontWeight={700}
                border={"1px solid #3a3a9c"}
                bg={"transparent"}
                _hover={{ bgColor: "hover.button" }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsModalOpen(true)} // Open modal window
              >
                {/* <Image src={calendarIcon} mr={"10px"} /> */}
                Записаться на прием
              </MotionButton>
          </Stack>
        </CardBody>
      </Card>
    </MotionCard>
    
  );
};

export default DoctorCard;
