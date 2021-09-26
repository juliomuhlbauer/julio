import {
  mode,
  Styles,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

export const globalStyles: Styles = {
  global: (props) => ({
    "*": {
      boxSizing: "border-box",
    },
    html: {
      h: "100%",
      w: "100%",
      scrollBehavior: "smooth",
      WebkitTapHighlightColor: "transparent",
    },
    body: {
      h: "100%",
      w: "100%",
      position: "fixed",
      bg: mode("gray.100", "gray.900")(props),
      color: mode("gray.700", "gray.200")(props),
    },
    "#__next": {
      h: "100%",
      w: "100%",
    },
    _selection: {
      color: "white",
      background: "primary.500",
    },
    ...scrollbar(props),
    ...nProgress,
  }),
};

const scrollbar: SystemStyleFunction = (props) => ({
  "@media (pointer: fine)": {
    "::-webkit-scrollbar": {
      w: "5px",
      h: "5px ",
    },
    "::-webkit-scrollbar-thumb": {
      rounded: "5px",
      bgColor: mode("gray.400", "gray.700")(props),
    },
    "::-webkit-scrollbar-thumb:hover": {
      bg: mode("primary.500", "primary.400")(props),
    },
    "::-webkit-scrollbar-corner": {
      bg: "transparent",
    },
  },
});

const nProgress: SystemStyleObject = {
  "#nprogress": {
    pointerEvents: "none",
  },
  "#nprogress .bar": {
    bg: "primary.200",
    position: "fixed",
    zIndex: "2000",
    top: 0,
    left: 0,
    w: "100%",
    h: "1px",
  },
};
