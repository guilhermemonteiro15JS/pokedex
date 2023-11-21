import React, { useState, useEffect } from "react";
import { ImgPoke, ImgPokeDiv } from "./styled";

const PokeImage = ({ pokemon }) => {
  const [pokeTypeImg, setPokeTypeImg] = useState(null);

  useEffect(() => {
    if (pokemon.data.types[0].type.name === "grass") {
      setPokeTypeImg("/bk-grass.png");
    } else if (pokemon.data.types[0].type.name === "fire") {
      setPokeTypeImg("/bk-fire.png");
    } else if (pokemon.data.types[0].type.name === "water") {
      setPokeTypeImg("/bk-water.png");
    } else if (pokemon.data.types[0].type.name === "normal") {
      setPokeTypeImg("/bk-normal.png");
    } else if (pokemon.data.types[0].type.name === "psychic") {
      setPokeTypeImg("/bk-psychic.png");
    } else if (pokemon.data.types[0].type.name === "electric") {
      setPokeTypeImg("/bk-electric.png");
    } else if (pokemon.data.types[0].type.name === "dark") {
      setPokeTypeImg("/bk-dark.png");
    } else if (pokemon.data.types[0].type.name === "dragon") {
      setPokeTypeImg("/bk-dragon.png");
    } else if (pokemon.data.types[0].type.name === "fighting") {
      setPokeTypeImg("/bk-fight.png");
    } else if (pokemon.data.types[0].type.name === "ground") {
      setPokeTypeImg("/bk-ground.png");
    } else if (pokemon.data.types[0].type.name === "poison") {
      setPokeTypeImg("/bk-poison.png");
    } else if (pokemon.data.types[0].type.name === "bug") {
      setPokeTypeImg("/bk-bug.png");
    } else if (pokemon.data.types[0].type.name === "fairy") {
      setPokeTypeImg("/bk-fairy.png");
    } else if (pokemon.data.types[0].type.name === "rock") {
      setPokeTypeImg("/bk-rock.png");
    } else if (pokemon.data.types[0].type.name === "ice") {
      setPokeTypeImg("/bk-ice.png");
    } else if (
      pokemon.data.types[0].type.name === "ghost" ||
      pokemon.data.types[0].type.name === "shadow"
    ) {
      setPokeTypeImg("/bk-ghost.png");
    } else if (pokemon.data.types[0].type.name === "flying") {
      setPokeTypeImg("/bk-flying.png");
    } else if (pokemon.data.types[0].type.name === "steel") {
      setPokeTypeImg("/bk-steel.png");
    }
  }, [pokemon.data.types]);

  return (
    <ImgPokeDiv>
      <ImgPoke
        pokeTypeImg={pokeTypeImg}
        src={pokemon.data.sprites.other["official-artwork"].front_default}
      />
    </ImgPokeDiv>
  );
};

export default PokeImage;
