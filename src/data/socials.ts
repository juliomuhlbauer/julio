import { FC } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaProductHunt,
} from "react-icons/fa";

export interface SocialProps {
  name: string;
  link: string;
  icon: FC;
}

export const socials: SocialProps[] = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/juliowernermm/",
    icon: FaInstagram,
  },
  {
    name: "GitHub",
    link: "https://github.com/julio-werner/",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/julio-werner/",
    icon: FaLinkedin,
  },
  {
    name: "Product Hunt",
    link: "https://www.producthunt.com/@juliowerner",
    icon: FaProductHunt,
  },
];
