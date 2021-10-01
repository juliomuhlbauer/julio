import { IoRocketSharp } from "react-icons/io5";
import { BiHome } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { FC } from "react";

export interface PageProps {
  href: string;
  label: string;
  icon: FC;
}

export const pages: PageProps[] = [
  {
    href: "/",
    label: "Home",
    icon: BiHome,
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
