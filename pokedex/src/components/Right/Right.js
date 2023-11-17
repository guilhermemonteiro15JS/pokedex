import React from "react";
import PokeStats from "./PokeStats/PokeStats";

const Right = ({ pokemon }) => {
  return (
    <div>
      <PokeStats pokemon={pokemon} />
    </div>
  );
};

export default Right;
