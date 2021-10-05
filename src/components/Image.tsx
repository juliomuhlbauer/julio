import { chakra } from "@chakra-ui/system";
import NextImage from "next/image";

const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ["width", "height", "objectFit", "layout", "src", "alt"].includes(prop),
});

export default Image;
