import { styled } from "styled-components";


export const NavBarStyle = styled.div`
 display: flex;
 background-color: #4d9de0;
 width: 100%;
 gap: 250px;
`;

export const Button = styled.button`
  background: ${({ isSelected }) =>
    isSelected
    ? "linear-gradient(90deg, #305e8c 6%, #4d9de0 25%, #6f42c1 45%, #007bff 55%, #0012cc 94%)"
    : "linear-gradient(90deg, #00bfff 6%, #87ceeb 25%, #1e90ff 45%, #4682b4 55%, #4169e1 94%)"
};
  color: white;
  border: 1px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center; 
  gap: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: ${({ isSelected }) => (isSelected ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none")};

  &:active {
    background-color: #305e8c;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

export const ImagemPoke = styled.img`
border: none;
height: 50px;
width: 120px;
display: flex;
justify-content: start;
`; 
export const DivButton = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
`; 