import { styled } from "styled-components";


export const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;  

  @media (max-width: 1175px) {
    align-items: center; 
    flex-direction: column;
  }


  @media (max-width: 875px) {
    display: flex;
  flex-direction: row;
  align-items: center;  
  }
`;

export const Input = styled.input`
  background-color: #e7e1da;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 8px;
  margin: 10px 10px 1px 10px;

  @media (max-width: 1175px) {
    width: 90px;
    height: 8px;
    margin: 10px 10px 1px 10px;
    font-size: 11px;
  }

  @media (max-width: 875px) {
    width: 120px;
    height: 8px;
    margin: 5px;
    font-size: 11px;
  }
`;

export const BtnSearch = styled.button`
width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 5px;
  margin-left: 50px;
  padding: 8px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background: #495057;
  color: #fff; 
  border: 2px solid #000; 
  box-shadow: 0 ;
  &:hover {
    background: #a0a0a0;
  }

  &:active {
    filter: brightness(0.8);
  }

  @media (max-width: 1175px) {
    align-self: center;
    margin: 5px 0px 0px 35px;
    width: 60px; 
  }

  @media (max-width: 875px) {
    margin-top: 1px;
    font-size: 12px;
    align-self: center;
    width: 80px;
    height:30px;
    margin-left: 30px;
  }
`;
