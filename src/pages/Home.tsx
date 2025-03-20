import { Heading, Text, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import Spaceship from "../components/Spaceship";
import DockingStation from "@/components/dockingStation";
import TypewriterText from "@/components/TypeWriterText";

function HomePage() {
  const [summary, setSummary] = useState("");
  const [pfp, setPFP] = useState("");

  return (
    <Flex
      width="100vw"
      height="100vh"
      display="flex"
      flexDir="row"
      as="header"
      color="white"
      p={"5vw"}
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
          <Heading as="h1" fontSize={"3vw"}>
            Ethan Nielsen
          </Heading>
          <DockingStation
            boxSize="5.3vw"
            id="docking-station-1"
            setSummary={setSummary}
            top="20vh"
            left="28vw"
            transform="translate(-50%, -50%)"
          />
        </Flex>
        <Text fontSize={"1.5vw"}>Full Stack Developer</Text>
        {summary && (
          <TypewriterText fontSize=".9vw" mt={5} text={summary} speed={20} />
        )}
      </Flex>
      <Flex
        flex="1.5"
        flexDir="column"
        marginTop="auto"
        textAlign="center"
        justify="flex-end"
        id="spaceship-start"
      >
        <Spaceship />
        <TypewriterText
          fontSize={".8vw"}
          text="Fly around and learn more about what I can bring to your team!"
          speed={50}
        />
        <TypewriterText
          fontSize={".8vw"}
          delay={4}
          style={{ marginTop: ".5vw" }}
          text="Collide with objects to reveal content. Fly safe! Or not..."
          speed={50}
        />
      </Flex>
      <Flex
        flex="1"
        flexDir="column"
        height="80%"
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
          top="32vh"
          left="-5vw"
          transform="translate(-50%, -50%)"
          boxSize="5.3vw"
          objectFit="cover"
          zIndex={0}
        />
        <Heading as="h1" fontSize={"2vw"}>
          The Face Behind the Code
        </Heading>
        {pfp && <Image src={pfp} width="20vw" borderRadius={10} />}
      </Flex>
    </Flex>
  );
}

export default HomePage;
