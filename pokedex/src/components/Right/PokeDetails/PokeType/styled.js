import { styled} from "styled-components";

export const PokeTypeH2 = styled.h3`
margin-top: 0px;
margin-bottom: 5px;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 1175px) {
    font-size:15px;
  }
  @media (max-width: 875px) {
    font-size:20px;
  }

`;

export const PokeTypeUl = styled.ul`
margin: 0px;
font-size:14px;
display:flex;
flex-direction: row;
gap: 20px;
align-items:flex-start;
padding:0px;
@media (max-width: 1175px) {
    font-size:15px;
  }

  @media (max-width: 875px) {
    font-size:14px;
  }
`;

export const Table = styled.tr`
display: flex;
flex-direction: column;
align-items: center;
gap: 2px;

`;

export const StyledImage = styled.img`
width: 25px;
height: 25px;
border-radius: 50%;
`;