import { links } from "@/data/links";
import {
  Center,
  Heading,
  Link,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/layout";
import { HStack, Icon, IconButton, Tooltip } from "@chakra-ui/react";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Center minH="75vh">
      <Stack as="section" align="center" spacing={4}>
        <Stack align="center">
          <Heading
            fontSize={{ base: "5xl", sm: "6xl", md: "7xl" }}
            fontWeight="black"
            textAlign="center"
            bgGradient="linear(to-r, primary.500, #FFE345)"
            bgClip="text"
          >
            Júlio Werner
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
            An indie product maker.
          </Text>
        </Stack>
        <HStack>
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium">
            Working on:
          </Text>
          <HStack divider={<StackDivider />}>
            {links.map((link, index) => (
              <Tooltip key={index} label={link.name}>
                <IconButton
                  as={Link}
                  href={link.link}
                  isExternal
                  aria-label={link.name}
                  size="xl"
                  variant="ghost"
                  bgColor={link.bg}
                  icon={<Icon as={link.icon} boxSize="12" />}
                  rounded="full"
                  colorScheme="primary"
                />
              </Tooltip>
            ))}
          </HStack>
        </HStack>
      </Stack>
    </Center>
  );
};

export default HomePage;
