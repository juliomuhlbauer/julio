import { chakra } from "@chakra-ui/system";
import NextImage from "next/image";

export const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ["width", "height", "objectFit", "layout", "src", "alt"].includes(prop),
});
