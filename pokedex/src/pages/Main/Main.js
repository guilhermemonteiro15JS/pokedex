import { React, useEffect, useState } from "react";
import {getPokem, getPokeSpecies } from "../../api";

import axios from "axios";
import Central from "../../components/Central/Central";
import Right from "../../components/Right/Right";
import { Pokedex, Border } from "./styled";
import NavBar from "../../components/NavBar/NavBar";

const Main = () => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [pokeNumber, setPokeNumber] = useState(0);
  const [pokeSpecie, setPokeSpecie] = useState(null);
  const [evolutionChainUrl, setEvolutionChainUrl] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [region, setRegion] = useState(null)

  const handleRegion = (newRegion) =>{
    setRegion(newRegion);
    console.log(newRegion)
  }

  const fetchPokedex = async () => {
    console.log(region)
    try {
      const pokex = await axios.get(region);
      console.log(pokex.data);
      setPokedex(pokex.data.results);
      console.log(`pokedex ${pokedex}`);
        setPokeNumber(0);
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
      fetchPokemon(pokedex[pokeNumber].name);
      fetchPokemonSpecies(pokedex[pokeNumber].name);
      await getEvoChain(evolutionChainUrl);
    }
  };
  const getEvoChain = async (url) => {
    if (!url) return;

    try {
      const response = await axios.get(url);
      console.log("Evolução:", response.data.chain);
      setEvolutionChain(response.data.chain);
    } catch (err) {
      console.error("Erro ao obter a cadeia de evolução:", err);
    }
  };

  useEffect(() => {
    fetchPokedex();
  }, [region]);

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
        <NavBar handleRegion={handleRegion}/>
      <div>
        
        {pokemon ? (
          <Central pokemon={pokemon} onPrev={handlePrev} onNext={handleNext} />
        ) : (
          "vazio"
        )}
      </div>
      <Border />

      {pokemon ? (
        <Right
          pokemon={pokemon}
          pokeSpecie={pokeSpecie}
          evolutionChain={evolutionChain}
        />
      ) : (
        "vazio"
      )}
    </Pokedex>
  );
};

export default Main;
