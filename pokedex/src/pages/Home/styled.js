import styled from "styled-components";

export const PokedexFechada = styled.div`
width: 499px;
height: 752px;
border-radius: 15px;
background: #D2162E;
`;

export const Pokedex= styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
export const BrowserButtonsContainer = styled.div`
display: flex;
gap:8px;
padding: 10px;
`;

export const BrowserButton = styled.button`
width: 30px;
height: 30px;
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
width: 458px;
height: 672px;
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

export const Image = styled.img`
width: 100%;
height: 100%;
transition: filter 0.3s ease-in-out;

&:hover {
    filter: blur(5px); 
  }
`;