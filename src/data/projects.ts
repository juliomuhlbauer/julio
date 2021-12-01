export interface ProjectsProps {
  name: string;
  link: string;
  banner: StaticImageData;
  logo: StaticImageData;
  year: string;
}

import RDFBanner from "public/projects/RDF-LP.png";
import RDFLogo from "public/projects/RDF-logo.png";

import AnimationsBanner from "public/projects/animations-banner.png";
import AnimationsLogo from "public/projects/animations-logo.jpg";

import InboxIcon from "public/projects/inbox-icon.png";
import InboxBanner from "public/projects/inbox-banner.png";

export const projects: ProjectsProps[] = [
  {
    name: "A Rede do Futuro",
    link: "https://arededofuturo.com.br/",
    banner: RDFBanner,
    logo: RDFLogo,
    year: "2020-now",
  },
  {
    name: "Inbox App",
    link: "https://myinbox.vercel.app/",
    banner: InboxBanner,
    logo: InboxIcon,
    year: "2020-now",
  },
  {
    name: "Animations",
    link: "https://www.youtube.com/channel/UCQUbPhQlz0cQG7Km1xovJDg",
    banner: AnimationsBanner,
    logo: AnimationsLogo,
    year: "2014-2015",
  },
];
