import styled from "styled-components";

export const ImgPoke = styled.img`
width: 100%;
height: 100%;
border-radius: 10px;
background-image: url(${props => props.pokeTypeImg});
background-size: cover;
`;

export const ImgPokeDiv = styled.div`
width: 400px;
height: 350px;
background: #D9D9D9;
position: relative;
display: flex;
align-items: center;
justify-content: start;
border-radius: 10px;
border: 2px solid #000;
border-top-width: 0px;
border-bottom-width: 0px;
border-left-width: 0px;
border-right-width: 0px;
left: 50px;
overflow: hidden;
border: 6px solid #522438;
box-shadow: inset 6px 6px rgba(0,0,0,0.2);

@media (max-width: 1024px) {
    width: 320px;
    height: 280px;
    left: 30px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 180px;
    left: 10px;
  }
`;
