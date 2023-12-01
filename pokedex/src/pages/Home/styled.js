import styled from "styled-components";


export const HomeD = styled.div`
background-image:url('Home_bk.png');
display: flex;
flex-direction: column;
align-items: center;
background-size: cover;
background-repeat: no-repeat;
height: 100%;
  width: 100%;
max-width:100%;
min-height: 100vh;
overflow: hidden;
@media (max-width: 875px) {
    height:100%;
  }

`



export const PokedexFechada = styled.div`
width: 400px;
height: 650px;
border-radius: 15px;
background: #ee0007;
box-shadow: inset 0 0 15px 5px rgba(0, 0, 0, 0.5);
`;

export const Pokedex= styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
`;
export const BrowserButtonsContainer = styled.div`
display: flex;
gap:6px;
padding: 10px;
`;

export const BrowserButton = styled.button`
width: 20px;
height: 20px;
border: none;
border-radius: 50%;
cursor: pointer;

&:nth-child(1){
    background-color: #FF0000; 
}

&:nth-child(2){
    background-color: #ffdd59; 
}
&:nth-child(3){
    background-color: #28ca42; 
}
&:hover{
    filter: brightness(1.2); 
}
&:active{
    filter: brightness(0.8);
}
`;

export const Capa = styled.div`
width: 360px;
height: 588px;
flex-shrink: 0;
border-radius: 15px;
border: 1px solid #EB0909;
background: #ee0007;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
display: flex;
align-items: center;
justify-content: center;
box-shadow: inset 0 0 15px 5px rgba(0, 0, 0, 0.5);
`;

export const TextCountainer= styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const Title= styled.h1`
margin: 5px;
color:#ffffff;
font-weight:bold;
`;
export const SubTitle= styled.h2`
margin: 5px;
color:#ffffff;
font-weight:bold;
`;
export const CapaContainer = styled.div`
display: flex;
 align-items: center;
justify-content: center;
`;

export const Button = styled.button`
 position: absolute;
  width: 60px;
  height: 60px;
  background: #ee0007;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -83%);
  transition: filter 0.3s ease-in-out;
  cursor: pointer;

&:hover {
    filter: blur(5px); 
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url("./pokebola.png") center/contain no-repeat;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor:default;
`;

export const ImagePoke1 = styled.image`
width: 100%;
height: 100%;
display:flex;
align-items:center;
`;
