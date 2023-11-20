import React, { useState , useEffect} from "react";
import { ImgPoke, ImgPokeDiv } from "./styled";

const PokeImage = ({ pokemon }) => {
const [pokeTypeImg, setPokeTypeImg] = useState(null)

useEffect(() => {
  // Use useEffect to update the state only when necessary
  if (pokemon.data.types[0].type.name === "grass") {
    console.log("Erba");
    setPokeTypeImg("/bk-grass.png");
  } else if (pokemon.data.types[0].type.name === "fire") {
    setPokeTypeImg("/bk-fire.png");
  } else if (pokemon.data.types[0].type.name === "water") {
    setPokeTypeImg("/bk-water.png");
  }
  
}, [pokemon.data.types]); // Monitor changes in the types array


  return (
    <ImgPokeDiv>
      <ImgPoke pokeTypeImg={pokeTypeImg} src={pokemon.data.sprites.other["official-artwork"].front_default}/>
      
    </ImgPokeDiv>
  );
};

export default PokeImage;
