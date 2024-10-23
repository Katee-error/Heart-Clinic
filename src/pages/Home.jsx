import { Box } from "@chakra-ui/react";
import { lazy } from "react";
import HeroSlider from "../components/HeroSlider";
import LazyLoad from "../components/LazyLoad"; // Import LazyLoad

// Lazy loading other components
const AboutUs = lazy(() => import("../components/AboutUs"));
const OurDoctors = lazy(() => import("../components/DoctorsList"));
const ContactForm = lazy(() => import("../components/FormTest"));
const YandexMap = lazy(() => import("../components/YandexMap"));
const Benefits = lazy(() => import("../components/Benefits"));
const Test = lazy(() => import("../components/Test"));
const PromotionList = lazy(() => import("../components/PromotionList"));
const TestimonialsMarquee = lazy(() => import("./../components/Reviews"));

const Home = () => {
  return (
    <Box>
      <HeroSlider />
      <LazyLoad>
        <AboutUs />
      </LazyLoad>
      <LazyLoad>
        <Benefits />
      </LazyLoad>
      <LazyLoad>
        <Test />
      </LazyLoad>
      <LazyLoad>
        <OurDoctors />
      </LazyLoad>
      <LazyLoad>
        <PromotionList />
      </LazyLoad>
      <LazyLoad>
        <TestimonialsMarquee />
      </LazyLoad>
      <LazyLoad>
        <ContactForm />
      </LazyLoad>
      <LazyLoad>
        <YandexMap />
      </LazyLoad>
    </Box>
  );
};

export default Home;
