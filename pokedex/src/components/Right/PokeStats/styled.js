import { styled} from "styled-components";

export const PokeStatsH2 = styled.h2`
margin:0px; 
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
background: #FC9E4F;
font-size: 15px;


@media (max-width: 1024px) {
    width: 320px;
height: 120px;
font-size: 12px;
padding: 15px;
  }

  @media (max-width: 768px) {
    width: 390px;
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
