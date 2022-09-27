import { Image } from "@/components/image";
import { projects, ProjectsProps } from "@/data";
import { Box, Heading, HStack, Link, Stack, WrapItem } from "@chakra-ui/layout";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { FC } from "react";

const Projects: NextPage = () => {
  return (
    <>
      <NextSeo title="Projects" />
      <Stack as="ul" align="center" spacing={16}>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </Stack>
    </>
  );
};

export default Projects;

interface ProjectItemProps {
  project: ProjectsProps;
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  return (
    <WrapItem>
      <Link pos="relative" href={project.link} isExternal rounded="lg">
        <Image
          src={project.banner}
          objectFit="cover"
          objectPosition="top"
          width="600"
          height="350"
          rounded="lg"
          alt={project.name}
          placeholder="blur"
        />

        <HStack
          spacing={4}
          p={4}
          w="100%"
          zIndex={2}
          bottom={0}
          pos="absolute"
          rounded="lg"
          bgColor="glass.100"
          sx={{
            backdropFilter: "saturate(180%) blur(50px)",
          }}
        >
          <Image
            src={project.icon}
            alt={project.name}
            width="64px"
            height="64px"
            zIndex={3}
            rounded="md"
            placeholder="blur"
          />

          <Stack
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            w="100%"
          >
            <Heading size="lg">{project.name}</Heading>

            <Heading size="lg" color="gray.400">
              {project.year}
            </Heading>
          </Stack>
        </HStack>
      </Link>
    </WrapItem>
  );
};
