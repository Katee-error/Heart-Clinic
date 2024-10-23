import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const ButtonMain = ({ 
  onClick, 
  colorScheme = "#3A3A9C",
  borderColorScheme = "#3A3A9C",
  colorTextScheme = "white",
  colorHoverTextScheme = "black",
  hoverColor = "transparent",
  
   
  ...props 
}) => {
  return (
    <MotionButton
      p={{ base: "10px 20px", md: "25px 30px" }}
      borderRadius="10px"
      fontSize="16px"
      fontWeight={600}
      border={`1px solid ${borderColorScheme}`}
      bg={colorScheme}
      boxShadow="1px 2px 5px 0 rgba(0, 0, 0, 0.2)"
      _hover={{ bgColor: hoverColor, color: colorHoverTextScheme}} // Change background on hover
      whileHover={{ scale: 1.05 }} // Animation on hover
      color={colorTextScheme}
      onClick={onClick}
      {...props}
    >
      Записаться 
    </MotionButton>
  );
};

export default ButtonMain;

