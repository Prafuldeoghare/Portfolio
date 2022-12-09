import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Listview from "./Subcomponents/Listview";

const AboutMeContainer = styled.div`
  height: auto;
  width: 85%;
  margin: 0 auto;
  overflow-x: hidden;
  position: relative;
  padding: 50px 0px;

  @media screen and (max-width: 1024px) {
    padding: 40px 0px;
  }

  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const AboutMeWrapper = styled.div`
  width: 60%;
  display: block;
  @media screen and (max-width: 1024px) {
    width: 82%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 425px) {
    width: 100%;
    text-align: left;
  }
`;

const Wrapper = styled.div`
  width: 60%;
  display: block;
  margin: 60px 0px;
  @media screen and (max-width: 1024px) {
    margin: 80px 0px;
  }

  @media (max-width: 768px) {
    margin: 60px 0px;
  }
`;

export const Title = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.04em;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 30px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 425px) {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

export const Description = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.04em;
  color: #bdebea;
  border-left-width: 5px !important;
  border-left-style: solid !important;
  border-image: linear-gradient(to bottom, #00f5a0 0%, #00d9f5 100%) 1 100%;
  padding-left: 30px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding-left: 15px;
  }
`;

function AboutMe() {
  const [prop, setProps] = useState(0);
  useEffect(() => {
    const listen = window.addEventListener("resize", () => {
      setProps(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <AboutMeContainer>
      <AboutMeWrapper>
        <Title>About Me</Title>
        <Description>
          To obtain a react developer role to utilize my two years experience
          with enterprise systems, software design, and development.
          Self-motivated IT professional with knowledge and proficiency in
          React, JavaScript, HTML, CSS, and mobile responsive website
          development, as well as highly potent skills and ability in encoding
          efficient code, seeks the position of Front-end Web Developer.
        </Description>
      </AboutMeWrapper>
      <Wrapper>
        <Title>Work Experience</Title>
        <Listview
          jobTitle={"React Developer"}
          status={"Full Time"}
          officeName={"Logibricks Technologies Private Limited"}
          location={"Pune, Maharashtra"}
          date={"Oct 2021 - Present · 1 yr 2 mos"}
          description={[
            "Sell items to anyone, anywhere, using a single platform. Logibricks is integrated with the world's most popular marketplaces, shopping carts, and shipping partners, allowing you to operate effortlessly and effectively",
            "Created reuseable components while collaborating with backend team, UX Designer's and product manager",
            "Followed documentation to always remain up-to-speed on what needs to be updated in response to new release version.",
            "Assisted with bug fixing and code reviews",
          ]}
          height={prop == 425 ? "520px" : "394px"}
          width={prop}
        />
        <Listview
          jobTitle={"Junior Software Engineer"}
          status={"Full Time"}
          officeName={"Defenson Pvt. Ltd."}
          location={"Pune, Maharashtra"}
          date={"Dec 2020 - Sep 2021 · 10 mos"}
          description={[
            "Design, develop, implement and maintain custom responsive react application phases, code and software along with redux. ",
            "Created and implemented new features on company website using React, Redux.",
            "Assisted with bug fixing and code reviews",
          ]}
          height={prop == 425 ? "340px" : "270px"}
          width={prop}
        />
        <Listview
          jobTitle={"Full stack developer"}
          status={"Internship"}
          officeName={"EcoRise Software Solutions LLP"}
          location={"Pune, Maharashtra"}
          date={"Dec 2018 - Mar 2019 · 4 mos"}
          description={[
            "Sell items to anyone, anywhere, using a single platform. Logibricks is integrated with the world's most popular marketplaces, shopping carts, and shipping partners, allowing you to operate effortlessly and effectively. created reuseable components while collaborating with backend team, UX Designer's and product manager. followed documentation to always remain up-to-speed on what needs to be updated in response to new release version. assisted with bug fixing and code reviews",
          ]}
          height={prop == 425 ? "460px" : "270px"}
          width={prop}
        />
      </Wrapper>
      <Wrapper>
        <Title>Education</Title>
        <Listview
          jobTitle={"Bachelor of Engineering (E&TC)"}
          status={"Full Time"}
          officeName={"Smt Kashibai Navale College of Engineering"}
          location={"Pune"}
          date={"2016-2020"}
          description={[
            "Completed my bachelor degree in electronic and telecommunication engineering with 7.66 CGPA.",
          ]}
          height={"170px"}
          width={prop}
        />
      </Wrapper>
    </AboutMeContainer>
  );
}

export default AboutMe;
