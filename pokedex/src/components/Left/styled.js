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

@media (max-width: 1024px) {
    width: 130px;
height: 430px;
  }

@media (max-width: 768px) {
    width: 420px;
    height: 150px;
    
  }



`;
