import { Stack } from "@chakra-ui/react";
import NextLink from "next/link";

const Blog = () => {
  return (
    <Stack>
      <NextLink href="/blog/livros">Livros</NextLink>
    </Stack>
  );
};

export default Blog;
