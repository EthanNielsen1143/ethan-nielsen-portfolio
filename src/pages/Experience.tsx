import { Flex, Image, Box } from "@chakra-ui/react";
import { useState } from "react";
import Spaceship from "../components/Spaceship";
import TypewriterText from "@/components/TypeWriterText";
import Satellite from "@/components/Satellite";
import { motion, AnimatePresence } from "framer-motion";

const MotionImage = motion(Image);

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState<{
    id: string | null;
    title: string;
    date: string;
    body: string;
  }>({
    id: null,
    title: "",
    date: "",
    body: "",
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  const defaultTitle = `This is where I store all my career loot— internships, education, projects
    and things that made me better. Fly around and check it out. 
    Just try not to break anything...`;

  type ExperienceType = {
    id: string;
    title: string;
    date: string;
    body: string;
  };

  const handleCollision = (id: string) => {
    setIsTransitioning(true);
    setActiveExperience({ id: null, title: "", date: "", body: "" });

    setTimeout(() => {
      const experiences: { [key: string]: ExperienceType } = {
        "satellite-1": {
          id: "satellite-1",
          title: "Internship at Capital Insurance Group",
          date: "April 2023 to September 2023",
          body: `As a software engineering intern, I collaborated with a team of developers using the SCRUM methodology to improve automation processes. My primary project focused on streamlining the update of user tax information, which was previously a manual process. I designed and implemented a Jenkins pipeline to automate data retrieval and transformation, ensuring updated tax information was processed efficiently and made accessible to users in real time. This automation significantly improved workflow efficiency and accuracy, reducing the need for manual intervention and enhancing the overall user experience.`,
        },
        "satellite-2": {
          id: "satellite-2",
          title: "Internship at CorEMR Inc.",
          date: "April 2024 to October 2024",
          body: `As a development intern, I contributed to enhancing CorEMR’s server-side rendered Electronic Medical Records web application by implementing improvements and integrating user feedback. I led a side project to develop a comprehensive Selenium pipeline for automating QA testing, streamlining the testing process and improving reliability. Additionally, I worked closely with the support team to integrate customer-suggested improvements, ensuring the application continuously evolved to meet user needs.`,
        },
        "satellite-3": {
          id: "satellite-3",
          title: "Schooling at Brigham Young University-Idaho",
          date: "Janurary 2022 to Current",
          body: `Through coursework and hands-on projects, I gained experience in software development, web applications, and automation. I built server-side rendered web apps, including a wedding videography platform and a car sales site, strengthening my skills in JavaScript, HTML/CSS, APIs, and MVC frameworks. I also developed a Python game using Pygame to test reaction speed, improving my understanding of game loops and algorithm efficiency. Additionally, I created a C#-based program for home cooks to manage recipes, track inventory, and generate meal suggestions, reinforcing my knowledge of software architecture and data management. These projects, along with my studies, have built a strong foundation in full-stack development, automation, and software engineering principles.`,
        },
        "satellite-4": {
          id: "satellite-4",
          title: "AI Trainer at Cartwheel Inc.",
          date: "June 2024 to Jan 2025",
          body: `At Cartwheel AI, I was responsible for labeling and annotating large datasets of motion capture and animation data to support the training of AI models. My work focused on ensuring data accuracyand consistency, which contributed to improving the performance of AI-generated 3D animations. I collaborated with the AI development team to meet project requirements and maintained high-quality standards throughout the data preparation process.`,
        },
      };

      setActiveExperience(experiences[id] || { id: null, title: "", body: "" });
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <Flex
      width="100%"
      height="100vh"
      flexDir="row"
      position="relative"
      justifyContent="space-around"
      alignItems="center"
    >
      {/* Left Side */}
      <Flex
        flex="1"
        flexDirection="column"
        gap="5em"
        marginTop="10em"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          // backgroundImage="url('/images/StretchedModalWindow.png')"
          backgroundSize="100% 100%"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius="11px"
          width="250px"
          height="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          // backgroundColor="rgba(173, 216, 230, 0.5)"
          mb="2em"
        >
          <TypewriterText
            text="INTERNSHIPS"
            fontWeight="bold"
            fontSize="2em"
            speed={100}
            delay={7.5}
          />
        </Box>
        <Satellite
          id="satellite-1"
          size="140px"
          title="Internship 1"
          onCollision={handleCollision}
        />
        <Satellite
          id="satellite-2"
          size="140px"
          title="Internship 2"
          onCollision={handleCollision}
        />
      </Flex>

      {/* Main Display Area */}
      <Flex flex="3.5" justifyContent="center" position="relative">
        <Flex
          flexDirection="column"
          width="100%"
          textAlign="center"
          gap="2em"
          justifyContent="center"
          alignItems="center"
          position="relative"
          minHeight="250px"
          minWidth="500px"
          zIndex={3}
        >
          {/* Background Image (Only Shows AFTER Title Fades Out) */}
          <AnimatePresence mode="wait">
            {activeExperience.id && (
              <motion.div
                key="background-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  position: "absolute",
                  width: "95%",
                  height: "auto",
                }}
              >
                <Image
                  src="../images/StretchedModalWindow.png"
                  backgroundColor="#add8e640"
                  borderRadius="75px"
                  rotate="180deg"
                  width="100%"
                  height="auto"
                  objectFit="cover"
                  mt="150px"
                  zIndex="2"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Text Content (Fades Out Before Background Appears) */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="90%"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExperience.id || "default-message"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  width: "100%",
                  position: "absolute",
                }}
              >
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  marginTop="-6em"
                >
                  <TypewriterText
                    text={
                      activeExperience.id
                        ? activeExperience.title
                        : "Looks like you’ve found the Experience page"
                    }
                    fontSize="2.3em"
                    fontWeight="bold"
                    mb=".5em"
                  />
                  <Flex width="60%" justifyContent="center">
                    <TypewriterText
                      text={
                        activeExperience.id
                          ? activeExperience.date
                          : defaultTitle
                      }
                      fontSize="1.3em"
                      textAlign="center"
                      delay={1.5}
                    />
                  </Flex>
                  <Flex width="80%" marginTop="2em" justifyContent="center">
                    <TypewriterText
                      text={activeExperience.id ? activeExperience.body : ""}
                      fontSize="1.17em"
                      textAlign="center"
                      delay={2.5}
                    />
                  </Flex>
                </Flex>
              </motion.div>
            </AnimatePresence>
          </Box>
        </Flex>
      </Flex>

      {/* Right Side */}
      <Flex
        flex="1"
        flexDirection="column"
        gap="5em"
        marginTop="10em"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          // backgroundImage="url('/images/StretchedModalWindow.png')"
          backgroundSize="100% 100%"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius="11px"
          width="250px"
          height="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          // backgroundColor="rgba(173, 216, 230, 0.5)"
          mb="2em"
        >
          <TypewriterText
            text="OTHER EXPERIENCE"
            fontWeight="bold"
            fontSize="1.5em"
            speed={100}
            delay={9.5}
          />
        </Box>
        <Satellite
          id="satellite-3"
          size="140px"
          title="Other Experience 1"
          onCollision={handleCollision}
        />
        <Satellite
          id="satellite-4"
          size="140px"
          title="Other Experience 2"
          onCollision={handleCollision}
        />
      </Flex>

      <Spaceship />
    </Flex>
  );
};

export default Experience;
