import { useEffect, useContext, useRef } from "react";
import { Box, BoxProps, Image } from "@chakra-ui/react";
import { CollisionContext } from "@/context/collision-provider.tsx";

interface DockingStationProps extends BoxProps {
  id: string;
  setSummary?: (summary: string) => void;
  setPFP?: (pfp: string) => void;
}

const DockingStation = ({
  id,
  setSummary,
  setPFP,
  ...props
}: DockingStationProps) => {
  const { collidableElementsCallback } = useContext(CollisionContext);
  const dockingStationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    collidableElementsCallback({
      element: dockingStationRef.current,
      collisionCallback: () => {
        console.log(`${id}`);

        // Docking Station 1 → Only sets summary
        if (id === "docking-station-1" && setSummary) {
          setSummary(
            `Welcome to my portfolio website! I am a full stack developer with a
             passion for creating web applications. I am currently a Junior at Brigham Young University Idaho studying
             Software Engineering. I have experience with React, Node.js, ChakraUI,
             Express, MongoDB, and more, with a knack for creativity. I am always looking for new opportunities
             to learn and grow as a developer while also bringing valuable work and experience to your team.`
          );
        }

        if (id === "docking-station-2" && setPFP) {
          setPFP("/images/selfPortraitCollarCropped.jpg");
        }
      },
      collisionEndCallback: () => {
        console.log(`${id}`);

        // Reset only the affected state
        if (id === "docking-station-1" && setSummary) {
          setSummary("");
        }
        if (id === "docking-station-2" && setPFP) {
          setPFP("");
        }
      },
    });
  }, [collidableElementsCallback, setSummary, setPFP, id]);

  return (
    <Box
      ref={dockingStationRef}
      id={id}
      position="absolute"
      boxSize="100px"
      objectFit="cover"
      zIndex={0}
      transition="all .3s ease-in-out"
      {...props}
    >
      <Image src="../images/ds1Green.png" />
    </Box>
  );
};

export default DockingStation;
