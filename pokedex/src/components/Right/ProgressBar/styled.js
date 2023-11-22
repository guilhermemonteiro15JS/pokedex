import { styled } from "styled-components";

export const ProgressBarWrapper= styled.div`
width:50%;
height: 10px;
background-color: #eee;
border-radius: 4px;
overflow: hidden;
display: flex;
flex-direction: row;
align-items: center;
flex-grow: 1;
margin-left: 20px;
`;

export const ProgressBarFill= styled.div`
height:100%;
width: ${({ percentage }) => `${percentage}%`};
background-color: #F4442E; 
transition: width 0.3s ease;
`;