import { Container, Heading } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

const AboutContent = () => {
  return (
    <>
      <ul>
        <li>Hi, I’m 19 years old</li>
        <li>I love health and technology</li>
        <li>Full stack dev and health generalist</li>
        <li>São Paulo, Brazil</li>
      </ul>

      <h3 id="experience">Experience</h3>
      <ul>
        <li>
          Twinster (2022)
          <ul>
            <li>
              App: <a href="https://twinster.app/">https://twinster.app</a>
            </li>
            <li>
              SaaS of automated conversion of tweets and threads to post on
              other social medias
            </li>
            <li>Role: founder</li>
          </ul>
        </li>
        <li>
          A Rede do Futuro (2020-today)
          <ul>
            <li>
              Site:{" "}
              <a href="https://arededofuturo.com.br/">
                https://arededofuturo.com.br/
              </a>
            </li>
            <li>EdTech de Copywriting</li>
            <li>Role: designer and developer</li>
          </ul>
        </li>
        <li>
          Freelancer designer (2016-2020)
          <ul>
            <li>
              JW Filmes:{" "}
              <a href="https://sites.google.com/view/jw-filmes">
                https://sites.google.com/view/jw-filmes
              </a>
            </li>
          </ul>
        </li>
        <li>
          Animations (2014-2016)
          <ul>
            <li>
              YouTube:{" "}
              <a href="https://www.youtube.com/channel/UCQUbPhQlz0cQG7Km1xovJDg">
                https://www.youtube.com/channel/UCQUbPhQlz0cQG7Km1xovJDg
              </a>
            </li>
            <li>3D intro animations channel</li>
          </ul>
        </li>
      </ul>
      <h3 id="volunteer">Volunteer</h3>
      <ul>
        <li>
          Complexo Multidimensional Mundo Pleno (Jul/2022)
          <ul>
            <li>This was an ecological project in São José dos Campos</li>
            <li>
              Our experience there:
              <ul>
                <li>Designed and built an vegetable garden</li>
                <li>Painted an entire shed</li>
                <li>Cleaned and remove the fences from the road</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <h3 id="studies">Studies</h3>
      <ul>
        <li>
          Business Administration - Instituto Mauá de Tecnologia (2021-2022)
        </li>
      </ul>
      <h3 id="skills">Skills</h3>
      <ul>
        <li>
          Programming
          <ul>
            <li>Languages: medium Typescript and Javascript</li>
            <li>Fontend: great Nextjs and React</li>
            <li>Backend: medium Node</li>
            <li>Styling: great Chakra-UI and CSS</li>
          </ul>
        </li>
        <li>
          Design
          <ul>
            <li>Figma</li>
            <li>Almost all Adobe softwares</li>
          </ul>
        </li>
      </ul>
      <h3 id="my-life">My life</h3>
      <ul>
        <li>I am chasing my dream to build a small farm with my girlfriend</li>
        <li>In my free time I like to run, do calisthenics, cook and read</li>
        <li>
          For taking a break from work, I like to travel around Brazil,
          specially on places that have nature and new experiences such as with
          Worldpackers
        </li>
        <li>I am interested in neuroscience, technologies and nutrition</li>
        <li>
          My favorite books are Essentialism, Almanack of Naval Ravikant and The
          Power of the Now
        </li>
      </ul>
    </>
  );
};

const About = () => {
  return (
    <>
      <NextSeo title="About" />
      <Container>
        <Prose>
          <AboutContent />
        </Prose>
      </Container>
    </>
  );
};

export default About;
