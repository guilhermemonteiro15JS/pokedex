import styled  from "styled-components";

export const PokeNameH2= styled.h2`
display: flex;
width: 366px;
height: 50px;
padding: 10px;
 /* justify-content:center;  */
align-items: center;
gap: 10px;
position: relative;
left: 60px;
 top: 15px;
bottom: 191px;
background-color:#C2E688;
border: 6px solid #522438;
box-shadow: inset 6px 6px rgba(0,0,0,0.2);
overflow: hidden;
color: black;
font-size: 25px;
/* margin-bottom:60px; */
text-transform:uppercase;

@media (max-width: 1175px) {
width: 280px;
height: 30px;
padding: 10px;
font-size: 20px;
bottom: 110px;
left: 40px;
  }

@media (max-width: 875px) {
width: 140px;
height: 30px;
padding: 10px;
font-size: 15px;
bottom: 110px;
left: 0px;
  }



`;

export const Glass = styled.div`

`

export const PokeID = styled.h3 `
font-size:15px;
width:80px;
margin-right: 60px;
display:flex;
justify-content:flex-start;



@media (max-width: 875px) {
    font-size:10px;
margin-right: 0px;
width:70px;
}

`