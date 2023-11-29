import React, { useState,useEffect } from "react";
import { useMedia } from "react-use";
import PokeStats from "./PokeStats/PokeStats";
import { RightStyle,BtnDetails,BtnsContainer,BtnEvo,BtnStats } from "./styled";
import PokeDetails from "./PokeDetails/PokeDetails";
import PokeEvoChain from "./PokeEvoChain/PokeEvoChain";

const Right = ({ pokemon , pokeSpecie, evolutionChain}) => {
  const isWideScreen = useMedia("(min-width: 875px)");
  const [showDetails, setShowDetails] = useState(isWideScreen);
  const [showStats, setShowStats] = useState(false);
  const [showEvoDetais, setShowEvoDetais] = useState(false);

  useEffect(() => {
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
<BtnsContainer>
      <BtnDetails onClick={() => toggleVisibility("details")}>Details</BtnDetails>
  
      <BtnStats onClick={() => toggleVisibility("stats")}>Stats</BtnStats>
      <BtnEvo onClick={() => toggleVisibility("evoChain")}>EvoChain</BtnEvo>
      </BtnsContainer>
    {showDetails ? <PokeDetails pokemon={pokemon} pokeSpecie={pokeSpecie} /> : null}
    {showStats ? <PokeStats pokemon={pokemon} /> : null}
    {showEvoDetais ? <PokeEvoChain evolutionChain={evolutionChain} /> : null}
 
  </RightStyle>
  );
};

export default Right;
