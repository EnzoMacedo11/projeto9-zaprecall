import styled from "styled-components";
import virar from "./img/seta_virar.png"

export default function PerguntaAberta(props) {
  const {perguntas} = props
  console.log(perguntas,"perguntas lista")
  return (
      <>{perguntas.map((perg)=> 
      <CardPerguntaAberta key={perg.id} pergunta={perg}>
        {perg.Q}
        <img src={virar}/>
      </CardPerguntaAberta>)}</>
       
    
  );
}


const CardPerguntaAberta = styled.div`
.pergunta-aberta {
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.pergunta-aberta > img{
  position: absolute;
  bottom: 10px;
  right: 10px;
}
 ; `