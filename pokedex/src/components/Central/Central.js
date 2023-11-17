import { React } from "react";
import PokeImage from "./PokeImage/PokeImage";
import PokeName from "./PokeName/PokeName";
import { CentralStyle, BrowserButton, BrowserButtonsContainer } from "./styled";

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

      <button onClick={onPrev}>Next</button>
      <button onClick={onNext}>Next</button>
    </CentralStyle>
  );
};

export default Central;
