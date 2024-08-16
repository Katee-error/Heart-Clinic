import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import allDoctors from './../assets/all/all-doctors.jpg'

const Doctors = () => {
  return (
    <Box my={'120px'}>
        <Image src={allDoctors}  />
    </Box>
  )
}

export default Doctors
