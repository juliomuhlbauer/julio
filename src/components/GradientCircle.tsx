import { BoxProps, Circle } from "@chakra-ui/layout";
import { FC } from "react";

const GradientCircle: FC<BoxProps> = ({ animation, ...rest }) => {
  return (
    <Circle
      position="absolute"
      bgGradient="linear(to-r,  #FFE345, primary.500)"
      w={{ base: "10rem", md: "15rem" }}
      h={{ base: "10rem", md: "15rem" }}
      filter="blur(10rem)"
      sx={{
        animationName: "Gradient",
        animationDuration: "5s",
        animationTimingFunction: "ease-in-out",
        animationDirection: "alternate",
        animationIterationCount: "infinite",
        "@keyframes Gradient": {
          from: { transform: "translateY(0) translateX(0)" },
          to: { transform: "translateY(50px) translateX(50px)" },
        },
      }}
      {...rest}
    />
  );
};

export default GradientCircle;
