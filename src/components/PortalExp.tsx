import { CollisionContext } from "@/context/collision-provider.tsx";
import { Box } from "@chakra-ui/react";
import { useContext, useRef, useEffect } from "react";

interface PortalProps {
  src: string;
}

const PortalExp = ({ src }: PortalProps) => {
  const portalExpRef = useRef<HTMLDivElement | null>(null);
  const { collidableElementsCallback } = useContext(CollisionContext);

  useEffect(() => {
    collidableElementsCallback({
      element: portalExpRef.current,
      collisionCallback: () => console.log("Experience Portal Collided"),
    });
  }, []);

  return (
    <Box
      ref={portalExpRef}
      position="absolute"
      width="6em"
      height="6em"
      marginTop="3em"
      objectFit="cover"
      zIndex={0}
    >
      <video
        id="nav-portal-home"
        autoPlay
        loop
        muted
        style={{
          borderRadius: "100px",
        }}
      >
        <source src={src} />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default PortalExp;
