import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Image,
  Flex,
  Box
} from "@chakra-ui/react";

const DoctorModal = ({ doctor, isOpen, onClose }) => {
  if (!doctor) return null; // Возвращаем null, если doctor не определен

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="1000px" p={{base:"20px", md:"40px"}}>
        <Flex gap={{base: '20px',md:'40px'}} alignItems={'center'} flexDirection={{base: 'column', md: 'row'}}>
          <Image src={doctor.img} w={"auto"} h={'600px'} objectFit={'contain'} />
          <Box >
            <Flex justifyContent={'space-between'} alignItems={'baseline'}  flexDirection={{base: 'column', md: 'row'}} px={'20px'} mb={'20px'} gap={'20px'} >
                <ModalHeader fontSize={{base: '40px', md: '30px'}} p={'0px'}>{doctor.name}</ModalHeader>
                <Box
                  bg={"brand.main"}
                  color={"white"}
                  borderRadius={"10px"}
                  fontWeight={600}
                  p={"10px "}
                  display={"inline-block"}
                  w={{base:"70%", md:"120px"}}
                  h={'40px'}
                  
                >
                  Опыт {doctor.experience}
                </Box>
            </Flex>
          <ModalCloseButton />
          <ModalBody>
            <Text  fontSize={'16px'} mb={'20px'}><Box as="span" fontSize={'18px'} color={'brand.main'} fontWeight="bold">Специальность: </Box> {doctor.specialty}</Text>
            <Text fontWeight="400" fontSize={'16px'} mb={'20px'}><Box as="span" fontSize={'18px'} color={'brand.main'} fontWeight="bold">Образование: </Box> {doctor.education}</Text>
            
          </ModalBody>
          <ModalFooter></ModalFooter>
          </Box>
          
        </Flex>
      </ModalContent>
    </Modal>
  );
};
export default DoctorModal;
