import { projects } from "@/data";
import { Img } from "@chakra-ui/image";
import { Container, Heading, HStack, Link, Stack } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/system";

const Projects = () => {
  const theme = useTheme();

  return (
    <Stack align="center" justify="center" h="80%">
      {projects.map((project, index) => (
        <Link
          key={index}
          href={project.link}
          isExternal
          rounded="md"
          _hover={{}}
        >
          <Img
            transition="all 0.25s ease"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: `0 25px 100px -5px ${theme.colors.primary[500]}60`,
            }}
            boxShadow={`0 25px 100px -5px ${theme.colors.primary[500]}50`}
            rounded="lg"
            w="600px"
            maxH="350px"
            objectFit="cover"
            objectPosition="top"
            src={project.banner}
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
      ))}
    </Stack>
  );
};

export default Projects;
