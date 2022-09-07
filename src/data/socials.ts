import { FC } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export interface SocialProps {
  name: string;
  link: string;
  icon: FC;
}

export const socials: SocialProps[] = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/juliowerner_/",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/julio_werner_",
    icon: FaTwitter,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/julio-werner/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    link: "https://github.com/julio-werner/",
    icon: FaGithub,
  },
];
