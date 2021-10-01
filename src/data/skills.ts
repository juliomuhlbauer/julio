import { BiDevices } from "react-icons/bi";
import { RiLayoutLine } from "react-icons/ri";
import { IoIosRocket } from "react-icons/io";
import { FC } from "react";

export interface SkillProps {
  title: string;
  icon: FC;
}

export const skills: SkillProps[] = [
  {
    title: "Making web products",
    icon: IoIosRocket,
  },
  {
    title: "Building web apps",
    icon: BiDevices,
  },
  {
    title: "Designing digital products",
    icon: RiLayoutLine,
  },
];
