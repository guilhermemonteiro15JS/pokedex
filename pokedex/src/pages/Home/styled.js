import styled from "styled-components";

export const PokedexFechada = styled.div`
width: 400px;
height: 650px;
border-radius: 15px;
background: #D2162E;
`;

export const Pokedex= styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 60px;
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
background: #D2162E;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
display: flex;
align-items: center;
justify-content: center;
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
background: #EB0909;
border-radius: 50%;
top: 395px;

transition: filter 0.3s ease-in-out;

&:hover {
    filter: blur(5px); 
  }
`;

export const Image = styled.div`
width: 100%; 
height: 61%;
background: url("./pokebola.png");
background-size: 100%;
z-index:99;
display: flex;
align-items: center;
justify-content: center;
`;