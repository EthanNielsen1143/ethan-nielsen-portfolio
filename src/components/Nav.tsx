import { Flex, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Portal from "./Portal.tsx";
import PortalExp from "./PortalExp.tsx";

const Nav = () => {
  return (
    <Flex
      pt="50px"
      gap="28em"
      position="fixed"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      zIndex="1"
      top="0"
      left="0"
    >
      <Flex flexDir="column" alignItems="center">
        <Link
          outline="none"
          asChild
          color="white"
          px="10px"
          mb="1em"
          zIndex={1}
        >
          <ReactRouterLink to="/">Home</ReactRouterLink>
        </Link>
        <Portal id={"nav-portal-home"} src={"../public/videos/portal.mp4"} />
      </Flex>
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="content"
        // bgColor="space.500"
      >
        <Link
          outline="none"
          asChild
          color="white"
          px="10px"
          fontSize="3xl"
          zIndex={1}
        >
          <ReactRouterLink to="/experience">Experience</ReactRouterLink>
        </Link>
        {/* attempting to check collision with box instead*/}
        {/* of a direct video*/}
        <PortalExp src="../public/videos/portal.mp4" />
      </Flex>
      <Flex flexDir="column" alignItems="center" justifyContent="content">
        <Link outline="none" asChild color="white" mb="1em" zIndex={1}>
          <ReactRouterLink to="/testimonials">Testimonials</ReactRouterLink>
        </Link>
        <Portal
          id={"nav-portal-testimonials"}
          src="../public/videos/portal.mp4"
        />
      </Flex>
    </Flex>
  );
};

export default Nav;
