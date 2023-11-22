import React from "react";
import { DescriptionH2, PokeDescriptionDiv, TextP } from "./styled";

const PokeDescription = ({ pokeSpecie }) => {
  const engDescription = pokeSpecie.data.flavor_text_entries.find(
    (desc) => desc.language.name === "en"
  );
  return (
    <PokeDescriptionDiv>
      <DescriptionH2>Description:</DescriptionH2>
      {engDescription && (
        <TextP>{engDescription.flavor_text} </TextP>
      )}
    </PokeDescriptionDiv>
  );
};

export default PokeDescription;
