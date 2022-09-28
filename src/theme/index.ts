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

const primary = {
  "50": "#ea721c",
  "100": "#ea721c",
  "200": "#E96B10",
  "300": "#E96B10",
  "400": "#E96B10",
  "500": "#E96B10",
  "600": "#ab4f0c",
  "700": "#ab4f0c",
  "800": "#ab4f0c",
  "900": "#ab4f0c",
};

const glass = {
  50: "#ff3d2405",
  100: "#ff3d2410",
  700: "#ff3d2470",
};

export const colors = {
  primary,
  glass,
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
