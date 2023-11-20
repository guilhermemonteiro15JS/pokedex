import styled from "styled-components";

export const ImgPoke = styled.img`
width: 100%;
height: 100%;
border-radius: 10px;
background-image: url(${props => props.pokeTypeImg});
`;

export const ImgPokeDiv = styled.div`
width: 405px;
height: 400px;
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
`;
