import { Image } from "@/components/image";
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
        <Heading size="2xl" fontWeight="extrabold" color="accent">
          Projects
        </Heading>
        <Stack as="ul" align="center" spacing={16} pb={32}>
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Projects;

interface ProjectItemProps {
  project: ProjectsProps;
  index: number;
}

const ProjectItem: FC<ProjectItemProps> = ({ project, index }) => {
  const theme = useTheme();

  const isOdd = index % 2 === 0;

  return (
    <WrapItem>
      <Link
        pos="relative"
        href={project.link}
        isExternal
        rounded="lg"
        transition="all 0.2s ease-in-out"
      >
        <Image
          src={project.banner}
          objectFit="cover"
          objectPosition="top"
          width="600px"
          height="350px"
          rounded="lg"
          transition="all 0.25s ease"
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
          <HStack justify="space-between" p={2}>
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

            <Heading size="lg" color="gray.400">
              {project.year}
            </Heading>
          </HStack>
        </Container>
      </Link>
    </WrapItem>
  );
};
