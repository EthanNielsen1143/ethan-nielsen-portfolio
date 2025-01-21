import { CollisionContext } from "@/context/collision-provider";
import { Box } from "@chakra-ui/react";
import { useContext } from "react";

interface PortalProps {
  src: string;
}

const Portal = ({ src }: PortalProps) => {
  const { refCallback } = useContext(CollisionContext);

  return (
    <Box
      ref={refCallback}
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
