import { ComponentSingleStyleConfig } from "@chakra-ui/react";
import { pointerCursor } from "../styles";

const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    ...pointerCursor,
  },
  sizes: {
    xl: {
      h: 14,
      minW: 14,
      fontSize: "xl",
      px: 8,
    },
  },
};

export default Button;
