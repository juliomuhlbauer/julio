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
      height: "100%",
      width: "100%",
      scrollBehavior: "smooth",
      WebkitTapHighlightColor: "transparent",
    },
    body: {
      height: "100%",
      width: "100%",
      position: "fixed",
      bg: mode("gray.100", "gray.900")(props),
      color: mode("gray.700", "gray.200")(props),
      overscrollBehavior: "none",
      // userSelect: "none",
    },
    "#__next": {
      height: "100%",
      width: "100%",
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
      width: "5px",
      height: "5px ",
    },
    "::-webkit-scrollbar-thumb": {
      borderRadius: "5px",
      bgColor: mode("gray.400", "gray.700")(props),
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: mode("primary.500", "primary.400")(props),
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
    background: "primary.200",
    position: "fixed",
    zIndex: "2000",
    top: 0,
    left: 0,
    width: "100%",
    height: "1px",
  },
};
