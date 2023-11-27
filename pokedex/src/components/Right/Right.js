import React, { useState } from "react";
import { useMedia } from "react-use";
import PokeStats from "./PokeStats/PokeStats";
import { RightStyle,BtnDetails } from "./styled";
import PokeDetails from "./PokeDetails/PokeDetails";
import PokeEvoChain from "./PokeEvoChain/PokeEvoChain";

const Right = ({ pokemon , pokeSpecie, evolutionChain}) => {
  const isWideScreen = useMedia("(min-width: 768px)");
  const [showDetails, setShowDetails] = useState(isWideScreen);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };


  return (
    <RightStyle >
      <BtnDetails>
        <button onClick={toggleDetails}>Details</button>
        <button>Stats</button>
        <button>EvoChain</button>
      </BtnDetails>
      {showDetails ?<PokeDetails pokemon={pokemon} pokeSpecie={pokeSpecie}/>: ""}
      <PokeStats pokemon={pokemon} />
      <PokeEvoChain evolutionChain={evolutionChain} />
    </RightStyle>
  );
};

export default Right;
