import { useEffect, useContext, useRef, useState } from "react";
import { Box, BoxProps, Image } from "@chakra-ui/react";
import { CollisionContext } from "@/context/collision-provider.tsx";
import { keyframes } from "@emotion/react";

interface SatellitesProps extends BoxProps {
  id: string;
  size: string;
  title: string;
  onCollision: (id: string) => void;
}

const Satellite = ({
  id,
  size,
  title,
  onCollision,
  ...props
}: SatellitesProps) => {
  const { collidableElementsCallback } = useContext(CollisionContext);
  const satelliteRef = useRef<HTMLDivElement | null>(null);
  const [isCollided, setIsCollided] = useState(false);

  useEffect(() => {
    if (!satelliteRef.current) return;

    const element = satelliteRef.current;

    const handleCollision = () => {
      console.log(`Collision STARTED with: ${id}`);
      setIsCollided(true);
      onCollision(id);
    };

    collidableElementsCallback({
      element,
      collisionCallback: handleCollision,
    });

    return () => {
      collidableElementsCallback({
        element,
        collisionCallback: () => {},
      });
    };
  }, [id, collidableElementsCallback]); // Depend on id to re-register

  const hoverAnimation = keyframes`
      0% { transform: translateY(0); }
      50% { transform: translateY(-25px); }
      100% { transform: translateY(0); }
    `;

  return (
    <Box
      ref={satelliteRef}
      id={id}
      w={size}
      h={size}
      {...props}
      animation={
        isCollided ? "none" : `${hoverAnimation} 2s ease-in-out infinite`
      }
    >
      <Image
        src={`../images/${id}.png`}
        alt={title}
        boxSize="auto"
        objectFit="contain"
      />
    </Box>
  );
};

export default Satellite;
