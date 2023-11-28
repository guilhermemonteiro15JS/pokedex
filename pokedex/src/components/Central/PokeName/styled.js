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
background: rgba(12, 71, 103, 0.76);
color: white;
font-size: 30px;
margin-bottom:60px;

@media (max-width: 1024px) {
width: 280px;
height: 30px;
padding: 10px;
font-size: 25px;
bottom: 110px;
left: 40px;
  }

@media (max-width: 768px) {
width: 150px;
height: 30px;
padding: 10px;
font-size: 15px;
bottom: 110px;
left: 20px;
  }



`;

export const PokeID = styled.h3 `
font-size:15px;
width:80px;
margin-right: 60px;
display:flex;
justify-content:flex-start;



@media (max-width: 768px) {
    font-size:10px;
margin-right: 0px;
width:70px;
}

`