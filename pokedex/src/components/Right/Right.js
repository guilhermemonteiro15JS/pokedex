import React from "react";
import PokeStats from "./PokeStats/PokeStats";
import { RightStyle } from "./styled";
import PokeDetails from "./PokeDetails/PokeDetails";

const Right = ({ pokemon , pokeSpecie}) => {
  return (
    <RightStyle >
        <PokeDetails pokemon={pokemon} pokeSpecie={pokeSpecie}/>
      <PokeStats pokemon={pokemon} />
    </RightStyle>
  );
};

export default Right;
