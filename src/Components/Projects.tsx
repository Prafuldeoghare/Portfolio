import styled from "styled-components";
import { Description, Title } from "./AboutMe";
import ProjectCard from "./Subcomponents/ProjectCard";
import alphaEngineerImg from "../Assets/Image.tsx/alphaEngineer.png";

const TechstackContainer = styled.div`
  height: auto;
  width: 85%;
  margin: 0 auto;
  overflow-x: hidden;
  position: relative;
  padding: 100px 0px;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 50px;
  height: auto;
  gap: 40px;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }
`;

function Projects() {
  return (
    <TechstackContainer id="projects">
      <Title>Projects</Title>
      <Description>Things I’ve built so far</Description>
      <Cards>
        <ProjectCard
          img={alphaEngineerImg}
          title={"Alpha Engineer"}
          teches={["React", "styled-components"]}
          description={
            "A company website of experienced organization in Product Architecture and Development, based in Pune is bulid with react js and React-specific CSS-in-JS styled components"
          }
          preview={"https://www.alphaengineerspune.com/"}
          code={""}
        />
        <ProjectCard
          img={""}
          title={""}
          teches={[]}
          description={""}
          preview={""}
          code={""}
        />
        <ProjectCard
          img={""}
          title={""}
          teches={[]}
          description={""}
          preview={""}
          code={""}
        />
      </Cards>
    </TechstackContainer>
  );
}

export default Projects;
