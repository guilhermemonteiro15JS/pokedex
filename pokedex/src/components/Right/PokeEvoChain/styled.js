import styled from "styled-components";

export const PokeTypeH2 = styled.h2`
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
  font-size:15px;

}
@media (max-width: 768px) {
  font-size:18px;

}
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 390px;
  height: 150px;
  padding: 8px;
  justify-content: center;
  flex-direction: column;
  gap: 0px;
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
font-size: 13px;
  }

`;

export const EvolutionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 1024px) {
    margin-top: 1px;

}
`;

export const EvolutionImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;
