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

const Central = ({ pokemon, onPrev, onNext, regionLenght, pokeNumber }) => {
  const prevPokemon = pokeNumber > 0;

  const nextPokemon = pokeNumber < regionLenght - 1;

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
        <BtnOnPrev onClick={onPrev} disabled={!prevPokemon}></BtnOnPrev>
        <BtnOnNext onClick={onNext} disabled={!nextPokemon}></BtnOnNext>
      </NavigationButtonsContainer>
    </CentralStyle>
  );
};

export default Central;
