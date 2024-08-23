import React from "react";
import { Box } from "@chakra-ui/react";

import AboutUs from "../components/AboutUs";
import OurDoctors from "../components/DoctorsList";
import ContactForm from "../components/FormTest";
import YandexMap from "../components/YandexMap";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Test from "../components/Test";
import HeroSlider from "../components/HeroSlider";
import Footer from "./../components/Footer";
import Questions from "../components/Questions";
import TestimonialsMarquee from "./../components/Reviews";
import StickyNav from "../components/StickyHeader";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <Box>
      <Hero/>
      {/* <HeroSlider /> */}
      <AboutUs />
      <Benefits />
      <Test />
      {/* <Doctors/> */}
      <Services />
      <OurDoctors />
      <TestimonialsMarquee />
      <ContactForm />
      <Questions />
      <YandexMap />
    </Box>
  );
};

export default Home;
