import { BottomNav } from "@/layout/bottom-nav";
import { Header } from "@/layout/header";
import { Box, Container, Stack, chakra } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { Motion } from "../components/motion";
import { Background } from "./background";

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
      {/* <ContextMenu /> */}

      {/* <Background /> */}

      <Stack align="center" minH="100vh">
        <Header />

        <Container as="main" h="100%" maxW="container.lg" py={4} pb={24}>
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

        <BottomNav
          display={{ base: "block", md: "none" }}
          sx={{
            "@media print": {
              display: "none",
            },
          }}
        />
      </Stack>
    </>
  );
};
