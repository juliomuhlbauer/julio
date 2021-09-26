import colors from "./colors";
import components from "./components";
import { globalStyles } from "./styles";
import { extendTheme } from "@chakra-ui/react";
import { theme as base, ThemeConfig } from "@chakra-ui/theme";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: `Inter, ${base.fonts.heading}`,
  body: `Inter, ${base.fonts.body}`,
};

const theme = extendTheme({
  config,
  fonts,
  colors,
  components,
  styles: globalStyles,
});

export default theme;
