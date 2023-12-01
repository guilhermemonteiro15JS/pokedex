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
  ArrowRightIcon,
  BtnDetails,
  DetailsAndFilterContainer
} from "./styled";

const Central = ({ pokemon, onPrev, onNext, regionLenght, pokeNumber ,showDetails ,setShowDetails,showFilter,setShowFilter}) => {
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
      <DetailsAndFilterContainer>
      <BtnDetails onClick={() =>setShowFilter(!showFilter)} >Filter</BtnDetails>
      <BtnDetails onClick={() =>setShowDetails(!showDetails)} >Details</BtnDetails>
      
      </DetailsAndFilterContainer>
      <NavigationButtonsContainer>
        <BtnOnPrev onClick={onPrev} disabled={!prevPokemon}><ArrowLeftIcon></ArrowLeftIcon></BtnOnPrev>
        <BtnOnNext onClick={onNext} disabled={!nextPokemon}><ArrowRightIcon></ArrowRightIcon></BtnOnNext>
      </NavigationButtonsContainer>
    </CentralStyle>
  );
};

export default Central;
