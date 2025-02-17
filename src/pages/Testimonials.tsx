import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Spaceship from "../components/Spaceship";
import DockingStation from "../components/dockingStation";

function Testimonials() {
  const [testimony, setTestimony] = useState("");
  const [testTitle, setTestimonialTitle] = useState(
    "Hear what others have to say about Ethan"
  );

  const handleTestimonyChange = (newTestimony: string) => {
    setTestimony(newTestimony);
    setTestimonialTitle(
      newTestimony ? "" : "Hear what others have to say about Ethan"
    );
  };

  return (
    <Flex
      width="100%"
      height="100vh"
      flexDir="row"
      position="relative"
      justifyContent="space-evenly"
      alignItems="flex-end"
    >
      {[3, 4, 5, 6].map((id) => (
        <Flex
          key={id}
          flexDir="column"
          height="30em"
          alignItems="center"
          justifyContent="space-between"
          width="25%"
          mb="8em"
        >
          <Text fontSize="xl" textAlign="center" width="100%">
            {testimony}
          </Text>
          <DockingStation
            id={`docking-station-${id}`}
            position="relative"
            setTestimony={handleTestimonyChange}
          />
        </Flex>
      ))}
      <Text position="absolute" top="400px" mx="auto" fontSize="3em">
        {testTitle}
      </Text>
      <Spaceship />
    </Flex>
  );
}

export default Testimonials;
