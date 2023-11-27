import { styled } from "styled-components";

export const PokedexMini = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 50px;
`;

export const Border = styled.div`
width: 14px;
height: 580px;
position: relative;
top: 13px;
border-radius: 3px;
background: #C1132A;
`;

export const BorderTwo = styled.div`
width: 14px;
height: 400px;
position: relative;
top: 13px;
border-radius: 3px;
background: #C1132A;
`;

export const Pokedex = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image:url(${props => props.bkImage});
background-size: cover;
background-repeat: no-repeat;
height:100vh;
`;