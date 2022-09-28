import { StaticImageData } from "next/image";

import TwinsterBanner from "public/projects/twinster/banner.png";
import TwinsterIcon from "public/projects/twinster/icon.png";

import RDFBanner from "public/projects/rdf/banner.png";
import RDFIcon from "public/projects/rdf/icon.png";

import InboxBanner from "public/projects/inbox/banner.png";
import InboxIcon from "public/projects/inbox/icon.png";

import AnimationsBanner from "public/projects/animations/banner.png";
import AnimationsIcon from "public/projects/animations/icon.jpg";

import JWFilmesBanner from "public/projects/jw-filmes/banner.png";
import JWFilmesIcon from "public/projects/jw-filmes/icon.png";

export interface ProjectsProps {
  name: string;
  link: string;
  banner: StaticImageData;
  icon: StaticImageData;
  year: string;
}

export const projects: ProjectsProps[] = [
  {
    name: "Twinster",
    link: "https://twinster.app",
    banner: TwinsterBanner,
    icon: TwinsterIcon,
    year: "2022-now",
  },
  {
    name: "A Rede do Futuro",
    link: "https://arededofuturo.com.br/",
    banner: RDFBanner,
    icon: RDFIcon,
    year: "2020-now",
  },
  {
    name: "Inbox App",
    link: "https://myinbox.vercel.app/",
    banner: InboxBanner,
    icon: InboxIcon,
    year: "2020-now",
  },
  {
    name: "JW Filmes",
    link: "https://sites.google.com/view/jw-filmes",
    banner: AnimationsBanner,
    icon: AnimationsIcon,
    year: "2016-2020",
  },
  {
    name: "Animations",
    link: "https://www.youtube.com/channel/UCQUbPhQlz0cQG7Km1xovJDg",
    banner: JWFilmesBanner,
    icon: JWFilmesIcon,
    year: "2014-2016",
  },
];
