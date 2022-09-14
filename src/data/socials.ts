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
    link: "https://www.instagram.com/juliomuhlbauer/",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/juliomuhlbauer",
    icon: FaTwitter,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/juliomuhlbauer",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    link: "https://github.com/juliomuhlbauer",
    icon: FaGithub,
  },
];
