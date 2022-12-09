import React from "react";
import styled from "styled-components";
import DarkGit from "../Assets/Logo/DarkGit";
import Name from "../Assets/Logo/Name";
import Github from "../Assets/Logo/SocialMedias/github";
import Linkedin from "../Assets/Logo/SocialMedias/Linkedin";
import Twitter from "../Assets/Logo/SocialMedias/Twitter";
import { Navs, NavList, NavTitle } from "./Hero";

const FooterContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 150px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 425px) {
    font-size: 20px;
    line-height: 21px;
  }
`;

const FooterTitle = styled(NavTitle)`
  width: 100%;
  text-align: left;
`;

const FooterMenu = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  flex-direction: column;
  align-items: flex-start;
`;

const Phone = styled.a`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #d9f2f2;
  margin-right: 33px;
`;

const Email = styled(Phone)`
  margin-right: -10px;

  @media screen and (max-width: 1024px) {
    margin-top: 8px;
  }
`;

const List = styled.li`
  font-family: "DM Sans";
  font-size: 16px;
  line-height: 20px;
  color: #bdebea;
  font-weight: 500;
  font-style: normal;
  margin-right: 20px;

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterTitle>
        {"<"}Praful <br />
        Deoghare{">"}
      </FooterTitle>
      <FooterMenu>
        <Phone>+91 9890779859</Phone>
        <Email>prafuldeoghare@gmail.com</Email>
        <div
          style={{
            listStyleType: "none",
            display: "flex",
            alignItems: "center",
            margin: "20px 0px",
          }}
        >
          {[<Twitter />, <Linkedin />]?.map((res) => {
            return <List isSecondaryNav={true}>{res}</List>;
          })}
        </div>
      </FooterMenu>
    </FooterContainer>
  );
}

export default Footer;
