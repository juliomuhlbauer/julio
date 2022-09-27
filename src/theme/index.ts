import { colors } from "@/theme/colors";
import { components } from "@/theme/components";
import { globalStyles } from "@/theme/styles";
import { extendTheme } from "@chakra-ui/react";
import { theme as base, ThemeConfig } from "@chakra-ui/theme";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: `IBM Plex Sans, ${base.fonts.heading}`,
  body: `IBM Plex Sans, ${base.fonts.body}`,
};

export const theme = extendTheme(
  {
    config,
    fonts,
    colors,
    semanticTokens: {
      colors: {
        accent: "#E96B10",
        bg: {
          _light: "gray.100",
          _dark: "#1F1312",
        },
        default: {
          _light: "gray.700",
          _dark: "gray.200",
        },
      },
    },
    components,
    styles: globalStyles,
    shadows: {
      outline: `0 0 0 1px ${colors.primary[200]}`,
    },
  },
  withProse()
);
