
import { Box } from "@chakra-ui/react";

import AboutUs from "../components/AboutUs";
import OurDoctors from "../components/DoctorsList";
import ContactForm from "../components/FormTest";
import YandexMap from "../components/YandexMap";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Test from "../components/Test";
import HeroSlider from "../components/HeroSlider";
import TestimonialsMarquee from "./../components/Reviews";

const Home = () => {
  return (
    <Box>
      <HeroSlider />
      <AboutUs />
      <Benefits />
      <Test />
      <Services />
      <OurDoctors />
      <TestimonialsMarquee />
      <ContactForm />

      <YandexMap />
    </Box>
  );
};

export default Home;
