import { styled } from "styled-components";


export const Pokedex = styled.div`
display: flex;
align-content: column;
left: 30px;
background-image:url(${props => props.bkImage});
background-size: cover;
background-repeat: no-repeat;
height:100vh;
`;

export const Border = styled.div`
width: 14px;
height: 715px;
position: relative;
top: 18px;
border-radius: 3px;
background: #C1132A;
`;