import { Center, Heading } from "@chakra-ui/layout";
import { NextPage } from "next";

const NotFoundPage: NextPage = () => {
  return (
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
  );
};

export default NotFoundPage;
