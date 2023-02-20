import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

import bg from "@/assets/images/bg.png";
import Navbar from "./Navbar";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <Box
        w={"100%"}
        h={"180vh"}
        backgroundImage={`url(${bg.src})`}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      >
        <Navbar />
        <Box
          px={"22%"}
          h={"90vh"}
          pt={"10%"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          pb={"22%"}
          pos={"relative"}
        >
          <VStack
            pos={"absolute"}
            color={"#FFF"}
            right={"12%"}
            top={"10%"}
            gap={"33px"}
          >
            <Text
              fontFamily={"Kievit"}
              fontWeight={"550"}
              fontSize={"20px"}
              lineHeight={"22px"}
            >
              Start
            </Text>
            <Link href={"#01"} scroll={false}>
              <Text
                fontFamily={"Kievit"}
                fontWeight={"550"}
                fontSize={"20px"}
                lineHeight={"22px"}
                _hover={{ cursor: "pointer" }}
              >
                01
              </Text>
            </Link>
            <Link href={"#02"} scroll={false}>
              <Text
                fontFamily={"Kievit"}
                fontWeight={"550"}
                fontSize={"20px"}
                lineHeight={"22px"}
                _hover={{ cursor: "pointer" }}
              >
                02
              </Text>
            </Link>
            <Link href={"#03"} scroll={false}>
              <Text
                fontFamily={"Kievit"}
                fontWeight={"550"}
                fontSize={"20px"}
                lineHeight={"22px"}
                _hover={{ cursor: "pointer" }}
              >
                03
              </Text>
            </Link>
          </VStack>
          <VStack alignItems={"flex-start"}>
            <HStack>
              <div className="dashYellow" />
              <Heading
                fontFamily={"Kievit"}
                fontWeight={550}
                fontSize={"24px"}
                lineHeight={"22px"}
                as={"h4"}
                color={"#FBD784"}
              >
                A HIKING GUIDE
              </Heading>
            </HStack>
            <Heading
              w={"90%"}
              color={"#FFF"}
              fontFamily={"Playfair Display"}
              fontWeight={600}
              fontSize={"64px"}
              lineHeight={"112px"}
            >
              Be Prepared For The Mountains And Beyond
            </Heading>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
