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
  ImgAndName,
  ArrowLeftIcon,
  ArrowRightIcon
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
      <ImgAndName>
      <PokeImage pokemon={pokemon} />
      <PokeName pokemon={pokemon} />
      </ImgAndName>
      <NavigationButtonsContainer>
        <BtnOnPrev onClick={onPrev} disabled={!prevPokemon}><ArrowLeftIcon></ArrowLeftIcon></BtnOnPrev>
        <BtnOnNext onClick={onNext} disabled={!nextPokemon}><ArrowRightIcon></ArrowRightIcon></BtnOnNext>
      </NavigationButtonsContainer>
    </CentralStyle>
  );
};

export default Central;
