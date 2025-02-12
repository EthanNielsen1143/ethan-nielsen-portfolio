import { CollisionContext } from "@/context/collision-provider.tsx";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useEffect } from "react";

interface PortalProps {
  src: string;
}

const Portal = ({ src }: PortalProps) => {
  const { collidableElementsCallback } = useContext(CollisionContext);
  const portalRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    collidableElementsCallback({
      element: portalRef.current,
      collisionCallback: () =>
        console.log(navigate("/"), window.location.reload()),
    });
  }, [collidableElementsCallback, navigate]);

  return (
    <Box
      ref={portalRef}
      position="absolute"
      width="4em"
      height="4em"
      marginTop="2em"
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

export default Portal;
