import styled from "styled-components";
import Perguntas from "./deck";
import Pergunta from "./Pergunta";
import Logo from "./Logo";
import Footer from "./Footer";
import { useState } from "react";
import Tela from "./Tela";
export default function App() {
  const [telaInicial, setTelaInicial] = useState(true);
  const [contador, setContador] = useState(0);
  //console.log(Perguntas)

  if (telaInicial === true) {
    return (
      <ScreenContainer>
        <Tela setTelaInicial={setTelaInicial} />
      </ScreenContainer>
    );
  }

  if (telaInicial === false) {
    return (
      <ScreenContainer>
        <Logo />
        {Perguntas.map((pergunta) => {
          const { id, Q, R } = pergunta;
          return <Pergunta key={id} id={id} perguntas={Q} respostas={R} contador ={contador} setContador={setContador} />;
        })}
        <Footer contador = {contador}/>
      </ScreenContainer>
    );
  }
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