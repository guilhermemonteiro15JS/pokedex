import { React, useEffect, useState } from "react";
import { getPokem, getPokeSpecies } from "../../api";

import axios from "axios";
import Central from "../../components/Central/Central";
import Right from "../../components/Right/Right";
import { Pokedex, Border, BorderTwo, PokedexMini,LoadingImg } from "./styled";
import NavBar from "../../components/NavBar/NavBar";
import Left from "../../components/Left/Left";

const Main = () => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [pokeNumber, setPokeNumber] = useState(0);
  const [pokeSpecie, setPokeSpecie] = useState(null);
  const [evolutionChainUrl, setEvolutionChainUrl] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [region, setRegion] = useState("https://pokeapi.co/api/v2/pokemon/?limit=151");
  const [bkImage, setBkImage] = useState("/Gen1_Map.png");
  const [pokeID, setPokeID] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const regionLenght = pokedex.length;

  const showButtons= true;


  useEffect(() => {
    fetchPokedex(region);
  }, [region] );

  useEffect(() => {
    fetchDataForCurrentPokemon(); 

  }, [pokedex, pokeNumber, pokeID]);

  useEffect(() => {
    if (evolutionChainUrl) {
      getEvoChain(evolutionChainUrl);
    }
  }, [evolutionChainUrl]);




  const handleRegion = (newRegion, bkImage) => {
    setRegion(newRegion);
    setBkImage(bkImage);
  };

  const handleSearch = (searchFor) => {
    try {
      setPokeID(searchFor);
      setPokedex([]);
    } catch (error) {
      console.error("Error in handleSearch:", error);
    }
  };

  const fetchPokedex = async (teste) => {
    try {
      
      const pokex = await axios.get(teste);
      setPokedex(pokex.data.results ? pokex.data.results : pokex.data.pokemon);
      setPokeNumber(0);

    } catch (err) {
      console.error(err);
    }
  };

  const fetchPokemon = async (pokemonID) => {
    if (pokemonID === null) {
      console.warn("Invalid pokemonID:", pokemonID);
      return;
    }
    try {
      const pokeData = await axios.get(`${getPokem}${pokemonID}`);
      setPokemon(pokeData);
    } catch (err) {
      console.error("Error fetching Pokemon:", err);
    }
  };

  const fetchPokemonSpecies = async (pokemonID) => {
    try {
      const pokem = await axios.get(`${getPokeSpecies}${pokemonID}`);
      setPokeSpecie(pokem);
      /* const evolutionChainUrl = pokem.data.evolution_chain.url; */
      setEvolutionChainUrl(pokem.data.evolution_chain.url);
    } catch (err) {
      console.error("Error fetching Pokemon species:", err);
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
  const fetchDataForCurrentPokemon = async () => {
    if (pokedex.length > 0 || pokeID) {
      setLoading(false);
      const pokUrls =
        pokedex[pokeNumber]?.url || pokedex[pokeNumber]?.pokemon?.url;
      const PokeID = pokUrls?.split("/")[6];
      setPokeID(PokeID);
    }

    await Promise.all([
      fetchPokemon(pokeID),
      fetchPokemonSpecies(pokeID),
      getEvoChain(evolutionChainUrl),
    ]);

    if (!pokemon && !bkImage && !pokeSpecie && !evolutionChainUrl) {
      setLoading(true);
    } else if(pokemon && bkImage){
      setLoading(false);
    } 
  };


 
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
      {loading && <LoadingImg src="Loading.gif" alt="Loading" />}
        {!loading && pokemon && showFilter && (
          <Left handleSearch={handleSearch} handleRegion={handleRegion} />
        )}
        {!loading && pokemon && showFilter && <BorderTwo />}
        {!loading && pokemon && (
          <Central
            pokemon={pokemon}
            onPrev={handlePrev}
            onNext={handleNext}
            regionLenght={regionLenght}
            pokeNumber={pokeNumber}
            showDetails={showDetails}
            setShowDetails={setShowDetails}
            showFilter={showFilter}
            setShowFilter={setShowFilter}

          />
        )}
        {!loading && pokemon && showDetails && <Border />}
        {!loading && pokemon && showDetails && (
          <Right
            pokemon={pokemon}
            pokeSpecie={pokeSpecie}
            evolutionChain={evolutionChain}
          />
        )}
      </PokedexMini>
    </Pokedex>
  );
};
export default Main;
