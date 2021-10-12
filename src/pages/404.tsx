import { Center, Heading, Link } from "@chakra-ui/layout";
import { Button, Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

const NotFoundPage: NextPage = () => {
  return (
    <>
      <NextSeo title="404" />
      <Center as="section" minH="60vh">
        <Stack spacing={4}>
          <Heading
            fontSize={{ base: "6xl", md: "8xl" }}
            fontWeight="black"
            textAlign="center"
            bgGradient="linear(to-r, #F23A1F, #FFE345)"
            bgClip="text"
          >
            404
          </Heading>
          <NextLink href="/" passHref>
            <Button
              as={Link}
              size="lg"
              color="gray.800"
              fontSize="xl"
              fontWeight="black"
              bgGradient="linear(to-r, #F23A1F, #FFE345)"
              _hover={{
                bg: "linear(to-r, #F23A1F, #FFE345)",
              }}
              _active={{
                bg: "linear(to-r, #F23A1F, #FFE345)",
              }}
            >
              Home
            </Button>
          </NextLink>
        </Stack>
      </Center>
    </>
  );
};

export default NotFoundPage;
