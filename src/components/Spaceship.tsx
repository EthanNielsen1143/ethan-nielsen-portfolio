import { useState, useEffect, useContext } from "react";
import { Box, Image } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { CollisionContext } from "@/context/collision-provider.tsx";

interface SpaceshipProps {
  setSummary?: (summary: string) => void;
  setPFP?: (pfp: string) => void;
}

const Spaceship = ({ setSummary, setPFP }: SpaceshipProps) => {
  const location = useLocation();
  const [position, setPosition] = useState({ x: 955, y: 180 });
  const [keys, setKeys] = useState<{ [key: string]: boolean }>({});
  const [rotate, setRotation] = useState(0);

  const { refCallback } = useContext(CollisionContext);

  useEffect(() => {
    if (location.pathname === "/") {
      setPosition({ x: 955, y: 180 });
    } else if (location.pathname === "/experience") {
      setPosition({ x: 500, y: 300 });
    } else if (location.pathname === "/testimonials") {
      setPosition({ x: 200, y: 400 });
    }
  }, [location.pathname]);

  useEffect(() => {
    let animationFrameId: number;

    const move = () => {
      setPosition((prev) => {
        let newX = prev.x;
        let newY = prev.y;

        if (keys.ArrowUp && keys.ArrowRight) {
          newY += 2;
          newX += 2;
          setRotation(45);
        } else if (keys.ArrowUp && keys.ArrowLeft) {
          newY += 2;
          newX -= 2;
          setRotation(-45);
        } else if (keys.ArrowDown && keys.ArrowRight) {
          newY -= 2;
          newX += 2;
          setRotation(135);
        } else if (keys.ArrowDown && keys.ArrowLeft) {
          newY -= 2;
          newX -= 2;
          setRotation(225);
        } else if (keys.ArrowUp) {
          newY += 2;
          setRotation(0);
        } else if (keys.ArrowDown) {
          newY -= 2;
          setRotation(180);
        } else if (keys.ArrowLeft) {
          newX -= 2;
          setRotation(270);
        } else if (keys.ArrowRight) {
          newX += 2;
          setRotation(90);
        }

        newX = Math.max(35, Math.min(newX, window.innerWidth - 95));
        newY = Math.max(-25, Math.min(newY, window.innerHeight - 95));

        return { x: newX, y: newY };
      });

      animationFrameId = requestAnimationFrame(move);
    };

    move();

    return () => cancelAnimationFrame(animationFrameId);
  }, [keys]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKeys((prev) => ({ ...prev, [event.key]: true }));
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      setKeys((prev) => ({ ...prev, [event.key]: false }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const checkCollision = () => {
      const spaceshipRect = {
        left: position.x,
        top: position.y,
        right: position.x + 60,
        bottom: position.y + 60,
      };

      const detectCollisions = (
        elements: NodeListOf<Element>,
        callback: (element: Element, isColliding: boolean) => void
      ) => {
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();

          const isColliding =
            spaceshipRect.left < rect.right &&
            spaceshipRect.right > rect.left &&
            spaceshipRect.top < rect.bottom &&
            spaceshipRect.bottom > rect.top;

          callback(element, isColliding);
        });
      };

      let collisionDetected = false;

      // Check for collisions with docking stations
      const dockingStations = document.querySelectorAll(
        '[id^="docking-station"]'
      );
      detectCollisions(dockingStations, (station, isColliding) => {
        if (isColliding) {
          console.log("COLLIDE DETECTED");
          collisionDetected = true;

          const dockingStationId = station.id;
          if (dockingStationId === "docking-station-1" && setSummary) {
            station.setAttribute("src", "/images/ds1Red.png");
            setSummary(
              `Welcome to my portfolio website! I am a full stack developer with a
              passion for creating web applications. I am currently a Junior at Brigham Young University Idaho studying
              Software Engineering. I have experience with React, Node.js, ChakraUI,
              Express, MongoDB, and more, with a knack for creativity. I am always looking for new opportunities
              to learn and grow as a developer while also bringing valuable work and experience to your team.`
            );
          } else if (dockingStationId === "docking-station-2" && setPFP) {
            station.setAttribute("src", "/images/ds1Red.png");
            setPFP("/images/selfPortraitCollarCropped.jpg");
          }
        } else {
          station.setAttribute("src", "/images/ds1Green.png");
        }
      });

      // Check for collisions with nav portals
      const navPortals = document.querySelectorAll('[id^="nav-portal"]');
      detectCollisions(navPortals, (portal, isColliding) => {
        if (isColliding) {
          console.log("COLLIDE DETECTED");
          collisionDetected = true;

          const portalId = portal.id;
          if (portalId === "nav-portal-home") {
            console.log("Navigating to Home");
            console.log("HELLO");
          } else if (portalId === "nav-portal-experience") {
            console.log("Navigating to Experience");
            console.log("HELLO2");
          }
        }
      });

      if (!collisionDetected) {
        if (setSummary) setSummary("");
        if (setPFP) setPFP("");
      }
    };

    checkCollision();
  }, [position, setSummary, setPFP]);

  return (
    <Box
      ref={refCallback}
      position="absolute"
      bottom={`${position.y}px`}
      left={`${position.x}px`}
      transform={`translate(-50%, -50%) rotate(${rotate}deg)`}
      //transition="transform 0.15s ease-in-out"
      zIndex={1}
    >
      <Image src="/images/shuttle.png" alt="Spaceship" boxSize="60px" />
    </Box>
  );
};

export default Spaceship;
