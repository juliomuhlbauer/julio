import { GradientCircle } from "@/components/gradient-circle";
import { useMedia } from "@/hooks";
import BottomNav from "@/layout/bottom-nav";
import Header from "@/layout/header";
import { Box, Container, Stack } from "@chakra-ui/layout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FC } from "react";
import { Motion } from "../components/motion";

const ContextMenu = dynamic<{}>(
  () =>
    import("@/components/context-menu").then((module) => module.ContextMenu),

  {
    ssr: false,
  }
);

const Layout: FC = ({ children }) => {
  const router = useRouter();

  const { isMd } = useMedia();

  return (
    <>
      <ContextMenu />

      <Box inset={0} position="absolute" overflow="hidden" zIndex={-500}>
        <GradientCircle top="0" left="0" />
        <GradientCircle top="50%" right="0" />
      </Box>

      <Stack align="center" minH="100vh">
        <Header />
        <BottomNav />
        <Container
          as="main"
          h="100%"
          py={4}
          maxW="container.md"
          {...(isMd && {
            mb: 64,
          })}
        >
          <Motion
            key={router.route}
            h="100%"
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ type: "spring", bounce: 0 }}
          >
            {children}
          </Motion>
        </Container>
      </Stack>
    </>
  );
};

export default Layout;
