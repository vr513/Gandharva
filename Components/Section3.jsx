import { Box, HStack, VStack, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

import three from "@/assets/images/03.png";
import arrow from "@/assets/images/arrow.png";
import num3 from "@/assets/images/num3.png";

const Section3 = () => {
  return (
    <>
      <Box w={"100%"} h={"100vh"} background={"#0B1D26"} px={"15%"} py={"10%"} id={'03'} >
        <HStack w={"100%"} pos={"relative"}>
          <Image
            src={num3.src}
            pos={"absolute"}
            top={0}
            left={-20}
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
                where you go is the key
              </Heading>
            </HStack>
            <Heading
              color={"#FFF"}
              fontFamily={"Playfair Display"}
              fontWeight={600}
              fontSize={"54px"}
            >
              Understand Your Map & Timing
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
              To start, print out the hiking guide and map. If it’s raining,
              throw them in a Zip-Lock bag. Read over the guide, study the map,
              and have a good idea of what to expect. I like to know what my
              next landmark is as I hike. For example, I’ll read the guide and
              know that say, in a mile, I make a right turn at the junction..
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
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image w={"80%"} src={three.src} />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Section3;
