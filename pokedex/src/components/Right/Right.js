import React from "react";
import PokeStats from "./PokeStats/PokeStats";
import { RightStyle } from "./styled";
import PokeDetails from "./PokeDetails/PokeDetails";
import PokeEvoChain from "./PokeEvoChain/PokeEvoChain";

const Right = ({ pokemon , pokeSpecie, evolutionChain}) => {
  return (
    <RightStyle >
      {<PokeDetails pokemon={pokemon} pokeSpecie={pokeSpecie}/>}
      <PokeStats pokemon={pokemon} />
      <PokeEvoChain pokemon={pokemon} pokeSpecie={pokeSpecie} evolutionChain={evolutionChain} />
    </RightStyle>
  );
};

export default Right;
