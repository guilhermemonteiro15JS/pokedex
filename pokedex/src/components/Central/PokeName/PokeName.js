import React from "react";
import { PokeNameH2, PokeID } from "./styled";

const PokeName = ({ pokemon }) => {
  return (
    <PokeNameH2>
      <PokeID>Nº {pokemon.data.id} </PokeID> 
      {pokemon.data.name}
    </PokeNameH2>
  );
};

export default PokeName;
 