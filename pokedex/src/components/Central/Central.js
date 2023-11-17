import React from "react";
import PokeImage from "./PokeImage/PokeImage";
import PokeName from "./PokeName/PokeName";
import { CentralStyle, BrowserButton, BrowserButtonsContainer } from "./styled";

const Central = ({ pokemon }) => {
  return (
    <CentralStyle>
      <BrowserButtonsContainer>
        <BrowserButton />
        <BrowserButton />
        <BrowserButton />
      </BrowserButtonsContainer>
      <PokeImage pokemon={pokemon} />
      <PokeName pokemon={pokemon} />
    </CentralStyle>
  );
};

export default Central;
