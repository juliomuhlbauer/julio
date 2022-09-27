import { FC } from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

export interface SocialProps {
  name: string;
  link: string;
  icon: FC;
}

export const socials: SocialProps[] = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/juliomuhlbauer/",
    icon: FiInstagram,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/juliomuhlbauer",
    icon: FiTwitter,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/juliomuhlbauer",
    icon: FiLinkedin,
  },
  {
    name: "GitHub",
    link: "https://github.com/juliomuhlbauer",
    icon: FiGithub,
  },
];
