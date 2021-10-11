import { chakra, HTMLChakraProps } from "@chakra-ui/react";
import { HTMLMotionProps, motion } from "framer-motion";
import { FC } from "react";

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

export const Motion: FC<MotionProps> = motion(chakra.div);
