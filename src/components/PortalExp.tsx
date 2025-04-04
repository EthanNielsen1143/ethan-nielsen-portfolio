import { CollisionContext } from "@/context/collision-provider.tsx";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useEffect } from "react";

interface PortalProps {
  src: string;
}

const PortalExp = ({ src }: PortalProps) => {
  const portalExpRef = useRef<HTMLDivElement | null>(null);
  const { collidableElementsCallback } = useContext(CollisionContext);
  const navigate = useNavigate();

  useEffect(() => {
    collidableElementsCallback({
      element: portalExpRef.current,
      collisionCallback: () =>
        console.log(navigate("/experience"), window.location.reload()),
    });
  }, [collidableElementsCallback, navigate]);

  return (
    <Box
      ref={portalExpRef}
      position="absolute"
      width="5vw"
      marginTop="3.5vw"
      objectFit="cover"
      zIndex={0}
    >
      <video
        id="nav-portal-experience"
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
