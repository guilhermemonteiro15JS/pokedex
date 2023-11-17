import { React } from "react";
import PokeImage from "./PokeImage/PokeImage";
import PokeName from "./PokeName/PokeName";
import {
  CentralStyle,
  BrowserButton,
  BrowserButtonsContainer,
  BtnOnNext,
  BtnOnPrev,
  BtnGeral
} from "./styled";

const Central = ({ pokemon, onPrev, onNext }) => {
  return (
    <CentralStyle>
      <BrowserButtonsContainer>
        <BrowserButton />
        <BrowserButton />
        <BrowserButton />
      </BrowserButtonsContainer>
      <PokeImage pokemon={pokemon} />
      <PokeName pokemon={pokemon} />
      <BtnGeral>
        <BtnOnPrev onClick={onPrev}></BtnOnPrev>
        <BtnOnNext onClick={onNext}></BtnOnNext>
      </BtnGeral>
    </CentralStyle>
  );
};

export default Central;
