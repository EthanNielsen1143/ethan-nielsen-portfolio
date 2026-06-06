import { useEffect, useContext, useRef, useState } from "react";
import { keyframes } from "@emotion/react";
import { Box, BoxProps, Image } from "@chakra-ui/react";
import { CollisionContext } from "@/context/collision-provider.tsx";

interface InvadersProps extends BoxProps {
  id: string;
  testimony?: string;
  setTestimony?: (testimony: string) => void;
}

const Invader = ({ id, testimony, setTestimony, ...props }: InvadersProps) => {
  const { collidableElementsCallback } = useContext(CollisionContext);
  const invaderRef = useRef<HTMLDivElement | null>(null);

  const [isCollided, setIsCollided] = useState(false);

  useEffect(() => {
    collidableElementsCallback({
      element: invaderRef.current,
      collisionCallback: () => {
        console.log(`Collision STARTED with: ${id}`);
        setIsCollided(true); // Stop floating on collision

        if (setTestimony) {
          setTestimony(testimony ?? "");
        }
      },
    });
  }, [collidableElementsCallback, setTestimony]);

  // Floating animation definition
  const hoverAnimation = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-25px); }
    100% { transform: translateY(0); }
  `;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      ref={invaderRef}
      id={id}
      position="relative"
      zIndex={0}
      borderRadius="50%"
      w="5.4vw"
      overflow="visible"
      animation={
        isCollided ? "none" : `${hoverAnimation} 2s ease-in-out infinite`
      }
      {...props}
    >
      <Image
        src={`../images/${id}.png`}
        alt={`Invader ${id}`}
        boxSize="100%"
        objectFit="contain"
      />
    </Box>
  );
};

export default Invader;
