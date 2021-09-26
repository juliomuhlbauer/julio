import { skills } from "@/data";
import Icon from "@chakra-ui/icon";
import { Img } from "@chakra-ui/image";
import { Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import { useTheme } from "@chakra-ui/system";

const About = () => {
  const theme = useTheme();

  return (
    <Stack spacing={8} pb={32}>
      <Stack
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

        <Img
          w="100%"
          maxW="300px"
          rounded="lg"
          objectFit="contain"
          src="/julio.webp"
          alt="Júlio Werner"
          boxShadow={`0 25px 50px -10px ${theme.colors.primary[500]}50`}
        />
      </Stack>
      <Stack spacing={8}>
        <Heading fontWeight="extrabold" color="primary.200">
          Skills
        </Heading>
        <Stack spacing={4}>
          {skills.map((skill, index) => (
            <HStack
              key={index}
              color="primary.200"
              spacing={4}
              bgColor="glass.50"
              p={4}
              rounded="lg"
              sx={{
                backdropFilter: "saturate(150%) blur(25px)",
              }}
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
