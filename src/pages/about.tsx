import { Image } from "@/components/image";
import { projects, skills } from "@/data";
import Icon from "@chakra-ui/icon";
import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/system";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Profile from "public/julio.jpg";
import { GetServerSideProps } from "next";

const About: NextPage = () => {
  const theme = useTheme();

  return (
    <>
      <NextSeo title="About" />
      <Stack spacing={8} pb={32}>
        <Stack
          as="section"
          align="center"
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          spacing={8}
        >
          <Stack maxW="sm">
            <Heading fontWeight="extrabold" color="primary.200">
              {"Hi, I'm Júlio"}
            </Heading>
            <Text fontSize="lg">An indie product maker from Brazil.</Text>
          </Stack>
          <Box
            boxShadow={`0 25px 50px -10px ${theme.colors.primary[500]}50`}
            transition="all 0.2s ease-in-out"
            _hover={{
              boxShadow: `0 25px 50px -10px ${theme.colors.primary[500]}75`,
            }}
            rounded="xl"
            boxSize="300px"
          >
            <Image
              src={Profile}
              placeholder="blur"
              width="300px"
              height="300px"
              layout="responsive"
              objectFit="contain"
              rounded="xl"
              transition="all 0.2s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
              alt="Júlio Werner"
            />
          </Box>
        </Stack>

        <Stack as="section" spacing={8}>
          <Heading fontWeight="extrabold" color="primary.200">
            Experience
          </Heading>
          <Stack as="ul" spacing={4}>
            {projects.map((project, index) => (
              <LinkBox key={index}>
                <HStack
                  as="li"
                  spacing={4}
                  p={4}
                  rounded="lg"
                  color="primary.200"
                  bgColor="glass.100"
                  backdropFilter="saturate(150%) blur(25px)"
                  // boxShadow={`0 2px 50px -25px ${theme.colors.primary[500]}50`}
                  transition="all 0.25s ease"
                  _hover={{
                    transform: "scale(1.05)",
                    // boxShadow: `0 2px 50px -25px ${theme.colors.primary[500]}75`,
                  }}
                >
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width="48px"
                    height="48px"
                    zIndex={3}
                    rounded="md"
                    pos="relative"
                    left={8}
                    placeholder="blur"
                  />
                  <LinkOverlay href={project.link} isExternal>
                    <Heading size="md">{project.name}</Heading>
                  </LinkOverlay>
                </HStack>
              </LinkBox>
            ))}
          </Stack>
        </Stack>

        <Stack as="section" spacing={8}>
          <Heading fontWeight="extrabold" color="primary.200">
            Experience
          </Heading>
          <Stack as="ul" spacing={4}>
            {projects.map((project, index) => (
              <LinkBox key={index}>
                <HStack
                  as="li"
                  spacing={4}
                  p={4}
                  rounded="lg"
                  color="primary.200"
                  bgColor="glass.100"
                  backdropFilter="saturate(150%) blur(25px)"
                  // boxShadow={`0 2px 50px -25px ${theme.colors.primary[500]}50`}
                  transition="all 0.25s ease"
                  _hover={{
                    transform: "scale(1.05)",
                    // boxShadow: `0 2px 50px -25px ${theme.colors.primary[500]}75`,
                  }}
                >
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width="48px"
                    height="48px"
                    zIndex={3}
                    rounded="md"
                    pos="relative"
                    left={8}
                    placeholder="blur"
                  />
                  <LinkOverlay href={project.link} isExternal>
                    <Heading size="md">{project.name}</Heading>
                  </LinkOverlay>
                </HStack>
              </LinkBox>
            ))}
          </Stack>
        </Stack>

        {/* <Stack as="section" spacing={8}>
          <Heading fontWeight="extrabold" color="primary.200">
            Skills
          </Heading>
          <Stack as="ul" spacing={4}>
            {skills.map((skill, index) => (
              <HStack
                key={index}
                as="li"
                spacing={4}
                p={4}
                rounded="lg"
                color="primary.200"
                bgColor="glass.100"
                backdropFilter="saturate(150%) blur(25px)"
                // boxShadow={`0 2px 50px -25px ${theme.colors.primary[500]}50`}
                transition="all 0.25s ease"
                _hover={{
                  transform: "scale(1.05)",
                  // boxShadow: `0 2px 50px -25px ${theme.colors.primary[500]}75`,
                }}
              >
                <Icon boxSize={8} as={skill.icon} />
                <Heading size="md">{skill.title}</Heading>
              </HStack>
            ))}
          </Stack>
        </Stack> */}
      </Stack>
    </>
  );
};

export default About;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination:
        "https://juliomuhlbauer.notion.site/e02c1e93431346e0b5c34ca6f11acb83",
      permanent: false,
    },
  };
};
