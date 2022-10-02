import styled from "styled-components";
import img from "./img/logo.png"
export default function Tela(props) {
  const { setTelaInicial } = props;
  return <>
   <Main>
      <Logo src={img}></Logo>
      <Titulo>ZapRecall</Titulo>
      <Inicio onClick={() => setTelaInicial(false)}>Iniciar Recall!</Inicio>
      
    </Main>
  </>;
}

const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fb6b6b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1; ;
`;

const Logo = styled.img`
  width: 136px;
  height: 161px;
`;

const Titulo = styled.h1`
  font-size: 36px;
  font-family: "Righteous", cursive;
  font-weight: 400;
  line-height: 44.7px;
  letter-spacing: -1.2%;
  text-align: center;
  color: #ffffff;
  margin-top: 13px; ;
`;

const Inicio = styled.button`
  width: 246px;
  height: 54px;
  margin-top: 73px;
  background-color: #ffffff;
  border: solid 1px #d70900;
  border-radius: 5px;
  box-shadow: 0 4 4 0 #000000 15%;
  font-size: 18px;
  font-family: "Recursive", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 21.6px;
  text-align: center;
  color: #d70900; ;
`;
