import { projects, ProjectsProps } from "@/data";
import { Img } from "@chakra-ui/image";
import {
  Container,
  Heading,
  HStack,
  Link,
  Stack,
  WrapItem,
} from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/system";
import { NextPage } from "next";
import { FC } from "react";

const Projects: NextPage = () => {
  return (
    <Stack as="section" spacing={8}>
      <Heading fontWeight="extrabold" color="primary.200">
        Projects
      </Heading>
      <Stack as="ul" align="center">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Projects;

interface ProjectItemProps {
  project: ProjectsProps;
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  const theme = useTheme();

  return (
    <WrapItem>
      <Link href={project.link} isExternal rounded="md" _hover={{}}>
        <Img
          src={project.banner}
          objectFit="cover"
          objectPosition="top"
          w="600px"
          h={["250px", "350px"]}
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
  );
};
