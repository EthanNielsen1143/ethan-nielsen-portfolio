import { Flex, Link } from "@chakra-ui/react";
import Portal from "./Portal.tsx";
import PortalExp from "./PortalExp.tsx";

const Nav = () => {
  return (
    <Flex
      pt="3vw"
      gap="25vw"
      position="fixed"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      zIndex="1"
    >
      <Flex flexDir="column" alignItems="center">
        <Link
          as="a"
          href="/"
          outline="none"
          color="white"
          mb="1vw"
          zIndex={1}
          fontSize="1vw"
        >
          Home
        </Link>
        <Portal id={"nav-portal-home"} src={"./videos/portal.webm"} />
      </Flex>
      <Flex flexDir="column" alignItems="center" justifyContent="content">
        <Link
          as="a"
          href="/experience"
          outline="none"
          color="white"
          fontSize="2vw"
        >
          Experience
        </Link>
        <PortalExp src="./videos/portal.webm" />
      </Flex>
      <Flex flexDir="column" alignItems="center" justifyContent="content">
        <Link
          as="a"
          href="/testimonials"
          outline="none"
          color="white"
          mb="1em"
          fontSize="1vw"
          zIndex={1}
        >
          Testimonials
        </Link>
        <Portal id={"nav-portal-testimonials"} src="./videos/portal.webm" />
      </Flex>
    </Flex>
  );
};

export default Nav;
