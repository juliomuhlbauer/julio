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
            color="accent"
          >
            404
          </Heading>
          <NextLink href="/" passHref>
            <Button
              as={Link}
              colorScheme="primary"
              size="lg"
              fontSize="xl"
              fontWeight="black"
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
