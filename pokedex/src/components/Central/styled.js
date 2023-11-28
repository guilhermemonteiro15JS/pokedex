import styled from "styled-components";

export const CentralStyle = styled.div`
  width: 499px;
  height: 652px;
  border-radius: 15px;
  background: #d2162e;

  @media (max-width: 1024px) {
    width: 380px;
    height: 530px;
  }
  @media (max-width: 768px) {
    width: 420px;
    height: 350px;
  }


`;

export const BrowserButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 10px;
`;

export const BrowserButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:nth-child(1) {
    background-color: #ff0000;
  }

  &:nth-child(2) {
    background-color: #ffdd59;
  }
  &:nth-child(3) {
    background-color: #28ca42;
  }
  &:hover {
    filter: brightness(1.2);
  }
  &:active {
    filter: brightness(0.8);
  }
  @media (max-width: 1024px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
  }

 
`;

export const ImgAndName = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items:center;
    gap: 20px;
    margin-bottom: 50px;
  }
`;

export const NavigationButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

export const BtnOnNext = styled.button`
  width: 110px;
  height: 20px;
  background: url("/Buttontogoright.png");
  border: none;
  border-radius: 60%;
  cursor: pointer;
  margin-left: 100px;

  &:hover {
    filter: brightness(1.2);
  }
`;
export const BtnOnPrev = styled.button`
  width: 110px;
  height: 20px;
  background-image: url("/Buttontogoleft.png");
  background-repeat: no-repeat;
  border: none;
  border-radius: 60%;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;
