import {
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
      scrollBehavior: "smooth",
      WebkitTapHighlightColor: "transparent",
    },
    body: {
      bg: "bg",
      color: "default",
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
      bgColor: "glass.700",
    },
    "::-webkit-scrollbar-thumb:hover": {
      bg: "primary.400",
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
