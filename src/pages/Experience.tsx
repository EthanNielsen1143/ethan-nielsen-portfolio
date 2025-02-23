import { Box, Heading, Flex } from "@chakra-ui/react";
import Spaceship from "../components/Spaceship";
import DockingStation from "@/components/dockingStation";

const Experience = () => {
  return (
    <Box
      className="Experience"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      height="100vh"
    >
      <DockingStation id="docking-station-7" />
      <Spaceship />
      <Flex justifyContent="center" textAlign="center"></Flex>
    </Box>
  );
};

export default Experience;
