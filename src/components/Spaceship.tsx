import { useState, useEffect, useContext, useRef } from "react";
import { Box, Image } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { CollisionContext } from "@/context/collision-provider.tsx";

const Spaceship = () => {
  const location = useLocation();
  const [position, setPosition] = useState({ x: 955, y: 180 });
  const keys = useRef<{ [key: string]: boolean }>({});
  const [rotation, setRotation] = useState(0);
  const spaceshipRef = useRef<HTMLDivElement | null>(null);
  const { collidableElementsCallback, spaceShipMovedCallback } =
    useContext(CollisionContext);

  useEffect(() => {
    const updatePosition = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      if (location.pathname === "/") {
        setPosition({ x: screenWidth * 0.5, y: screenHeight * 0.2 });
      } else if (location.pathname === "/experience") {
        setPosition({ x: screenWidth * 0.5, y: screenHeight * 0.15 });
      } else if (location.pathname === "/testimonials") {
        setPosition({ x: screenWidth * 0.5, y: screenHeight * 0.6 });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [location.pathname]);

  useEffect(() => {
    collidableElementsCallback({
      element: spaceshipRef.current,
      collisionCallback: () => undefined,
    });
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const move = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 16.67;
      lastTime = currentTime;

      setPosition((prev) => {
        let newX = prev.x;
        let newY = prev.y;
        const speed = 6 * deltaTime;

        if (keys.current.ArrowUp && keys.current.ArrowRight) {
          newY += speed;
          newX += speed;
          setRotation(45);
        } else if (keys.current.ArrowUp && keys.current.ArrowLeft) {
          newY += speed;
          newX -= speed;
          setRotation(-45);
        } else if (keys.current.ArrowDown && keys.current.ArrowRight) {
          newY -= speed;
          newX += speed;
          setRotation(135);
        } else if (keys.current.ArrowDown && keys.current.ArrowLeft) {
          newY -= speed;
          newX -= speed;
          setRotation(225);
        } else if (keys.current.ArrowUp) {
          newY += speed;
          setRotation(0);
        } else if (keys.current.ArrowDown) {
          newY -= speed;
          setRotation(180);
        } else if (keys.current.ArrowLeft) {
          newX -= speed;
          setRotation(270);
        } else if (keys.current.ArrowRight) {
          newX += speed;
          setRotation(90);
        }

        newX = Math.max(35, Math.min(newX, window.innerWidth - 95));
        newY = Math.max(-25, Math.min(newY, window.innerHeight - 95));

        return { x: newX, y: newY };
      });

      animationFrameId = requestAnimationFrame(move);
    };

    animationFrameId = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      keys.current[event.key] = true;
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      keys.current[event.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    spaceShipMovedCallback();
  }, [position, spaceShipMovedCallback]);

  return (
    <Box
      id="spaceShip"
      ref={spaceshipRef}
      position="absolute"
      bottom={`${position.y}px`}
      left={`${position.x}px`}
      transform={`translate(-50%, -50%) rotate(${rotation}deg)`}
      zIndex={1}
    >
      <Image src="/images/shuttle.png" alt="Spaceship" boxSize="3.3vw" />
    </Box>
  );
};

export default Spaceship;
