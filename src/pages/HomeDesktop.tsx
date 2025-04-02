import { Heading, Text, Flex, Image, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Spaceship from "../components/Spaceship";
import DockingStation from "@/components/dockingStation";
import TypewriterText from "@/components/TypeWriterText";
import { AnimatePresence, motion } from "framer-motion";

function HomeDesktop() {
  const [summary, setSummary] = useState("");
  const [pfp, setPFP] = useState("");
  const [showInvader, setShowInvader] = useState(false);
  const [showInvaderText, setShowInvaderText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const invaderTimer = setTimeout(() => {
      setShowInvader(true);

      const chatTimer = setTimeout(() => {
        setShowInvaderText(true);
      }, 1000);

      const buttonTimer = setTimeout(() => {
        setShowButton(true);
      }, 4400);

      return () => clearTimeout(chatTimer && buttonTimer);
    }, 4800);

    return () => clearTimeout(invaderTimer);
  }, []);

  function downloadResume(): void {
    const link = document.createElement("a");
    link.href = "/files/Ethan_Nielsen_Resume.pdf";
    link.download = "Ethan_Nielsen_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
          speed={30}
        />
        <TypewriterText
          fontSize={".8vw"}
          delay={2.2}
          style={{ marginTop: ".5vw" }}
          text="Collide with objects to reveal content. Fly safe! Or not..."
          speed={30}
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
          left="-4vw"
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
      <Flex position="fixed" bottom=".6vw" left="0vw">
        <AnimatePresence>
          {showInvader && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="fixed bottom-4 left-4 flex items-end gap-2 z-50"
            >
              <Image w="6.5vw" src="/images/invader-5.png" />
            </motion.div>
          )}
          {showInvaderText && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="fixed bottom-4 left-4 flex items-end gap-2 z-50"
            >
              <Flex
                w="19vw"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <TypewriterText
                  text="If you don't have time for an adventure, that's okay. You can download my full resume pdf here:"
                  speed={30}
                  fontSize=".8vw"
                />

                <AnimatePresence>
                  {showButton && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Button
                        mt="1vw"
                        fontSize=".7vw"
                        width="8vw"
                        colorPalette="purple"
                        variant="outline"
                        onClick={downloadResume}
                      >
                        Download Resume
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Flex>
            </motion.div>
          )}
        </AnimatePresence>
      </Flex>
    </Flex>
  );
}

export default HomeDesktop;
