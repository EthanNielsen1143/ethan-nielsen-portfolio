import { useState, useEffect, useContext } from "react";
import { Box, BoxProps, Image } from "@chakra-ui/react";
import { CollisionContext } from "@/context/collision-provider.tsx";

const DockingStation1 = (props: BoxProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { refCallback } = useContext(CollisionContext);

  useEffect(() => {
    const parent = document.getElementById("spaceship-start");
    if (parent) {
      const rect = parent.getBoundingClientRect();
      setPosition({
        x: rect.width / 2,
        y: rect.height + 30,
      });
    }
  }, []);

  return (
    <Box
      ref={refCallback}
      position="absolute"
      // top="50%"
      // left="110%"
      // transform="translate(-50%, -50%)"
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

export default DockingStation1;
