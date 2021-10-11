import { Image } from "@/components/iamge_temp";
import { projects, ProjectsProps } from "@/data";
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
import { NextSeo } from "next-seo";
import { FC } from "react";

const Projects: NextPage = () => {
  return (
    <>
      <NextSeo title="Projects" />
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
    </>
  );
};

export default Projects;

interface ProjectItemProps {
  project: ProjectsProps;
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  const theme = useTheme();

  return (
    <Stack as="li" spacing={4}>
      <Heading size="lg" color="gray.200">
        {project.year}
      </Heading>
      <Link
        pos="relative"
        href={project.link}
        isExternal
        rounded="lg"
        _hover={{}}
      >
        <Image
          src={project.banner}
          objectFit="cover"
          objectPosition="top"
          width="600px"
          height="350px"
          rounded="lg"
          boxShadow={`0 25px 100px -5px ${theme.colors.primary[500]}50`}
          transition="all 0.25s ease"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: `0 25px 100px -5px ${theme.colors.primary[500]}60`,
          }}
          alt={project.name}
          placeholder="blur"
        />

        <Container
          zIndex={2}
          bottom={0}
          p={2}
          pos="absolute"
          rounded="lg"
          bgColor="glass.100"
          sx={{
            backdropFilter: "saturate(180%) blur(50px)",
          }}
        >
          <HStack spacing={8}>
            <Image
              src={project.logo}
              alt={project.name}
              width="64px"
              height="64px"
              zIndex={3}
              rounded="md"
              pos="relative"
              left={8}
              placeholder="blur"
            />
            <Heading size="lg">{project.name}</Heading>
          </HStack>
        </Container>
      </Link>
    </Stack>
  );
};
