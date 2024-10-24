import React from 'react';
import { Box } from "@chakra-ui/react";
import HeroSlider from "../components/HeroSlider";
// import AboutUs from "../components/AboutUs";
import OurDoctors from "../components/DoctorsList";
import ContactForm from "../components/FormTest";
import YandexMap from "../components/YandexMap";
import Benefits from "../components/Benefits";
import Test from "../components/Test";
import TestimonialsMarquee from "./../components/Reviews";
import PromotionList from "../components/PromotionList";
const AboutUs = React.lazy(() => import("../components/AboutUs"));

const Home = () => {
  return (
    <Box>
      <HeroSlider />
      <AboutUs />
      <Benefits />
      <Test />
      <OurDoctors />
      <PromotionList />
      <TestimonialsMarquee />
      <ContactForm />
      <YandexMap />
    </Box>
  );
};

export default Home;
