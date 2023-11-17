import {React} from "react";
import PokeImage from "./PokeImage/PokeImage";
import PokeName from "./PokeName/PokeName";
import { CentralStyle, BrowserButton, BrowserButtonsContainer, BtnOnNext, BtnOnPrev } from "./styled";

const Central = ({ pokemon, onPrev, onNext}) => {


  return (
    <CentralStyle>
      <BrowserButtonsContainer>
        <BrowserButton />
        <BrowserButton />
        <BrowserButton />
      </BrowserButtonsContainer>
      <PokeImage pokemon={pokemon} />
      <PokeName pokemon={pokemon} />

      <BtnOnPrev onClick={onPrev}></BtnOnPrev>
      <BtnOnNext onClick={onNext}></BtnOnNext>
    </CentralStyle>
  );
};

export default Central;
