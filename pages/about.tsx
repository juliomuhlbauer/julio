import { Container, HStack, Link, Stack, StackDivider } from "@chakra-ui/react";
import Markdoc, { RenderableTreeNode } from "@markdoc/markdoc";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import * as fs from "fs";
import { NextSeo } from "next-seo";
import React from "react";

const About = ({ content }: { content: RenderableTreeNode }) => {
  return (
    <>
      <NextSeo title="About" />

      <Container>
        <Stack spacing={8}>
          <HStack spacing={4} divider={<StackDivider />}>
            <Link
              sx={{
                "@media print": {
                  display: "none",
                },
              }}
              onClick={() => {
                window.print();
              }}
            >
              Donwload PDF
            </Link>

            <Link
              href="https://www.notion.so/juliomuhlbauer/e02c1e93431346e0b5c34ca6f11acb83"
              isExternal
            >
              Resume in Notion
            </Link>
          </HStack>

          <Prose id="resume">{Markdoc.renderers.react(content, React)}</Prose>
        </Stack>
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const about = fs.readFileSync("src/data/about.md", "utf8");
  const ast = Markdoc.parse(about);

  const content = Markdoc.transform(ast);

  return {
    props: {
      content: JSON.parse(JSON.stringify(content)),
    },
  };
};

export default About;
