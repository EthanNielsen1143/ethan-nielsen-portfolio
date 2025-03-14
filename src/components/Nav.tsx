import { Flex, Link } from "@chakra-ui/react";
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
          as="a" // Change from "asChild" to "as='a'"
          href="/" // Use href instead of ReactRouterLink
          outline="none"
          color="white"
          px="10px"
          mb="1em"
          zIndex={1}
        >
          Home
        </Link>
        <Portal id={"nav-portal-home"} src={"../public/videos/portal.webm"} />
      </Flex>
      <Flex flexDir="column" alignItems="center" justifyContent="content">
        <Link
          as="a"
          href="/experience"
          outline="none"
          color="white"
          px="10px"
          fontSize="3xl"
          zIndex={1}
        >
          Experience
        </Link>
        <PortalExp src="../public/videos/portal.webm" />
      </Flex>
      <Flex flexDir="column" alignItems="center" justifyContent="content">
        <Link
          as="a"
          href="/testimonials"
          outline="none"
          color="white"
          mb="1em"
          zIndex={1}
        >
          Testimonials
        </Link>
        <Portal
          id={"nav-portal-testimonials"}
          src="../public/videos/portal.webm"
        />
      </Flex>
    </Flex>
  );
};

export default Nav;
