import { Flex, Text, Image, Box } from "@chakra-ui/react";
import Spaceship from "../components/Spaceship";
import TypewriterText from "@/components/TypeWriterText";
import Satellite from "@/components/Satellite";
// import DockingStation from "@/components/dockingStation";

const Experience = () => {
  return (
    <Flex
      width="100%"
      height="100vh"
      flexDir="row"
      position="relative"
      justifyContent="space-around"
      alignItems="center"
    >
      <Flex
        flex="1"
        flexDirection="column"
        gap="5em"
        marginTop="10em"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          backgroundImage="url('/images/StretchedModalWindow.png')"
          backgroundSize="100% 100%" /* Ensures full stretch */
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius="11px"
          width="250px" /* Adjust width as needed */
          height="100px" /* Adjust height as needed */
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(173, 216, 230, 0.5)"
          mb="2em"
        >
          <TypewriterText
            text="INTERNSHIPS"
            fontWeight="bold"
            fontSize="xl"
            speed={100}
            delay={8.5}
          />
        </Box>
        <Flex flexDir="column" justifyContent="center" alignItems="center">
          <Satellite id="satellite-2" size="140px" title="Internship 1" />
        </Flex>
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          mb="2em"
        >
          <Satellite id="satellite-2" size="140px" title="Internship 1" />
        </Flex>
      </Flex>
      <Flex flex="3.5" justifyContent="center">
        <Flex
          flexDirection="column"
          width="65%"
          textAlign="center"
          gap="2em"
          justifyContent="center"
          alignItems="center"
        >
          <TypewriterText
            text="Looks like you’ve found the Experience page"
            fontSize="2.5em"
          />
          <Flex width="85%">
            <TypewriterText
              text="
            This is where I store all my career loot— internships, education, projects
            and things that made me better. Fly around and check it out. If something breaks, 
            please contact the dev team… oh wait, that’s me. Never mind, good luck."
              fontSize="1.3em"
              textAlign="center"
              delay={1.5}
              style={{ width: "100%" }}
            />
            {/* <Image
          src={"../images/StretchedModalWindow.png"}
          backgroundColor="#add8e680"
          borderRadius="70px"
          rotate="180deg"
          boxSize="100%"
          mt="150px"
          zIndex="2"
        /> */}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flex="1"
        flexDirection="column"
        gap="5em"
        marginTop="10em"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          backgroundImage="url('/images/StretchedModalWindow.png')"
          backgroundSize="100% 100%" /* Ensures full stretch */
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius="11px"
          width="250px" /* Adjust width as needed */
          height="100px" /* Adjust height as needed */
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(173, 216, 230, 0.5)"
          mb="2em"
        >
          <TypewriterText
            text="OTHER EXPERIENCE"
            fontWeight="bold"
            fontSize="xl"
            speed={100}
            delay={10.5}
          />
        </Box>
        <Flex flexDir="column" justifyContent="center" alignItems="center">
          <Satellite id="satellite-3" size="140px" title="Internship 1" />
        </Flex>
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          mb="2em"
        >
          <Satellite id="satellite-3" size="140px" title="Internship 1" />
        </Flex>
      </Flex>
      <Spaceship />
    </Flex>
  );
};

export default Experience;
