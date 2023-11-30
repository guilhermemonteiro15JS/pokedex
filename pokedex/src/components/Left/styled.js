import { styled } from "styled-components";

export const LefttStyle = styled.div`
width: 250px;
height: 550px;
border-radius: 15px;
 /* background: #d2162e; */
 background: #ee0007;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
box-shadow: inset 0 0 15px 5px rgba(0, 0, 0, 0.5);

@media (max-width: 1175px) {
    width: 130px;
height: 430px;
  }

@media (max-width: 875px) {
    width: 380px;
    height: 150px;
    
  }



`;
