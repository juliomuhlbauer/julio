import { chakra } from "@chakra-ui/system";
import NextImage, { ImageProps } from "next/image";

const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "placeholder"].includes(prop),
});

export default Image;
