import { GradientCircle } from "@/components/gradient-circle";

import { BottomNav } from "@/layout/bottom-nav";
import { Header } from "@/layout/header";
import { Box, Container, Stack } from "@chakra-ui/layout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { Motion } from "../components/motion";

const ContextMenu = dynamic<{}>(
  () =>
    import("@/components/context-menu").then((module) => module.ContextMenu),

  {
    ssr: false,
  }
);

export const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const router = useRouter();

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
          maxW="container.lg"
          mb={{ base: 0, mb: 64 }}
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
