import { styled } from "styled-components";


export const Input = styled.input`
  background-color: #fc9e4f;

  @media (max-width: 1024px) {
    width: 90px;
    height: 15px;
    margin: 10px 10px 1px 10px;
    font-size:11px;
  }

  @media (max-width: 768px) {
    width: 110px;
    height: 15px;
    margin:5px;
    font-size:11px;
  }
`;

export const BtnSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
    margin-top: 5px; 
  @media (max-width: 1024px) {
    align-self: center;
    margin: 5px 0px 0px 30px;
    font-size:12px;
  }

  @media (max-width: 768px) {
margin-top:1px;
font-size:12px;

  }
`;

export const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
  }
`;