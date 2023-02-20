import { Box, HStack, VStack, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

import one from "@/assets/images/01.png";
import arrow from "@/assets/images/arrow.png";
import num1 from '@/assets/images/num1.png'

const Section1 = () => {
  return (
    <>
      <Box w={"100%"} h={"100vh"} background={"#0B1D26"} px={"15%"} py={"10%"} id={'01'} >
        <HStack w={"100%"} pos={'relative'}>
            <Image src={num1.src} pos={'absolute'} top={0} left={-20} w={'8rem'} />
          <VStack w={"50%"} alignItems={"flex-start"}>
            <HStack>
              <div className="dashYellow" />
              <Heading
                fontFamily={"Kievit"}
                fontWeight={550}
                fontSize={"20px"}
                lineHeight={"22px"}
                as={"h4"}
                textTransform={"uppercase"}
                color={"#FBD784"}
                letterSpacing={"6px"}
              >
                Get Started
              </Heading>
            </HStack>
            <Heading
              color={"#FFF"}
              fontFamily={"Playfair Display"}
              fontWeight={600}
              fontSize={"54px"}
            >
              What level of hiker are you?
            </Heading>
            <Text
              pt={"1rem"}
              fontFamily={"Kievit"}
              fontWeight={550}
              fontSize={"18px"}
              lineHeight={"32px"}
              color={"#FFF"}
              opacity={"80%"}
            >
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings set by various
              websites like All Trails and Modern Hiker. What type of hiker are
              you – novice, moderate, advanced moderate, expert, or expert
              backpacker?
            </Text>
            <HStack>
              <Text fontFamily={"Kievit"} fontSize={"16px"} color={"#FBD784"}>
                read more{" "}
              </Text>
              <Image src={arrow.src} w={'16px'} />
            </HStack>
          </VStack>
          <Box
            w={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image w={"80%"} src={one.src} />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Section1;
