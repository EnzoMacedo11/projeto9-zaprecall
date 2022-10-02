import { useState } from "react";
import styled from "styled-components";
import play from "./img/seta_play.png";
import virar from "./img/seta_virar.png";
import certo from "./img/icone_certo.png";
import errado from "./img/icone_erro.png";
import quase from "./img/icone_quase.png";

let contador = 0;
export default function Pergunta(props) {
  const [pergInicial, setPergInicial] = useState(true);
  const [resposta, setResposta] = useState(false);
  const [cor, setCor] = useState("#333333");
  const [style, setStyle] = useState("");
  const [icon, setIcon] = useState(play);
  const { perguntas } = props;
  //console.log(perguntas, "perguntas lista");
  //console.log(props, "pergid");
  //console.log(pergInicial, "pergi");
  //console.log(resposta, "reposta");
  //console.log(contador);
  console.log(cor);
  console.log(style);

  function virarCarta() {
    setPergInicial(false);
  }
  function mostrarResposta() {
    setResposta(true);
  }
  function mostrarPergunta() {
    contador++;
    setPergInicial(true);
    setResposta(false);
  }

  function vermelha() {
    setCor("#FF3030");
    setStyle("line-through");
    setIcon(errado);
  }
  function verde() {
    setCor("#2FBE34");
    setStyle("line-through");
    setIcon(certo);
  }
  function amarela() {
    setCor("#FF922E");
    setStyle("line-through");
    setIcon(quase);
  }

  if (pergInicial === true)
    return (
      <>
        {perguntas.map((perg) => (
          <CardPergunta
            onClick={() => virarCarta(perg.id)}
            key={perg.id}
            pergunta={perg}
            style={{ color: `${cor}`, textDecoration: `${style}` }}
          >
            <p>Pergunta {perg.id}</p>
            <img src={icon} />
          </CardPergunta>
        ))}
      </>
    );
  if (resposta === true) {
    return (
      <>
        {perguntas.map((perg) => (
          <CardPerguntaAberta key={perg.id} pergunta={perg}>
            {perg.R}
            <ContainerBotao>
              <BotaoVermelho onClick={() => mostrarPergunta(vermelha(perg.id))}>
                Não Lembrei
              </BotaoVermelho>
              <BotaoAmarelo onClick={() => mostrarPergunta(amarela(perg.id))}>
                Quase Não Lembrei
              </BotaoAmarelo>
              <BotaoVerde onClick={() => mostrarPergunta(verde(perg.id))}>
                Zap!
              </BotaoVerde>
            </ContainerBotao>
          </CardPerguntaAberta>
        ))}
      </>
    );
  }
  if (pergInicial === false) {
    return (
      <>
        {perguntas.map((perg) => (
          <CardPerguntaAberta
            key={perg.id}
            pergunta={perg}
            onClick={() => mostrarResposta(perg.id)}
          >
            {perg.Q}
            <img src={virar} />
          </CardPerguntaAberta>
        ))}
      </>
    );
  }
}

const CardPergunta = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
`;

const CardPerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const ContainerBotao = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
`;

const BotaoVerde = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: #2fbe34;
  border-radius: 5px;

  padding: 5px;
`;
const BotaoVermelho = styled.button`
  width: 90px;
  margin-right: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: #ff3030;
  border-radius: 5px;

  padding: 5px;
`;
const BotaoAmarelo = styled.button`
  width: 90px;
  margin-right: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: #ff922e;
  border-radius: 5px;

  padding: 5px;
`;
