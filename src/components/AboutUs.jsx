import React from "react";
import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Flex
} from "@chakra-ui/react";
import aboutImg from './../assets/about-us/about-us.webp'
import doctor from './../assets/about-us/icons/doctor.png'
import en from './../assets/about-us/icons/en.png'
import letter from './../assets/about-us/icons/letter.png'
import stethoscope from './../assets/about-us/icons/stethoscope.png'




const AboutUs = () => {
  return (
    <Box my={'100px'}>
      <Container maxW="container.xl">
        <Flex alignItems={'start'} gap={'50px'} justifyContent={'space-between'}> 
          <Image src={aboutImg} borderRadius={'20px'}  w={'40%'} />
          <Box>
            <Heading mb={'40px'} fontSize={'50px'} fontWeight={300}> Почему нас выбирают?</Heading>
            <SimpleGrid minChildWidth="200px" spacing={'100px'}>
              <GridItem>
            
                <Image src={doctor} w={'50px'} h={'50px'} mb={'15px'}/>
            
                <Heading fontSize={'20px'} mb={'10px'}>Широкий спектр услуг</Heading>
                <Text fontSize={'16px'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, provident culpa excepturi quae modi voluptatibus deserunt dolor, beatae, minus adipisci reprehenderit nesciunt aliquid! Veritatis nihil reprehenderit, unde saepe repellendus inventore.</Text>
              </GridItem>
              <GridItem>
                <Image />
                <Heading fontSize={'sm'}>Широкий спектр услуг</Heading>
                <Text fontSize={'xs'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, provident culpa excepturi quae modi voluptatibus deserunt dolor, beatae, minus adipisci reprehenderit nesciunt aliquid! Veritatis nihil reprehenderit, unde saepe repellendus inventore.</Text>
              </GridItem>
              <GridItem>
                <Image />
                <Heading fontSize={'sm'}>Широкий спектр услуг</Heading>
                <Text fontSize={'xs'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, provident culpa excepturi quae modi voluptatibus deserunt dolor, beatae, minus adipisci reprehenderit nesciunt aliquid! Veritatis nihil reprehenderit, unde saepe repellendus inventore.</Text>
              </GridItem>
              <GridItem>
                <Image />
                <Heading fontSize={'sm'}>Широкий спектр услуг</Heading>
                <Text fontSize={'xs'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, provident culpa excepturi quae modi voluptatibus deserunt dolor, beatae, minus adipisci reprehenderit nesciunt aliquid! Veritatis nihil reprehenderit, unde saepe repellendus inventore.</Text>
              </GridItem>
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutUs;
