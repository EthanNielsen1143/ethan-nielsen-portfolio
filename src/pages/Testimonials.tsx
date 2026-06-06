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
    "Hear what others have to say about Ethan",
  );

  const handleTestimonyChange = (id: string, newTestimony: string) => {
    setTestimonies((prev) => ({
      ...prev,
      [id]: newTestimony,
    }));
    setTestimonialTitle(
      newTestimony ? "" : "Hear what others have to say about Ethan",
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
        mb="4vw"
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
            testimony="I've managed a lot of developers over the years, and Ethan stands out. He takes ownership, communicates clearly, and never treats a problem as someone else's responsibility. What impressed me most was how quickly he could context-switch between deep technical work and high-level strategy without missing a beat."
            position="relative"
            setTestimony={(text) => handleTestimonyChange("invader-1", text)}
          />
          <Text fontSize="1.5vw" fontWeight="bold">
            Landon Probst
          </Text>
          <Text>Internship Supervisor</Text>
        </Flex>
      </Flex>

      {/* INVADER 2 */}
      <Flex
        flexDir="column"
        height="27.3vw"
        alignItems="center"
        justifyContent="space-between"
        width="24%"
        mb="4vw"
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
            testimony="Ethan is one of the most insightful and innovative problem solvers I’ve worked with. 
            His ability to break down complex challenges and find efficient solutions is unmatched. 
            Whether it's coding, consulting, or just making the team laugh, Ethan always delivers. 
            If you're looking for someone who blends technical expertise with creativity and leadership, look no further!"
            setTestimony={(text) => handleTestimonyChange("invader-2", text)}
          />
          <Text fontSize="1.5vw" fontWeight="bold">
            Caleb Norris
          </Text>
          <Text>Internship Supervisor</Text>
        </Flex>
      </Flex>

      {/* INVADER 3 */}
      <Flex
        flexDir="column"
        height="27.3vw"
        alignItems="center"
        justifyContent="space-between"
        width="24%"
        mb="4vw"
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
            testimony="Ethan brought an energy to our team that's hard to put into words. He doesn't just write good code, he asks the right questions before a single line is written. His attention to detail and genuine curiosity about the user experience made every project we collaborated on better than it would have been without him"
            position="relative"
            setTestimony={(text) => handleTestimonyChange("invader-3", text)}
          />
          <Text fontSize="1.5vw" fontWeight="bold">
            Josh Hutchings
          </Text>
          <Text>Internship Supervisor</Text>
        </Flex>
      </Flex>

      {/* INVADER 4 */}
      <Flex
        flexDir="column"
        height="27.3vw"
        alignItems="center"
        justifyContent="space-between"
        width="24%"
        mb="4vw"
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
            testimony="Ethan has one of the sharpest business minds I've encountered in my years of consulting. He doesn't just understand the technical side, he sees the full picture. From market positioning and competitive analysis to operational efficiency and stakeholder alignment, he connects dots that most people don't even know exist. Every strategy conversation with Ethan elevated the outcome. He's the kind of person who makes an entire organization smarter just by being in the room."
            position="relative"
            setTestimony={(text) => handleTestimonyChange("invader-4", text)}
          />
          <Text fontSize="1.5vw" fontWeight="bold">
            Gavin Johnson
          </Text>
          <Text>Business consultant</Text>
        </Flex>
      </Flex>

      {/* Testimonial Title */}
      <TypewriterText
        text={testTitle}
        speed={30}
        style={{
          position: "absolute",
          top: "47vh",
          mx: "auto",
          fontSize: "2.3vw",
        }}
      />

      <Spaceship />
    </Flex>
  );
}

export default Testimonials;
