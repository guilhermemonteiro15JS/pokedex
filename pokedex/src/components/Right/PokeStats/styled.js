import { styled} from "styled-components";

export const PokeStatsH2 = styled.h2`
margin:0px; 
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 1175px) {
  font-size:15px;

}
@media (max-width: 875px) {
  font-size:18px;

}
`;
export const PokeStatsUl = styled.table`

`;

export const Status = styled.div`
display: flex;
width: 390px;
height: 160px;
padding: 8px;
justify-content: space-between;
flex-direction: column;
gap: 1px;
border: none;
border-radius: 4%;
position: relative;
background: #c5d6ab;
font-size: 15px;
border: 6px solid #522438;
box-shadow: inset 6px 6px rgba(0,0,0,0.2);


@media (max-width: 1175px) {
    width: 320px;
height: 120px;
font-size: 12px;
padding: 15px;
  }

  @media (max-width: 875px) {
    width: 340px;
height: 160px;
padding: 8px;
font-size: 13px;
  }

`;

export const InfoStatus = styled.tr`

`;

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%; 
  margin: 10px 0;
  margin-left: 20px;
`;
