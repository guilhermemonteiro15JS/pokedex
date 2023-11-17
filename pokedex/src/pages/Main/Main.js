import { React, useEffect, useState } from "react";
import { getGen1, kanto, getPokem, getPokeSpecies } from "../../api";

import axios from "axios";
import Central from "../../components/Central/Central";
import Right from "../../components/Right/Right";
import { Pokedex, Border } from "./styled";

const Main = () => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [pokeNumber, setPokeNumber] = useState(0);
  const [pokeSpecie, setPokeSpecie] = useState(null);

  const fetchPokedex = async () => {
    try {
      const pokex = await axios.get(kanto);
      console.log(pokex.data);
      setPokedex(pokex.data.pokemon_entries);
      console.log(pokedex);
    } catch (err) {}
  };

  const fetchPokemon = async (pokemonName) => {
    try {
      const pokem = await axios.get(`${getPokem}${pokemonName}`);
      console.log(pokem.data);
      setPokemon(pokem);
    } catch (err) {}
  };

  const fetchPokemonSpecies = async (pokemonName) => {
    try {
        const pokem = await axios.get(`${getPokeSpecies}${pokemonName}`);
        console.log(pokem.data);
        setPokeSpecie(pokem);
      } catch (err) {}
  }

  const fetchDataForCurrentPokemon = () => {
    if (pokedex.length > 0) {
      fetchPokemon(pokedex[pokeNumber].pokemon_species.name);
      fetchPokemonSpecies(pokedex[pokeNumber].pokemon_species.name)
    }
  };

  useEffect(() => {
    fetchPokedex();
  }, []);

  useEffect(() => {
    fetchDataForCurrentPokemon();
  }, [pokedex, pokeNumber]);

  const handlePrev = (e) => {
    setPokeNumber((prevNumber) => prevNumber - 1);
  };

  const handleNext = (e) => {
    setPokeNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <Pokedex>
      <div>
        {pokemon ? (
        <Central pokemon={pokemon} onPrev={handlePrev} onNext={handleNext} />
      ) : (
        "vazio"
      )}
      </div>
      <Border/>
      
      {pokemon ? <Right pokemon={pokemon} pokeSpecie={pokeSpecie}/> : "vazio"}

    </Pokedex>
  );
};

export default Main;
