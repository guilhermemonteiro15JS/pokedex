import { styled } from "styled-components";
import MenuImage from "../../assets/pokeball-icon.png";

export const NavBarStyle = styled.div`
  display: flex;
  background-color: #4d9de0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const MenuButton = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    background-color: transparent;
    border: none;

    div {
      width: 100%;
      height: 4px;
      background-color: #fff;
      transition: background-color 0.3s;
    }

    &.open {
      div:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
      }

      div:nth-child(2) {
        opacity: 0;
      }

      div:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
      }
    }
  }
`;

export const Button = styled.button`
  background: ${({ isSelected }) =>
    isSelected
      ? "linear-gradient(90deg, #305e8c 6%, #4d9de0 25%, #6f42c1 45%, #007bff 55%, #0012cc 94%)"
      : "linear-gradient(90deg, #00bfff 6%, #87ceeb 25%, #1e90ff 45%, #4682b4 55%, #4169e1 94%)"};
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
  box-shadow: ${({ isSelected }) =>
    isSelected ? "0 0 10px rgba(0, 0, 0, 0.5)" : "none"};

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
  z-index: 2;
  margin-left: 10px;
`;
export const DivButton = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: #4d9de0;
    padding: 5px;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    max-width: 200px;
    z-index: 1;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
