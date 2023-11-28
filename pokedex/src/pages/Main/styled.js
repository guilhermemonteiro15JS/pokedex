import { styled } from "styled-components";

export const PokedexMini = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top:50px;

@media (max-width: 768px) {
    flex-direction:column;
    margin-top:10px;
  }

`;

export const Border = styled.div`
width: 14px;
height: 580px;
position: relative;
top: 13px;
border-radius: 3px;
background: #C1132A;

@media (max-width: 1024px) {
  width: 14px;
height: 480px;
    top: 0px;
  }

@media (max-width: 768px) {
    height: 10px;
    width: 350px;
    top: 0px;
  }

`;

export const BorderTwo = styled.div`
width: 14px;
height: 400px;
position: relative;
top: 13px;
border-radius: 3px;
background: #C1132A;

@media (max-width: 1024px) {
  width: 14px;
height: 300px;
    top: 0px;
  }

@media (max-width: 768px) {
    height: 10px;
    width: 200px;
    top: 0px;
  }
`;

export const Pokedex = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image:url(${props => props.bkImage});
background-size: cover;
background-repeat: no-repeat;
height:100vh;

@media (max-width: 768px) {
    height:100%;
  }


`;