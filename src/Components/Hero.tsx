import styled from "styled-components";
import Profile from "../Assets/Image.tsx/Profile";

const HeroContainer = styled.div`
  width: 85%;
  height: auto;
  margin: 0 auto;

  @media screen and (max-width: 1440px) {
    width: 85%;
  }

  @media (max-width: 425px) {
    height: 100vh;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
`;

export const Navs = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavList = styled.li`
  font-family: "DM Sans";
  font-size: 16px;
  line-height: 20px;
  color: #bdebea;
  font-weight: 500;
  font-style: normal;
  margin-right: 86px;

  @media (max-width: 768px) {
    margin-right: 45px;
  }

  @media (max-width: 425px) {
    margin-right: 30px;
    font-size: 14px;
  }
`;

export const ContactNav = styled.li`
  font-family: "DM Sans";
  font-size: 16px;
  line-height: 20px;
  color: #252728;
  font-weight: 500;
  font-style: normal;
  padding: 12px 20px 13px;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  border-radius: 6px;

  @media (max-width: 425px) {
    font-size: 14px;
    padding: 6px 18px 7px;
  }
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 64px 0px;

  @media (max-width: 768px) {
    font-size: 22px;
    margin: 10px 0px;
  }

  @media (max-width: 425px) {
    margin: -30px 0px;
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins";

  @media (max-width: 425px) {
    align-items: center;
    margin-top: -50px;
  }
`;

export const NavTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 425px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

const HeroTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #d7e5ec;
  margin-bottom: 10px;
`;

const HeroName = styled.div`
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-style: normal;
  font-weight: 600;
  font-size: 72px;
  margin-bottom: 11px;

  @media screen and (max-width: 1024px) {
    font-size: 48px;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 7px;
  }
`;

const HeroDescription = styled.div`
  width: 514px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #bdebea;
  margin-bottom: 29px;

  @media screen and (max-width: 1024px) {
    width: 400px;
  }

  @media screen and (max-width: 768px) {
    width: 312px;
    font-size: 14px;
    margin-bottom: 18px;
  }

  @media (max-width: 425px) {
    text-align: justify;
  }
`;

const Image = styled.div`
  @media screen and (max-width: 1024px) {
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    transform: scale(0.78);
  }
  @media (max-width: 425px) {
    transform: scale(0.7);
  }
`;

const HeroContact = styled.div`
  display: inline-block;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  border-radius: 6px;
  padding: 12px 20px 13px;
  width: fit-content;

  @media (max-width: 768px) {
    padding: 6px 18px 7px;
    font-size: 16px;
  }
`;

function Hero() {
  return (
    <HeroContainer>
      <NavContainer>
        <NavTitle>
          {"< "}Praful <br /> Deoghare{" >"}
        </NavTitle>
        <Navbar>
          <Navs>
            <NavList>Projects</NavList>
            <ContactNav>Contact</ContactNav>
          </Navs>
        </Navbar>
      </NavContainer>
      <Main>
        <HeroText>
          <HeroTitle>I'm Developer</HeroTitle>
          <HeroName>Praful Deoghare</HeroName>
          <HeroDescription>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt
          </HeroDescription>
          <HeroContact>Contact Me</HeroContact>
        </HeroText>
        <Image>
          <Profile />
        </Image>
      </Main>
    </HeroContainer>
  );
}

export default Hero;
