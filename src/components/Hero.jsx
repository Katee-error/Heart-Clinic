import React, { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FormModal from "./FormModal";

const Hero = () => {
  const MotionButton = motion(Button);
  const [isModalOpen, setIsModalOpen] = useState(false); //modal window

  return (
    <Box
      h={{ base: "380px", md: "700px" }}
      bgImage="url('/slide-1.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      mb={"80px"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mt={{ base: "40px", md: "-200px" }}
        ml={{ md: "50px" }}
        textAlign={"center"}
      >
        <Text fontWeight={500} fontSize={{ base: "40px", md: "80px" }}>
          Клиника Сердца
        </Text>
        <Text
          fontWeight={300}
          fontSize={{ base: "16px", md: "20px" }}
          mt={"-10px"}
        >
          Забота о сердце начинается здесь
        </Text>
        <MotionButton
          p={{ base: "10px 20px", md: "25px 30px" }}
          borderRadius={"10px"}
          fontSize={"16px"}
          fontWeight={600}
          border={"1px solid #3a3a9c"}
          bg={"transparent"}
          boxShadow={"1px 2px 5px 0 #3a3a9c"}
          //   bg={"brand.main"}
          _hover={{ bgColor: "hover.button", color: "black" }}
          whileHover={{ scale: 1.05 }}
          color={"black"}
          onClick={() => setIsModalOpen(true)} // Open modal window
          margin={{ base: "20px 0", md: "30px 0" }}
        >
          Записаться
        </MotionButton>
      </Box>
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Box>
  );
};

export default Hero;
