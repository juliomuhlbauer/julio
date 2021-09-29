import { Center, Heading } from "@chakra-ui/layout";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

const NotFoundPage: NextPage = () => {
  return (
    <>
      <NextSeo title="404" />
      <Center as="section" h="90%">
        <Heading
          fontSize={{ base: "6xl", md: "8xl" }}
          fontWeight="black"
          textAlign="center"
          bgGradient="linear(to-r, #F23A1F, #FFE345)"
          bgClip="text"
        >
          404
        </Heading>
      </Center>
    </>
  );
};

export default NotFoundPage;
