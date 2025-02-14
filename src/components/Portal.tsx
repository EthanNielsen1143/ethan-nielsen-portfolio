import { CollisionContext } from "@/context/collision-provider.tsx";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useEffect } from "react";

interface PortalProps {
  src: string;
  id: string;
}

const Portal = ({ src, id }: PortalProps) => {
  const { collidableElementsCallback } = useContext(CollisionContext);
  const portalRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    collidableElementsCallback({
      element: portalRef.current,
      collisionCallback: () => {
        if (portalRef.current?.querySelector(`#${id}`)) {
          if (id === "nav-portal-home") {
            navigate("/");
            window.location.reload();
            console.log("home portal detected");
          }
          if (id === "nav-portal-testimonials") {
            navigate("/testimonials");
            window.location.reload();
            console.log("testi portal detected");
          }
        }
      },
    });
  }, [collidableElementsCallback, navigate, id]);

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
        id={id}
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
