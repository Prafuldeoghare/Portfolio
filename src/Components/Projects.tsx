import React from "react";
import styled from "styled-components";
import { Description, Title } from "./AboutMe";
import ProjectCard from "./Subcomponents/ProjectCard";

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
    <TechstackContainer>
      <Title textAlign="center">Projects</Title>
      <Description textAlign="center">Things I’ve built so far</Description>
      <Cards>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Cards>
    </TechstackContainer>
  );
}

export default Projects;
