import { projects } from "@/data";
import { Img } from "@chakra-ui/image";
import {
  Box,
  Container,
  Heading,
  HStack,
  Link,
  Stack,
  WrapItem,
} from "@chakra-ui/layout";
import { chakra, useTheme } from "@chakra-ui/system";

const Projects = () => {
  const theme = useTheme();

  return (
    <Stack as="section" spacing={8}>
      <Heading fontWeight="extrabold" color="primary.200">
        Projects
      </Heading>
      <Stack as="ul" align="center">
        {projects.map((project, index) => (
          <WrapItem key={index}>
            <Link
              key={index}
              href={project.link}
              isExternal
              rounded="md"
              _hover={{}}
            >
              <Img
                src={project.banner}
                objectFit="cover"
                objectPosition="top"
                w="600px"
                maxH="350px"
                rounded="lg"
                boxShadow={`0 25px 100px -5px ${theme.colors.primary[500]}50`}
                transition="all 0.25s ease"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: `0 25px 100px -5px ${theme.colors.primary[500]}60`,
                }}
              />
              <HStack zIndex={2} position="relative" bottom={6} right={6}>
                <Img
                  zIndex={3}
                  rounded="md"
                  position="relative"
                  left={8}
                  src={project.logo}
                  w="64px"
                />
                <Container
                  p={4}
                  pl={12}
                  borderRadius="lg"
                  bgColor="glass.50"
                  sx={{
                    backdropFilter: "saturate(120%) blur(20px)",
                  }}
                >
                  <Heading size="lg">{project.name}</Heading>
                </Container>
              </HStack>
            </Link>
          </WrapItem>
        ))}
      </Stack>
    </Stack>
  );
};

export default Projects;
