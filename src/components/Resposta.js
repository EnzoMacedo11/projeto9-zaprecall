import styled from "styled-components";

export default function Resposta(props) {
  const {perguntas} = props
  console.log(perguntas,"perguntas lista")
  return (
      <>{perguntas.map((perg)=> 
      <CardPerguntaAberta key={perg.id} pergunta={perg}>
        {perg.R}
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
`