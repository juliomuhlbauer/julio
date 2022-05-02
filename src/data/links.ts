import { RDFIcon, TwinsterIcon } from "@/theme/icons";
import { FC } from "react";

export interface LinkProps {
  name: string;
  link: string;
  icon: FC;
  bg: string;
}

export const links: LinkProps[] = [
  {
    name: "Twinster",
    link: "https://twinster.app",
    icon: TwinsterIcon,
    bg: "#1C2732",
  },
  {
    name: "A Rede do Futuro",
    link: "https://arededofuturo.com.br/",
    icon: RDFIcon,
    bg: "#00203d",
  },
];
