import { useMediaQuery } from "@chakra-ui/react";
import HomeMobile from "./HomeMobile";
import HomeDesktop from "./HomeDesktop";

export default function HomePage() {
  const [isMobile] = useMediaQuery(["(max-width: 768px)"], {
    ssr: false,
    fallback: [false],
  });

  return isMobile ? <HomeMobile /> : <HomeDesktop />;
}
