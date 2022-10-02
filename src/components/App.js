import styled from "styled-components";
import Perguntas from "./deck";
import Pergunta from "./Pergunta";
import Logo from "./Logo";
import Footer from "./Footer";

export default function App() {
  //console.log(Perguntas)
 

  return (
    <ScreenContainer>
      <Logo />
      <Pergunta perguntas={Perguntas} />
      <Footer />
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
