import React, { useState,useEffect } from "react";
import { useMedia } from "react-use";
import PokeStats from "./PokeStats/PokeStats";
import { RightStyle,BtnDetails } from "./styled";
import PokeDetails from "./PokeDetails/PokeDetails";
import PokeEvoChain from "./PokeEvoChain/PokeEvoChain";

const Right = ({ pokemon , pokeSpecie, evolutionChain}) => {
  const isWideScreen = useMedia("(min-width: 769px)");
  const [showDetails, setShowDetails] = useState(isWideScreen);
  const [showStats, setShowStats] = useState(false);
  const [showEvoDetais, setShowEvoDetais] = useState(false);

  useEffect(() => {
    // Atualiza os estados quando a largura da janela muda
    setShowDetails(isWideScreen);
    setShowStats(isWideScreen);
    setShowEvoDetais(isWideScreen);
  }, [isWideScreen]);

  const toggleVisibility = (targetState) => {
    setShowDetails(targetState === "details");
    setShowStats(targetState === "stats");
    setShowEvoDetais(targetState === "evoChain");
  };

  return (
    <RightStyle>
    <BtnDetails>
      <button onClick={() => toggleVisibility("details")}>Details</button>
      <button onClick={() => toggleVisibility("stats")}>Stats</button>
      <button onClick={() => toggleVisibility("evoChain")}>EvoChain</button>
    </BtnDetails>
    {showDetails ? <PokeDetails pokemon={pokemon} pokeSpecie={pokeSpecie} /> : null}
    {showStats ? <PokeStats pokemon={pokemon} /> : null}
    {showEvoDetais ? <PokeEvoChain evolutionChain={evolutionChain} /> : null}
  </RightStyle>
  );
};

export default Right;
