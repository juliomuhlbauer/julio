export interface ProjectsProps {
  name: string;
  link: string;
  banner: StaticImageData;
  logo: StaticImageData;
}

import RDFBanner from "public/projects/RDF-LP.png";
import RDFLogo from "public/projects/RDF-Logo.png";

export const projects: ProjectsProps[] = [
  {
    name: "A Rede do Futuro",
    link: "https://arededofuturo.com.br/",
    banner: RDFBanner,
    logo: RDFLogo,
  },
];
