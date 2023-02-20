import { Box, VStack, Heading, Text, HStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        w={"100%"}
        pt={"4rem"}
        pos={"relative"}
        background={"#0B1D26"}
        height={"50vh"}
      >
        <VStack
          left={"10%"}
          pos={"absolute"}
          w={"30%"}
          color={"#FFF"}
          alignItems={"flex-start"}
          gap={'30px'}
        >
          <Heading
            fontFamily={"Kievit"}
            fontWeight={"600"}
            fontSize={"28px"}
            lineHeight={"39px"}
            letterSpacing={"0.22em"}
            color={"#FFF"}
            left={"0"}
          >
            HIKING
          </Heading>
          <Text
            opacity={"70%"}
            fontFamily={"Kievit"}
            fontWeight={"550"}
            fontSize={"18px"}
            lineHeight={"24px"}
          >
            We always discuss reaching the top of the mountain as the challenge.
            But those that have been there know coming back down is the hardest
            part.
          </Text>
        </VStack>
        <HStack right={"10%"} pos={"absolute"} gap={'50px'}  >
        <VStack alignItems={'flex-start'} >
            <Text
              color={"#FBD784"}
              fontFamily={"Kievit"}
              fontSize={"24px"}
              lineHeight={"22px"}
            >
              Information
            </Text>
            <VStack opacity={'80%'} pt={'2rem'} color={'#FFF'} fontFamily={'Kievit'} fontSize={'18px'} alignItems={'flex-start'} gap={'10px'}>
                <Text>News</Text>
                <Text>Events</Text>
                <Text>Blogs</Text>
                <Text>Viseos</Text>
            </VStack>
          </VStack>
        <VStack alignItems={'flex-start'} >
            <Text
              color={"#FBD784"}
              fontFamily={"Kievit"}
              fontSize={"24px"}
              lineHeight={"22px"}
            >
              Useful Links
            </Text>
            <VStack opacity={'80%'} pt={'2rem'} color={'#FFF'} fontFamily={'Kievit'} fontSize={'18px'} alignItems={'flex-start'} gap={'10px'}>
                <Text>Home</Text>
                <Text>Equipment</Text>
                <Text>About us</Text>
                <Text>Blog</Text>
            </VStack>
          </VStack>
          <VStack  alignItems={'flex-start'} >
            <Text
              color={"#FBD784"}
              fontFamily={"Kievit"}
              fontSize={"24px"}
              lineHeight={"22px"}
            >
              Contact
            </Text>
            <VStack opacity={'80%'} pt={'2rem'} color={'#FFF'} fontFamily={'Kievit'} fontSize={'18px'} alignItems={'flex-start'} gap={'10px'}>
                <Text>Headquarters</Text>
                <Text>Managers</Text>
                <Text>Sales</Text>
                <Text>Why us</Text>
            </VStack>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

export default Footer;
