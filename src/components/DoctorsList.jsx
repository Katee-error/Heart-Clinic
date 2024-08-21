import {
  Box,
  Heading,
  Text,
  Flex,
  Card,
  Stack,
  CardBody,
  Image,
  Button,
  Container,
  GridItem,
  SimpleGrid,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React, {useState} from "react";

import specialistics from "../data/OurSpecialists";
import arrow from "./../assets/icons/arrow-right.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import doctors from "../data/doctors";
import DoctorCard from "./DoctorCard";
import DoctorModal from "./ModalWindowDoctors";

const MotionBox = motion(Box);

const DoctorsList = () => {

  const MotionCard = motion(GridItem);
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.3, // Процент видимой области, после которого запускается анимация
  });

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (doctorId) => {
    const doctor = doctors.find(doc => doc.id === doctorId);
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <MotionBox
      my={"120px"}
      
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container maxW="container.xl">
        <Flex justifyContent={"space-between"} pb={"60px"}>
          <Heading fontSize={{base: "40px", md: "50px" }} fontWeight={"300"} maxW={"500px"}>
            Квалифицированные Специалисты
          </Heading>
        </Flex>

        <SimpleGrid minChildWidth="250px" p={"20px"} spacing={"40px"}>
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} onOpen={handleOpenModal} />
          ))}
        </SimpleGrid>
        <DoctorModal doctor={selectedDoctor} isOpen={isModalOpen} onClose={handleCloseModal} />
      </Container>
    </MotionBox>
  );
};

export default DoctorsList;
