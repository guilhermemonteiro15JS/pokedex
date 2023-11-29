import styled from "styled-components";


export const PokeDetailsDiv = styled.div`
display: flex;
width: 390px;
height: 150px;
padding: 10px;
justify-content: center;
align-items: center;
flex-direction: column;
border: none;
border-radius: 4%;
position: relative;
background: #c5d6ab;
border: 6px solid #522438;
box-shadow: inset 6px 6px rgba(0,0,0,0.2);

@media (max-width: 1024px) {
    width: 320px;
height: 120px;
  }
  @media (max-width: 768px) {
    width: 390px;
height: 160px;
  }

`;
