import { Image } from "@/components/image";
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
import { config } from "config";
import { NextPage } from "next";
import ProfileImg from "public/julio.jpg";

const HomePage: NextPage = () => {
  return (
    <Center as="section" minH="75vh">
      <Stack
        direction={{ base: "column", md: "row" }}
        w="100%"
        justify="space-between"
        align="center"
        spacing={4}
      >
        <Stack spacing={4}>
          <Heading size="4xl" fontWeight="bold" color="accent">
            {config.name}
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
            {config.description}
          </Text>
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

        <Image
          src={ProfileImg}
          placeholder="blur"
          width="400"
          height="400"
          objectFit="contain"
          rounded="xl"
          transition="all 0.2s ease-in-out"
          _hover={{
            transform: "scale(1.05)",
          }}
          alt="Júlio Mühlbauer"
          boxShadow="md"
        />
      </Stack>
    </Center>
  );
};

export default HomePage;
