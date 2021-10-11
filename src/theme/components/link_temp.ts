import { ComponentSingleStyleConfig } from "@chakra-ui/react";
import { ringStyle } from "../styles";
import { pointerCursor } from "../styles";

const Link: ComponentSingleStyleConfig = {
  baseStyle: {
    ...ringStyle,
    ...pointerCursor,
  },
};

export default Link;
