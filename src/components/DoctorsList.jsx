import { Box, Heading, Flex, Container, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import doctors from "../data/doctors";
import DoctorCard from "./DoctorCard";
import { useMediaQuery } from "@chakra-ui/react";
import DoctorModal from "./ModalWindowDoctors";

const MotionBox = motion(Box);

const DoctorsList = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Анимация запускается только один раз
    threshold: 0.2, // Процент видимой области, после которого запускается анимация
  });

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (doctorId) => {
    const doctor = doctors.find((doc) => doc.id === doctorId);
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <MotionBox
      my={["50px", "80px"]}
      ref={ref}
      initial={isMobile ? {} : { opacity: 0, y: 50 }} // Keep the structure but no animations on mobile
      animate={
        isMobile
          ? { opacity: 1, y: 0 }
          : { opacity: inView ? 1 : 0, y: inView ? 0 : 50 }
      } // Ensure content is visible on mobile
      transition={isMobile ? {} : { duration: 0.6, ease: "easeOut" }} // Maintain default transition behavior
    >
      <Container maxW="container.xl">
        <Flex justifyContent={"space-between"} pb={["30px", "60px"]}>
          <Heading
            fontSize={{ base: "40px", md: "50px" }}
            fontWeight={"300"}
            maxW={"500px"}
          >
            Квалифицированные Специалисты
          </Heading>
        </Flex>

        <SimpleGrid minChildWidth="250px" p={"20px"} spacing={"40px"}>
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onOpen={handleOpenModal}
            />
          ))}
        </SimpleGrid>
        <React.Suspense fallback={<div>Loading...</div>}>
          <DoctorModal
            doctor={selectedDoctor}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        </React.Suspense>
      </Container>
    </MotionBox>
  );
};

export default DoctorsList;
