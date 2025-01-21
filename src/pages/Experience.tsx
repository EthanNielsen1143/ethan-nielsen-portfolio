import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import Spaceship from "../components/Spaceship";

const Experience = () => {
  return (
    <Box className="Experience" height="100vh">
      <Heading color="sea.300" as="h1" size="2xl">
        Experience
      </Heading>
      <Spaceship />
      <Flex justifyContent="center" textAlign="center"></Flex>
    </Box>
  );
};

export default Experience;
