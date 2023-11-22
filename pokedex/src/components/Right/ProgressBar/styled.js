import { styled } from "styled-components";

export const ProgressBarWrapper= styled.div`
width: 200px;
height: 10px;
background-color: #eee;
border-radius: 4px;
overflow: hidden;
`;

export const ProgressBarFill= styled.div`
height:100%;
width: ${({ percentage }) => `${percentage}%`};
background-color: #F4442E; 
transition: width 0.3s ease;
`;