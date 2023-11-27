import { React, useEffect, useState } from "react";
import { getPokem, getPokeSpecies } from "../../api";

import axios from "axios";
import Central from "../../components/Central/Central";
import Right from "../../components/Right/Right";
import { Pokedex, Border, BorderTwo, PokedexMini } from "./styled";
import NavBar from "../../components/NavBar/NavBar";
import Left from "../../components/Left/Left";

const Main = () => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [pokeNumber, setPokeNumber] = useState(0);
  const [pokeSpecie, setPokeSpecie] = useState(null);
  const [evolutionChainUrl, setEvolutionChainUrl] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [region, setRegion] = useState(null);
  const [bkImage, setBkImage] = useState(null);
  const [pokeID, setPokeID] = useState(null);

  const regionLenght = pokedex.length;

  const showButtons= true;

  const handleRegion = (newRegion, bkImage) => {
    console.log("region", newRegion);
    setRegion(newRegion);
    setBkImage(bkImage);
  };

  const handleSearch = (searchFor) => {
    console.log("Searching for:", searchFor);
    try {
      setPokeID(searchFor);
      console.log("New pokeID:", searchFor);
      setPokedex([]);
    } catch (error) {
      console.error("Error in handleSearch:", error);
    }
  };

  const fetchPokedex = async () => {
    try {
      const pokex = await axios.get(region);
      setPokedex(pokex.data.results ? pokex.data.results : pokex.data.pokemon);
      setPokeNumber(0);
      console.log("region", pokex);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchPokemon = async (pokemonID) => {
    if (pokemonID === null) {
      console.warn("Invalid pokemonID:", pokemonID);
      return;
    }
    const url = `${getPokem}${pokemonID}`;
    console.log("Pokemon API URL:", url);
    try {
      const pokeData = await axios.get(`${getPokem}${pokemonID}`);
      setPokemon(pokeData);
    } catch (err) {
      console.error("Error fetching Pokemon:", err);
      console.error("Error response:", err.response);
    }
  };

  const fetchPokemonSpecies = async (pokemonID) => {
    try {
      const pokem = await axios.get(`${getPokeSpecies}${pokemonID}`);
      setPokeSpecie(pokem);
      const evolutionChainUrl = pokem.data.evolution_chain.url;
      setEvolutionChainUrl(evolutionChainUrl);
    } catch (err) {
      console.error("Error fetching Pokemon species:", err);
    }
  };

  const fetchDataForCurrentPokemon = async () => {
    if (pokedex.length > 0) {
      const pokUrls = pokedex[pokeNumber].url
        ? pokedex[pokeNumber].url
        : pokedex[pokeNumber].pokemon.url;
      const PokeID = pokUrls.split("/")[6];
      setPokeID(PokeID);
      fetchPokemon(pokeID);
      fetchPokemonSpecies(pokeID);
      await getEvoChain(evolutionChainUrl);
    } else {
      fetchPokemon(pokeID);
      fetchPokemonSpecies(pokeID);
      await getEvoChain(evolutionChainUrl);
    }
  };
  const getEvoChain = async (url) => {
    if (!url) return;

    try {
      const response = await axios.get(url);
      setEvolutionChain(response.data.chain);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPokedex();
  }, [region]);

  useEffect(() => {
    fetchDataForCurrentPokemon();
  }, [pokedex, pokeNumber, pokeID]);

  useEffect(() => {
    if (evolutionChainUrl) {
      getEvoChain(evolutionChainUrl);
    }
  }, [evolutionChainUrl]);

  const handlePrev = (e) => {
    e.preventDefault();
    setPokeNumber((prevNumber) => prevNumber - 1);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setPokeNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <Pokedex bkImage={bkImage}>
      <NavBar handleRegion={handleRegion} showButtons={showButtons}/>
      <PokedexMini>
        {pokemon ? (
          <Left handleSearch={handleSearch} handleRegion={handleRegion} />
        ) : (
          ""
        )}

        {pokemon ? <BorderTwo /> : ""}
        {pokemon ? (
          <Central
            pokemon={pokemon}
            onPrev={handlePrev}
            onNext={handleNext}
            regionLenght={regionLenght}
            pokeNumber={pokeNumber}
          />
        ) : (
          ""
        )}

        {pokemon ? <Border /> : "" }

        {pokemon ? (
          <Right
            pokemon={pokemon}
            pokeSpecie={pokeSpecie}
            evolutionChain={evolutionChain}
          />
        ) : (
          ""
        )}
      </PokedexMini>
    </Pokedex>
  );
};
export default Main;
