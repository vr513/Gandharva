import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Box
        pos={"relative"}
        w={"90%"}
        mb={"2%"}
        mx={"5%"}
        h={"10vh"}
        
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading
          fontFamily={"Kievit"}
          fontWeight={"600"}
          position={"absolute"}
          fontSize={"28px"}
          lineHeight={"39px"}
          letterSpacing={"0.22em"}
          color={"#FFF"}
          left={"0"}
        >
          HIKING
        </Heading>
        <HStack gap={'40px'}>
          <Text
            fontFamily={"Kievit"}
            fontWeight={"550"}
            fontSize={"18px"}
            lineHeight={"17px"}
            color={"#FFF"}
            letterSpacing={'0.05em'}
          >
            Equipment
          </Text>
          <Text
            fontFamily={"Kievit"}
            fontWeight={"550"}
            fontSize={"18px"}
            lineHeight={"17px"}
            color={"#FFF"}
            letterSpacing={'0.05em'}
          >
            About Us
          </Text>
          <Text
            fontFamily={"Kievit"}
            fontWeight={"550"}
            fontSize={"16px"}
            lineHeight={"17px"}
            color={"#FFF"}
            letterSpacing={'0.05em'}
          >
            Blog
          </Text>
        </HStack>
        <Heading
          fontFamily={"Kievit"}
          fontWeight={"600"}
          fontSize={"18px"}
          lineHeight={"17px"}
          color={'#FFF'}
          pos={'absolute'}
          right={"0"}
        >
          Account
        </Heading>
      </Box>
    </>
  );
};

export default Navbar;
