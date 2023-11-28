import { styled } from "styled-components";

export const RightStyle = styled.div`
  width: 499px;
  height: 652px;
  border-radius: 15px;
  background: #d2162e;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1024px) {
    width: 380px;
    height: 530px;
  }

  @media (max-width: 768px) {
    width: 420px;
    height: 350px;
  }
`;

export const BtnDetails = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: inline;
  }
`;
