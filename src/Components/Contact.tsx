import styled from "styled-components";

const ContactContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: auto;
  overflow-x: hidden;
  padding-top: 150px;
  display: block;
  text-align: center;
  padding: 150px 0px;
`;

const Query = styled.div`
  text-align: center;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 9px;

  @media screen and (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 425px) {
    font-size: 20px;
    line-height: 21px;
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <Query>For any questions please mail us:</Query>
      <Query>prafuldeoghare@gmail.com</Query>
    </ContactContainer>
  );
}

export default Contact;
