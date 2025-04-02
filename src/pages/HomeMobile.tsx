import { Heading, Flex, Button } from "@chakra-ui/react";
import TypewriterText from "@/components/TypeWriterText";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function HomeMobile() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5300);

    return () => clearTimeout(timer);
  });

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
      height="100vh"
      width="100vw"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      gap="6vh"
      padding="6vw"
    >
      <Heading fontSize="6vw">Ah! I see you are on your mobile device!</Heading>
      <TypewriterText
        fontSize="3.8vw"
        text="This resume site is probably the coolest site you will ever see. However, this adventure is meant for desktops. 
      Here is the download link in-case you want to checkout my resume now."
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
              padding="7vw"
              fontSize="4vw"
              borderRadius="10px"
              width="50vw"
              colorPalette="purple"
              variant="outline"
              onClick={downloadResume}
            >
              Download Resume
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <TypewriterText
        fontSize="3.8vw"
        delay={6}
        text="I would suggest checking this same site on your machine... unless you don't know how to fly a spaceship. Then maybe don't."
      />
    </Flex>
  );
}

export default HomeMobile;
