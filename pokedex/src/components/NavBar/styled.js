import { styled } from "styled-components";

export const NavBarStyle = styled.div`
  display: flex;
  
  width: 100%;
  max-width:100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;

  @media (max-width: 875px) {
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: rgba(135, 206, 250, 0.7);
  }
`;

export const MenuButton = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 875px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    background-color: transparent;
    border: none;
    transition: transform 0.3s;
    margin-right:10px;

    div {
      width: 100%;
      height: 4px;
      background-color: #fff;
      font-weight: bold;
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


export const ImagemPoke = styled.img`
  border: none;
  height: 50px;
  width: 120px;
  display: flex;
  justify-content: start;
  z-index: 2;
`;
export const DivButton = styled.div`
  display: flex;
  gap: 10px;

 margin-right: 60px;

 @media (max-width: 920px) {
   gap:1px;
 }

  @media (max-width: 875px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: rgba(135, 206, 250, 0.7);
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
    gap:10px;
  }
`;

export const ButtonS = styled.button`
display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 0 5px;
  color: white;
  text-shadow: 2px 2px rgb(116, 116, 116);
  text-transform: uppercase;
  border: solid 2px black;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 17px;
  background-color: hsl(49deg 98% 60%);
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;

  &:active {
    transform: scale(0.9);
    transition: all 100ms ease;
  }

  img {
    transition: all 0.5s ease;
    z-index: 1;
  }

  .imagem {
    height: 40px;
    width: 30px;
    background-color: hsl(49deg 98% 60%);

  }

  .play {
    transition: all 0.5s ease;
    transition-delay: 300ms;
  }

  &:hover img {
    transform: scale(3) translate(50%);
  }

  .now {
    position: absolute;
    left: 0;
    transform: translateX(-100%);
    transition: all 0.5s ease;
    z-index: 2;
  }

  &:hover .now {
    transform: translateX(10px);
    transition-delay: 300ms;
  }

  &:hover .play {
    transform: translateX(200%);
    transition-delay: 300ms;
  }
  @media (max-width: 1130px) {
    gap:1px;
    font-size: 15px;

    .imagem {
    height: 30px;
    width: 20px;
    background-color: hsl(49deg 98% 60%);

  }
  }

`;
