import styled from "styled-components";
import { Description, Title } from "./AboutMe";
import ProjectCard from "./Subcomponents/ProjectCard";
import alphaEngineerImg from "../Assets/Image.tsx/alphaEngineer.png";
import portfolioImg from "../Assets/Image.tsx/portfolio.png";
import tictactoeimg from "../Assets/Image.tsx/tictactoe.png";
import ecommerceImg from "../Assets/Image.tsx/ecommerce.png";

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
          isComplete={true}
        />
        <ProjectCard
          img={portfolioImg}
          title={"Portfolio"}
          teches={["React", "styled-components", "Typescript"]}
          description={
            "An online representation of work as well as skills and experiences with the technologies like react js , typescript and react-specific CSS-in-JS styled-components, "
          }
          preview={"https://praful-deoghare-portfolio.netlify.app/"}
          code={"https://github.com/Prafuldeoghare/Portfolio"}
          isComplete={true}
        />
        <ProjectCard
          img={tictactoeimg}
          title={"Tic Tac Toe"}
          teches={["React"]}
          description={"A simple Tic Tac Toe Game using react js"}
          preview={"https://tic-tac-toe-pd.netlify.app/"}
          code={"https://github.com/Prafuldeoghare/Tic-Tac-Toe"}
          isComplete={true}
        />
        <ProjectCard
          img={ecommerceImg}
          title={"E Commerce"}
          teches={["React", "Tailwind CSS", "React Redux"]}
          description={
            "A website that allows people to buy and sell physical goods, services, and digital products over the internet using react js"
          }
          preview={"https://e-commerce-pd.netlify.app/"}
          code={"https://github.com/Prafuldeoghare/E-commerce"}
          isComplete={false}
        />
      </Cards>
    </TechstackContainer>
  );
}

export default Projects;
