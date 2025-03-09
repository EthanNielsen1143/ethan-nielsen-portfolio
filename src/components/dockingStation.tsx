import { useEffect, useContext, useRef, useState } from "react";
import { Box, BoxProps, Image } from "@chakra-ui/react";
import { CollisionContext } from "@/context/collision-provider.tsx";
import { keyframes } from "@emotion/react";

interface DockingStationProps extends BoxProps {
  id: string;
  setSummary?: (summary: string) => void;
  setPFP?: (pfp: string) => void;
  setTestimony?: (testimony: string) => void;
}

const DockingStation = ({
  id,
  setSummary,
  setPFP,
  setTestimony,
  ...props
}: DockingStationProps) => {
  const { collidableElementsCallback } = useContext(CollisionContext);
  const [isCollided, setIsCollided] = useState(false);
  const dockingStationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    collidableElementsCallback({
      element: dockingStationRef.current,
      collisionCallback: () => {
        console.log(`Collision STARTED with: ${id}`);
        setIsCollided(true);

        if (dockingStationRef.current) {
          const imageElement = dockingStationRef.current.querySelector("img");
          if (imageElement) {
            imageElement.src = `/images/ds1Red.png`;
          }
        }

        if (id === "docking-station-1" && setSummary) {
          setSummary(
            `Welcome to my portfolio website! I am a full stack developer with a
             passion for creating web applications. I am currently a Senior at Brigham Young University Idaho studying
             Software Engineering. I have experience with React, ChakraUI, Typescript,
             Express, MongoDB, and more, with a knack for creativity. I am always looking for new opportunities
             to learn and grow as a developer while also bringing valuable work and experience to your team.`
          );
        }

        if (id === "docking-station-2" && setPFP) {
          setPFP("/images/selfPortraitCollarCropped.jpg");
        }

        if (id === "docking-station-3" && setTestimony) {
          setTestimony(`Ethan is one of the most insightful and innovative problem solvers I’ve worked with. 
            His ability to break down complex challenges and find efficient solutions is unmatched. 
            Whether it's coding, consulting, or just making the team laugh, Ethan always delivers. 
            If you're looking for someone who blends technical expertise with creativity and leadership, look no further!`);
        }
      },
      collisionEndCallback: () => {
        console.log(`Collision ENDED with: ${id}`);

        if (dockingStationRef.current) {
          const imageElement = dockingStationRef.current.querySelector("img");
          if (imageElement) {
            imageElement.src = `/images/ds1Green.png`;
          }
        }

        if (id === "docking-station-1" && setSummary) {
          setSummary("");
        }

        if (id === "docking-station-2" && setPFP) {
          setPFP("");
        }
      },
    });
  }, [collidableElementsCallback, setSummary, setPFP, setTestimony]);

  const hoverAnimation = keyframes`
    0% { transform: translate(-50%, -50%) translateY(0); }  
    50% { transform: translate(-50%, -50%) translateY(-30px); } 
    100% { transform: translate(-50%, -50%) translateY(0); }  
  `;

  return (
    <Box
      ref={dockingStationRef}
      id={id}
      position="absolute"
      boxSize="100px"
      objectFit="cover"
      top="50%" /* Ensure it starts exactly where you want */
      left="50%"
      zIndex={0}
      willChange="transform"
      transition="all .3s ease-in-out"
      animation={
        isCollided ? "none" : `${hoverAnimation} 5s ease-in-out infinite`
      }
      {...props}
    >
      <Image src="../images/ds1Green.png" />
    </Box>
  );
};

export default DockingStation;
