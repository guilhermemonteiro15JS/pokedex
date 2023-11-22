import { styled} from "styled-components";

export const PokeStatsH2 = styled.h2`
margin:0px; 
display: flex;
align-items: center;
justify-content: center;
`;
export const PokeStatsUl = styled.ul`
display:flex;
flex-direction: column;
justify-content: space-between;
`;

export const Status = styled.div`
display: flex;
width: 398px;
height: 176px;
padding: 8px;
justify-content: space-between;
flex-direction: column;
gap: 5px;
border: none;
border-radius: 4%;
position: relative;
background: #FC9E4F;
font-size: 15px;
`;

export const InfoStatus = styled.div`
display:flex;
flex-direction: row; 
align-items: center;
justify-content: space-between;
gap:2px;
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%; 
  margin: 10px 0;
  margin-left: 20px;
`;
