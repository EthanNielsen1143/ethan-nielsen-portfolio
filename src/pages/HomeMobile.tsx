import { Box, Text, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TypewriterText from "@/components/TypeWriterText";

function HomeMobile() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5300);
    return () => clearTimeout(timer);
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
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="black"
    >
      {/* Game Boy container with fixed aspect ratio */}
      <Box
        width="90vw"
        maxWidth="500px"
        aspectRatio={2 / 3}
        position="relative"
        backgroundImage="url('/images/gameboy.png')"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
      >
        {/* Green screen box positioned relative to image */}
        <Box
          position="absolute"
          top="28%" // these % are based on the Game Boy image
          left="28%"
          width="44%"
          height="33%"
          background="rgba(0, 0, 0, 0.1)"
          padding="2%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Heading fontSize="calc(0.8em + 0.5vw)">
            Ah! I see you are on your mobile device!
          </Heading>

          <TypewriterText
            fontSize="calc(0.7em + 0.3vw)"
            text="This resume site is probably the coolest site you will ever see. However, this adventure is meant for desktops. In case you want to check out my resume now, hit the `A` button to download it."
          />

          <TypewriterText
            fontSize="calc(0.7em + 0.3vw)"
            delay={6}
            text="I would suggest checking this same site on your machine... unless you don't know how to fly a spaceship. Then maybe don't."
          />
        </Box>
      </Box>
    </Box>
  );
}

export default HomeMobile;
