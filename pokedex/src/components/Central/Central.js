import { React } from "react";
import PokeImage from "./PokeImage/PokeImage";
import PokeName from "./PokeName/PokeName";
import {
  CentralStyle,
  BrowserButton,
  BrowserButtonsContainer,
  NavigationButtonsContainer,
  BtnOnNext,
  BtnOnPrev,
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
      <NavigationButtonsContainer>
        <BtnOnPrev onClick={onPrev}></BtnOnPrev>
        <BtnOnNext onClick={onNext}></BtnOnNext>
      </NavigationButtonsContainer>
    </CentralStyle>
  );
};

export default Central;
