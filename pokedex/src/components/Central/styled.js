import styled from "styled-components";

export const CentralStyle = styled.div`
width: 499px;
height: 752px;
border-radius: 15px;
background: #D2162E;
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
export const NavigationButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px; 
`;

export const BtnOnNext = styled.button`
  width: 110px;
  height: 20px;
  background: url("/Buttontogoright.png");
   border: none;
  border-radius: 70%;
  cursor: pointer;
  margin-left:100px;
`
export const BtnOnPrev = styled.button`
  width: 110px;
  height: 20px;
  background-image :url("/Buttontogoleft.png");
   border: none;
  border-radius: 70%;
  cursor: pointer;
`

