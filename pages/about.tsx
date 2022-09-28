import { Container } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import Markdoc, { RenderableTreeNode } from "@markdoc/markdoc";
import React from "react";
import * as fs from "fs";

const About = ({ content }: { content: RenderableTreeNode }) => {
  return (
    <>
      <NextSeo title="About" />

      {/* 
      TODO: export as PDF
      */}
      <Container>
        <Prose>{Markdoc.renderers.react(content, React)}</Prose>
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
