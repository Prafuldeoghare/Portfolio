import styled from "styled-components";
import Css from "../Assets/Logo/Technologies/Css";
import Git from "../Assets/Logo/Technologies/Git";
import Github from "../Assets/Logo/Technologies/Github";
import Html from "../Assets/Logo/Technologies/Html";
import Js from "../Assets/Logo/Technologies/Js";
import Mui from "../Assets/Logo/Technologies/Mui";
import ReactIcon from "../Assets/Logo/Technologies/ReactIcon";
import Redux from "../Assets/Logo/Technologies/Redux";
import StyledComponents from "../Assets/Logo/Technologies/StyledComponents";
import Tailwind from "../Assets/Logo/Technologies/Tailwind";
import VisualStudio from "../Assets/Logo/Technologies/VisualStudio";
import { Description, Title } from "./AboutMe";

const TechstackContainer = styled.div`
  width: 85%;
  height: auto;
  margin: 0 auto;
  margin-top: 70px;
`;

const TechDisplayContainer = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 60px;
  @media (max-width: 1163px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 50px;
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
`;

const TechDisplay = styled.div`
  display: "flex";
  text-align: center;
  margin: 10px;
  transition: scale 0.3s;

  &:hover {
    scale: 1.4;
  }

  @media (max-width: 1440px) {
    margin: 15px;
  }

  @media (min-width: 1940px) {
    margin: 10px;
  }

  @media (max-width: 425px) {
    scale: 0.8;

    &:hover {
      scale: 1;
    }
  }
`;

const Description2 = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.04em;
  color: #bdebea;
`;

function Techstack() {
  return (
    <TechstackContainer>
      <Title>Techstack</Title>
      <Description>Technologies I’ve been working with recently</Description>
      <TechDisplayContainer>
        <TechDisplay>
          <Html />
          <Description2>HTML</Description2>
        </TechDisplay>
        <TechDisplay>
          <Css />
          <Description2>CSS</Description2>
        </TechDisplay>
        <TechDisplay>
          <Js />
          <Description2>Javascript</Description2>
        </TechDisplay>
        <TechDisplay>
          <ReactIcon />
          <Description2>React</Description2>
        </TechDisplay>
        <TechDisplay>
          <Redux />
          <Description2>Redux</Description2>
        </TechDisplay>
        <TechDisplay>
          <Tailwind />
          <Description2>Tailwind</Description2>
        </TechDisplay>
        <TechDisplay>
          <Mui />
          <Description2>Material UI</Description2>
        </TechDisplay>
        <TechDisplay>
          <Git />
          <Description2>Git</Description2>
        </TechDisplay>
        <TechDisplay>
          <Github />
          <Description2>GitHub</Description2>
        </TechDisplay>
        <TechDisplay>
          <VisualStudio />
          <Description2>Visual Studio Code</Description2>
        </TechDisplay>
        <TechDisplay>
          <StyledComponents />
          <Description2>Styled Components</Description2>
        </TechDisplay>
      </TechDisplayContainer>
    </TechstackContainer>
  );
}

export default Techstack;
