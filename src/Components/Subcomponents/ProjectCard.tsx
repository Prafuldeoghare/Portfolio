import styled from "styled-components";
import Chain from "../../Assets/Logo/Chain";
import DarkGit from "../../Assets/Logo/DarkGit";

const CardContainer = styled.div`
  width: 522px;
  height: auto;
  border-radius: 6px;
  background: #222525;

  @media (max-width: 425px) {
    width: 400px;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
`;
const DescriptionContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 27px 28px;
  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
`;

const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 26px;
  color: #d9f2f2;

  @media screen and (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

const Description = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  color: #d9f2f2;
  margin-top: 17px;
  word-wrap: break-word;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
    line-height: 21px;
    width: 90%;
    text-align: justify;
  }
`;

const Teches = styled.div`
  display: flex;
  gap: 10px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: left;
  color: #42446e;
  height: auto;
  margin-top: 12px;
`;

const Tech = styled.span`
  font-family: "Poppins";
  display: inline-block;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  border-radius: 6px;
  font-weight: 400;
  padding: 5px 10px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
    line-height: 21px;
  }
`;

const Sources = styled.span`
  margin-top: 21px;
  display: flex;
`;

const Source = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 48px;
`;

const SourceTitle = styled.a`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  margin-left: 10px;
  font-size: 16px;
  line-height: 26px;
  text-decoration: underline;
  color: #d9f2f2;

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

function ProjectCard() {
  return (
    <CardContainer>
      <ImageContainer>
        <img src="" />
      </ImageContainer>
      <DescriptionContainer>
        <Title>Project Tile goes here</Title>
        <Teches>
          <Tech>HTML</Tech> <Tech>JavaScript</Tech> <Tech>SASS</Tech>
          <Tech>React</Tech>
        </Teches>
        <Description>
          This is sample project description random things are here in
          description This is sample project lorem ipsum generator for dummy
          content
        </Description>
        <Sources>
          <Source>
            <Chain />
            <SourceTitle>Live Preview</SourceTitle>
          </Source>
          <Source>
            <DarkGit />
            <SourceTitle>View Code</SourceTitle>
          </Source>
        </Sources>
      </DescriptionContainer>
    </CardContainer>
  );
}

export default ProjectCard;
