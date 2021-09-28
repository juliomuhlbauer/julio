import BottomNav from "@/components/layout/BottomNav";
import GradientCircle from "@/components/GradientCircle";
import Nav from "@/components/layout/Header";
import { Box, Center, Container, Flex, Stack } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { FC } from "react";
import Motion from "../Motion";
import { useMedia } from "@/hooks";
import ContextMenu from "../ContextMenu";

const Layout: FC = ({ children }) => {
  const router = useRouter();

  const { isMd } = useMedia();

  return (
    <>
      <ContextMenu />
      <Box
        top={0}
        left={0}
        right={0}
        bottom={0}
        position="absolute"
        overflow="hidden"
        zIndex={-500}
      >
        <GradientCircle top="0" left="0" />
        <GradientCircle top="50%" right="0" />
      </Box>

      <Stack align="center" minH="100vh">
        <Nav />
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
