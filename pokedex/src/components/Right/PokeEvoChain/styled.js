import styled from "styled-components";

export const PokeTypeH2 = styled.h2`
margin:0px; 
display: flex;
align-items: center;
justify-content: center;
`;



// Defina os estilos para o componente Right
export const InfoContainer = styled.div`
  // Adicione estilos conforme necessário
  display: flex;
width: 398px;
height: 176px;
padding: 8px;
justify-content: center;
flex-direction: column;
gap: 0px;
border: none;
border-radius: 4%;
position: relative;
background: #FC9E4F;
`;

export const EvolutionContainer = styled.div`
  // Adicione estilos conforme necessário
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;

export const EvolutionImage = styled.img`
  // Adicione estilos conforme necessário
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;
