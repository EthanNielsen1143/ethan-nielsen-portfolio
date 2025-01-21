import { useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";

const DockingStation1 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const parent = document.getElementById("spaceship-start");
    if (parent) {
      const rect = parent.getBoundingClientRect();
      console.log(rect);
      setPosition({
        x: rect.width / 2,
        y: rect.height + 30,
      });
    }
  }, []);

  return (
    <>
      <Image
        src="/images/dockingStationMain.png"
        alt="Spaceship"
        position="absolute"
        bottom={`${position.y}px`}
        left={`${position.x}px`}
        boxSize="200px"
      />
    </>
  );
};

export default DockingStation1;
