// import { useState, useEffect, useRef } from "react";
import { Heading, Text, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import Spaceship from "../components/Spaceship";
import { InfoTip } from "@/components/ui/toggle-tip";
import DockingStation from "@/components/dockingStation";
// import Invader from "@/components/Invaders";
import TypewriterText from "@/components/TypeWriterText";

function HomePage() {
  const [summary, setSummary] = useState("");
  const [pfp, setPFP] = useState("");

  return (
    <Flex
      width="100%"
      height="100vh"
      display="flex"
      flexDir="row"
      as="header"
      color="white.200"
      p={125}
      gap={8}
      justifyContent="center"
      textAlign="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
    >
      <Flex
        id="homeContentBox"
        flex="1"
        height="50%"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        borderRadius={15}
        position="relative"
        zIndex={0}
        gap={6}
      >
        <Flex dir="row">
          <Heading as="h1" size="6xl">
            Ethan Nielsen
          </Heading>
          <DockingStation
            id="docking-station-1"
            setSummary={setSummary}
            top="50%"
            left="110%"
            transform="translate(-50%, -50%)"
          />
        </Flex>
        <Text fontSize="xl">Full Stack Developer</Text>
        {summary && (
          <TypewriterText fontSize="m" mt={5} text={summary} speed={20} />
        )}
      </Flex>
      <Flex
        flex="1.5"
        flexDir="column"
        marginTop="auto"
        textAlign="center"
        justify="flex-end"
        id="spaceship-start"
        // position="relative"
      >
        <Spaceship />
        <TypewriterText
          fontSize="s"
          text="Fly around and learn more about what I can bring to your team!"
          speed={50}
        />
        <InfoTip
          size="lg"
          content="you can also click or hover anywhere you want"
        />
      </Flex>
      <Flex
        flex="1"
        flexDir="column"
        height="80%"
        dir="column"
        align="center"
        justify="center"
        borderRadius={30}
        position="relative"
        gap={5}
      >
        <DockingStation
          id="docking-station-2"
          setPFP={setPFP}
          position="absolute"
          top="50%"
          left="-8%"
          transform="translate(-50%, -50%)"
          boxSize="100px"
          objectFit="cover"
          zIndex={0}
          // transition="all .3s ease-in-out"
        />
        <Heading as="h1" size="3xl">
          The Face Behind the Code
        </Heading>
        {pfp && <Image src={pfp} boxSize="360px" borderRadius={10} />}
      </Flex>
    </Flex>
  );
}

export default HomePage;
