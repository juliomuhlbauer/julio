import { skills } from "@/data";
import Icon from "@chakra-ui/icon";
import { Img } from "@chakra-ui/image";
import { Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { useTheme } from "@chakra-ui/system";
import { NextPage } from "next";
import { useState } from "react";

const About: NextPage = () => {
  const [imageLoad, setImageLoad] = useState(false);

  const theme = useTheme();

  return (
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
          <Text fontSize="lg">An indie product maker based in Brazil.</Text>
        </Stack>
        <Skeleton isLoaded={imageLoad} boxSize="300px" rounded="xl">
          <Img
            src="/julio.png"
            onLoad={() => setImageLoad(true)}
            boxSize="300px"
            fit="cover"
            rounded="xl"
            boxShadow={`0 25px 50px -10px ${theme.colors.primary[500]}50`}
            transition="all 0.2s ease-in-out"
            _hover={{
              boxShadow: `0 25px 50px -10px ${theme.colors.primary[500]}75`,
              transform: "scale(1.05)",
            }}
            alt="Júlio Werner"
          />
        </Skeleton>
      </Stack>

      <Stack as="section" spacing={8}>
        <Heading fontWeight="extrabold" color="primary.200">
          Skills
        </Heading>
        <Stack as="ul" spacing={4}>
          {skills.map((skill, index) => (
            <HStack
              as="li"
              key={index}
              spacing={4}
              p={4}
              rounded="lg"
              color="primary.200"
              bgColor="glass.50"
              backdropFilter="saturate(150%) blur(25px)"
              boxShadow={`0 2px 50px -25px ${theme.colors.primary[500]}50`}
              transition="all 0.25s ease"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: `0 2px 50px -25px ${theme.colors.primary[500]}75`,
              }}
            >
              <Icon boxSize={8} as={skill.icon} />
              <Heading size="md">{skill.title}</Heading>
            </HStack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
