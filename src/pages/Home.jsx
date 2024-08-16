import React from 'react'
import { Box } from '@chakra-ui/react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import OurDoctors from '../components/OurDoctors'
import Doctors from '../components/Doctors'
import ContactForm from '../components/FormTest'
import YandexMap from '../components/YandexMap'

const Home = () => {
  return (
    <Box>
        <Hero/>
        <AboutUs/>
        {/* <Doctors/> */}
        <OurDoctors/>
        <ContactForm/>
        <YandexMap/>
    </Box>
  )
}

export default Home
