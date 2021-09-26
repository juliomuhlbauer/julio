import { ComponentSingleStyleConfig } from "@chakra-ui/react";
import { ringStyle } from "../styles";

const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    ...ringStyle,
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
