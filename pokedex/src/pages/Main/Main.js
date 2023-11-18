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
  const [evolutionChainUrl, setEvolutionChainUrl] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState([]);

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
      const pokeData = await axios.get(`${getPokem}${pokemonName}`);
      console.log(pokeData.data);
      setPokemon(pokeData);
    } catch (err) {}
  };

  const fetchPokemonSpecies = async (pokemonName) => {
    try {
      const pokem = await axios.get(`${getPokeSpecies}${pokemonName}`);
      console.log(pokem.data);
      setPokeSpecie(pokem);
      const evolutionChainUrl = pokem.data.evolution_chain.url;
      console.log(evolutionChainUrl);
      setEvolutionChainUrl(evolutionChainUrl);
    } catch (err) {}
  };

  const fetchDataForCurrentPokemon = async () => {
    if (pokedex.length > 0) {
      fetchPokemon(pokedex[pokeNumber].pokemon_species.name);
      fetchPokemonSpecies(pokedex[pokeNumber].pokemon_species.name);
      await getEvoChain(evolutionChainUrl);
    }
  };
  const getEvoChain = async (url) => {
    if (!url) return;

    try {
      const response = await axios.get(url);
      console.log("Evolução:", response.data.chain);
      setEvolutionChain(response.data.chain)
    } catch (err) {
        console.error("Erro ao obter a cadeia de evolução:", err);

    }
  };




  useEffect(() => {
    fetchPokedex();
  }, []);

  useEffect(() => {
    fetchDataForCurrentPokemon();
  }, [pokedex, pokeNumber]);

  useEffect(() => {
    if (evolutionChainUrl) {
      getEvoChain(evolutionChainUrl);
    }
  }, [evolutionChainUrl]);


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
      <Border />

      {pokemon ? <Right pokemon={pokemon} pokeSpecie={pokeSpecie} evolutionChain={evolutionChain}  /> : "vazio"}
    </Pokedex>
  );
};

export default Main;

