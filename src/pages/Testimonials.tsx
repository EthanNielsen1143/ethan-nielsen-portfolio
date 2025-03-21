import { Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Spaceship from "../components/Spaceship";
import Invader from "@/components/Invaders";
import TypewriterText from "@/components/TypeWriterText";

function Testimonials() {
  // Manage separate testimonies for each invader
  const [testimonies, setTestimonies] = useState({
    "invader-1": "",
    "invader-2": "",
    "invader-3": "",
    "invader-4": "",
  });

  const [testTitle, setTestimonialTitle] = useState(
    "Hear what others have to say about Ethan"
  );

  const handleTestimonyChange = (id: string, newTestimony: string) => {
    setTestimonies((prev) => ({
      ...prev,
      [id]: newTestimony,
    }));
    setTestimonialTitle(
      newTestimony ? "" : "Hear what others have to say about Ethan"
    );
  };

  return (
    <Flex
      color="white"
      width="100%"
      height="100vh"
      flexDir="row"
      position="relative"
      justifyContent="space-evenly"
      alignItems="flex-end"
      px="3vw"
      gap="3vw"
    >
      <Flex
        flexDir="column"
        height="27.3vw"
        alignItems="center"
        justifyContent="space-between"
        width="24%"
        mb="6em"
      >
        <TypewriterText
          text={testimonies["invader-1"]}
          fontSize="1.06vw"
          textAlign="center"
          width="100%"
        />
        <Flex position="relative" flexDir="column" alignItems="center">
          <Invader
            id="invader-1"
            position="relative"
            setTestimony={(text) => handleTestimonyChange("invader-1", text)}
          />
          <Text fontSize="1.5vw" fontWeight="bold">
            Full Name Here
          </Text>
          <Text>Relationship</Text>
        </Flex>
      </Flex>

      {/* INVADER 2 */}
      <Flex
        flexDir="column"
        height="27.3vw"
        alignItems="center"
        justifyContent="space-between"
        width="24%"
        mb="6em"
      >
        <TypewriterText
          text={testimonies["invader-2"]}
          fontSize="1.06vw"
          textAlign="center"
          width="100%"
        />
        <Flex position="relative" flexDir="column" alignItems="center">
          <Invader
            id="invader-2"
            position="relative"
            setTestimony={(text) => handleTestimonyChange("invader-2", text)}
          />
          <Text fontSize="1.5vw" fontWeight="bold">
            Full Name Here
          </Text>
          <Text>Relationship</Text>
        </Flex>
      </Flex>

      {/* INVADER 3 */}
      <Flex
        flexDir="column"
        height="27.3vw"
        alignItems="center"
        justifyContent="space-between"
        width="24%"
        mb="6em"
      >
        <TypewriterText
          fontSize="1.06vw"
          text={testimonies["invader-3"]}
          textAlign="center"
          width="100%"
        />
        <Flex position="relative" flexDir="column" alignItems="center">
          <Invader
            id="invader-3"
            position="relative"
            setTestimony={(text) => handleTestimonyChange("invader-3", text)}
          />
          <Text fontSize="1.5vw" fontWeight="bold">
            Full Name Here
          </Text>
          <Text>Relationship</Text>
        </Flex>
      </Flex>

      {/* INVADER 4 */}
      <Flex
        flexDir="column"
        height="27.3vw"
        alignItems="center"
        justifyContent="space-between"
        width="24%"
        mb="6em"
      >
        <TypewriterText
          text={testimonies["invader-4"]}
          fontSize="1.06vw"
          textAlign="center"
          width="100%"
        />
        <Flex position="relative" flexDir="column" alignItems="center">
          <Invader
            id="invader-4"
            position="relative"
            setTestimony={(text) => handleTestimonyChange("invader-4", text)}
          />
          <Text fontSize="1.5vw" fontWeight="bold">
            Full Name Here
          </Text>
          <Text>Relationship</Text>
        </Flex>
      </Flex>

      {/* Testimonial Title */}
      <TypewriterText
        text={testTitle}
        speed={30}
        style={{
          position: "absolute",
          top: "45vh",
          mx: "auto",
          fontSize: "2.3vw",
        }}
      />

      <Spaceship />
    </Flex>
  );
}

export default Testimonials;
