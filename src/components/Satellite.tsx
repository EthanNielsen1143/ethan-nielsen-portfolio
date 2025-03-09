import { useEffect, useContext, useRef, useState } from "react";
import { keyframes } from "@emotion/react";
import { Box, BoxProps, Image, Text } from "@chakra-ui/react";
import { CollisionContext } from "@/context/collision-provider.tsx";

interface SatellitesProps extends BoxProps {
  id: string;
  size: string;
  setModal?: (modal: string) => void;
}

const Satellite = ({ id, size, ...props }: SatellitesProps) => {
  const { collidableElementsCallback } = useContext(CollisionContext);
  const satelliteRef = useRef<HTMLDivElement | null>(null);
  const [isCollided, setIsCollided] = useState(false);
  const hoverAnimationSatellite = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-25px); }
  100% { transform: translateY(0); }
`;
  useEffect(() => {
    collidableElementsCallback({
      element: satelliteRef.current,
      collisionCallback: () => {
        console.log(`Collision STARTED with: ${id}`);
        setIsCollided(true);
      },
    });
  }, [collidableElementsCallback]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      ref={satelliteRef}
      id={id}
      w={size}
      h={size}
      position="relative"
      zIndex={0}
      borderRadius="50%"
      overflow="visible"
      animation={
        isCollided
          ? "none"
          : `${hoverAnimationSatellite} 3s ease-in-out infinite `
      }
      {...props}
    >
      <Image
        src={`../images/${id}.png`}
        alt={`Satellite ${id}`}
        boxSize="auto"
        objectFit="contain"
      />
    </Box>
  );
};

export default Satellite;
