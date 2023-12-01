import { styled } from "styled-components";

export const RightStyle = styled.div`
  width: 499px;
  height: 652px;
  border-radius: 15px;
  /* background: #d2162e; */
  background: #ee0007;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: inset 0 0 15px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 1175px) {
    width: 380px;
    height: 530px;
  }

  @media (max-width: 875px) {
    width: 380px;
    height: 350px;
    justify-content: flex-start;
  }
`;

export const BtnsContainer = styled.div`
  display: none;
 

  @media (max-width: 875px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    
  }
`;

export const CommonBtnStyle = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:10px;
  padding: 8px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
background: #495057;;
  color: #fff;
  border: 2px solid #000;
  box-shadow: 0;

  &:hover {
    background: #a0a0a0;
  }

  &:active {
    filter: brightness(0.8);
  }
`;

export const BtnDetails = styled(CommonBtnStyle)``;
export const BtnStats = styled(CommonBtnStyle)``;
export const BtnEvo = styled(CommonBtnStyle)``;