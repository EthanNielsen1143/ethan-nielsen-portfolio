import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@chakra-ui/react";
import Nav from "../components/Nav";
import { useEffect } from "react";

const Root = () => {
  const [isMobile] = useMediaQuery(["(max-width: 768px)"], {
    ssr: false,
    fallback: [false],
  });

  useEffect(() => {
    const videoElement = document.getElementById(
      "backgroundVideo"
    ) as HTMLVideoElement;
    if (videoElement) {
      videoElement.playbackRate = 0.75;
    }
  }, []);

  if (isMobile) {
    return <Outlet />;
  }

  return (
    <Box pos="relative" width="100%" height="100vh" overflow="hidden">
      <video
        id="backgroundVideo"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="../videos/27770-365891067.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Nav />
      <Outlet />
    </Box>
  );
};

export default Root;
