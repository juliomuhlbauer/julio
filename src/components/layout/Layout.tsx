import BottomNav from "@/components/layout/BottomNav";
import GradientCircle from "@/components/GradientCircle";
import Nav from "@/components/layout/Header";
import { Box, Container, Stack } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { FC } from "react";
import Motion from "../Motion";

const Layout: FC = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Box h="100%" w="100%" position="absolute" zIndex="-1" overflow="hidden">
        <GradientCircle top="0" left="0" />
        <GradientCircle bottom="0" right="0" />
      </Box>
      <Stack align="center" w="100%" h="100%" overflow="auto">
        <Nav />
        <BottomNav />

        <Container py={4} h="100%" maxW="container.md">
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
