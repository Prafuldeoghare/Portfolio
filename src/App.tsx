import styled from "styled-components";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Techstack from "./Components/Techstack";

const MainContainer = styled.div`
  width: 100vw;
  background: #041f31;
  margin: 0 auto;
  overflow-x: hidden;
  padding: 45px 0px;

  @media (max-width: 425px) {
    padding: 30px 0px;
  }
`;

function App() {
  return (
    <MainContainer>
      <Hero />
      <AboutMe />
      <Techstack />
      <Projects />
      <Contact />
      <Footer />
    </MainContainer>
  );
}
export default App;
