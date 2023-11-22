import { React, useEffect, useState } from "react";
import { getPokem, getPokeSpecies } from "../../api";

import axios from "axios";
import Central from "../../components/Central/Central";
import Right from "../../components/Right/Right";
import { Pokedex, Border, PokedexMini } from "./styled";
import NavBar from "../../components/NavBar/NavBar";

const Main = () => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [pokeNumber, setPokeNumber] = useState(0);
  const [pokeSpecie, setPokeSpecie] = useState(null);
  const [evolutionChainUrl, setEvolutionChainUrl] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [region, setRegion] = useState(null);
  const [bkImage, setBkImage] = useState(null);

  const regionLenght = pokedex.length;

  const handleRegion = (newRegion, bkImage) => {
    setRegion(newRegion);
    setBkImage(bkImage);
  };

  const fetchPokedex = async () => {
    console.log(region);
    try {
      const pokex = await axios.get(region);
      console.log(pokex);
      setPokedex(pokex.data.results);
      setPokeNumber(0);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchPokemon = async (pokemonID) => {
    try {
      const pokeData = await axios.get(`${getPokem}${pokemonID}`);
      console.log(pokeData.data);
      setPokemon(pokeData);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchPokemonSpecies = async (pokemonID) => {
    try {
      const pokem = await axios.get(`${getPokeSpecies}${pokemonID}`);
      console.log(pokem.data);
      setPokeSpecie(pokem);
      const evolutionChainUrl = pokem.data.evolution_chain.url;
      console.log(evolutionChainUrl);
      setEvolutionChainUrl(evolutionChainUrl);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchDataForCurrentPokemon = async () => {
    if (pokedex.length > 0) {
      const pokUrls = pokedex[pokeNumber].url;
      const PokeID = pokUrls.split("/")[6];
      fetchPokemon(PokeID);
      fetchPokemonSpecies(PokeID);
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
      console.error(err);
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
    <Pokedex bkImage={bkImage}>
      <NavBar handleRegion={handleRegion} />
      <PokedexMini>
        <div>
          {pokemon ? (
            <Central
              pokemon={pokemon}
              onPrev={handlePrev}
              onNext={handleNext}
              regionLenght={regionLenght}
              pokeNumber={pokeNumber}
            />
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
      </PokedexMini>
    </Pokedex>
  );
};
export default Main;
