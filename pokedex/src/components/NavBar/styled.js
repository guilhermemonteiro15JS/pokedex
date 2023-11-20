import { styled } from "styled-components";

export const NavBarStyle = styled.div`
 display: flex;
 justify-content: center;
 background-color: #4d9de0;
 width: 100%;
 gap: 10px;
`;

export const Button = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? "#305e8c" : "#4d9de0")};
  color: white;
  border: 1px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  gap: 10px;
  box-shadow: ${({ isSelected }) => (isSelected ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none")};

  &:active {
    background-color: #305e8c;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;