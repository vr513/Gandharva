import React from "react";
import { Box, HStack, VStack, Heading, Text, Image } from "@chakra-ui/react";

import two from "@/assets/images/02.png";
import arrow from "@/assets/images/arrow.png";
import num2 from "@/assets/images/num2.png";

const Section2 = () => {
  return (
    <>
      <Box w={"100%"} h={"100vh"} background={"#0B1D26"} px={"15%"} py={"10%"} id={'02'} >
        <HStack flexDir={"row-reverse"} w={"100%"} pos={"relative"}>
          <Image
            src={num2.src}
            pos={"absolute"}
            top={0}
            left={"45%"}
            w={"8rem"}
          />
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
                Hiking Essentials
              </Heading>
            </HStack>
            <Heading
              color={"#FFF"}
              fontFamily={"Playfair Display"}
              fontWeight={600}
              fontSize={"54px"}
            >
              Picking the right Hiking Gear!
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
              The nice thing about beginning hiking is that you don’t really
              need any special gear, you can probably get away with things you
              already have. Let’s start with clothing. A typical mistake hiking
              beginners make is wearing jeans and regular clothes, which will
              get heavy and chafe wif they get sweaty or wet.
            </Text>
            <HStack>
              <Text fontFamily={"Kievit"} fontSize={"16px"} color={"#FBD784"}>
                read more{" "}
              </Text>
              <Image src={arrow.src} w={"16px"} />
            </HStack>
          </VStack>
          <Box
            w={"50%"}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Image w={"80%"} src={two.src} />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Section2;
