import { styled} from "styled-components";

export const DescriptionH2 = styled.h3`
display: flex;
align-items: center;
justify-content: center;
margin: 0px;
font-size:20px;


@media (max-width: 1024px) {
    font-size:15px;
  }

  @media (max-width: 768px) {
    font-size:20px;
  }


`;
export const TextP = styled.p`
 font-size:14px;
margin: 0px;

@media (max-width: 1024px) {
    font-size:12px;
  }
  @media (max-width: 768px) {
    font-size:14px;
  }

`;

export const PokeDescriptionDiv = styled.div`
overflow: hidden;

`;