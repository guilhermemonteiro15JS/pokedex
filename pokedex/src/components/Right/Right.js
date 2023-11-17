import React from "react";
import PokeStats from "./PokeStats/PokeStats";
import { RightStyle } from "./styled";

const Right = ({ pokemon }) => {
  return (
    <RightStyle>
      <PokeStats pokemon={pokemon} />
    </RightStyle>
  );
};

export default Right;
