import BottomNav from "@/components/layout/BottomNav";
import GradientCircle from "@/components/GradientCircle";
import Nav from "@/components/layout/Header";
import { Box, Container, Stack } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { FC } from "react";
import Motion from "../Motion";
import { useMedia } from "@/hooks";

const Layout: FC = ({ children }) => {
  const router = useRouter();

  const { isMd } = useMedia();

  return (
    <>
      <Box h="100%" w="100%" position="fixed" zIndex="-1">
        <GradientCircle top="0" left="0" />
        <GradientCircle bottom="0" right="0" />
      </Box>

      <Stack overflow="auto" align="center" w="100%" h="100%">
        <Nav />
        <BottomNav />

        <Container
          as="main"
          py={4}
          h="100%"
          maxW="container.md"
          {...(isMd && {
            mb: 64,
          })}
        >
          <Motion
            key={router.route}
            w="100%"
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
