import { FC } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { IoRocketSharp } from "react-icons/io5";

export interface PageProps {
  href: string;
  label: string;
  icon: FC;
}

export const pages: PageProps[] = [
  {
    href: "/",
    label: "Home",
    icon: AiFillHome,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: IoRocketSharp,
  },
  {
    href: "/about",
    label: "About",
    icon: BsFillPersonFill,
  },
  // {
  //   href: "/contact",
  //   label: "Contact",
  // },
];
