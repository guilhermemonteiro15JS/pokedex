import React from 'react';
import {PokeTypeH2, InfoContainer, EvolutionContainer, EvolutionImage } from "./styled";

const PokeEvoChain = ({pokemon, pokeSpecie, evolutionChain}) => {

    const renderEvolutions = () => {
        if (!evolutionChain) {
          return <p>Não há informações de evolução disponíveis.</p>;
        }
    
        const evolutions = [];
        let currentPokemon = evolutionChain;

        if (!evolutionChain || Object.keys(evolutionChain).length === 0) {
            console.log("Cadeia de evolução vazia ou inválida.");
            return;
          }
    
        while (currentPokemon) {
            console.log("currentPokemon:", currentPokemon);
          const { species, evolves_to } = currentPokemon;
          const pokemonName = species.name;
          const pokeUrl= species.url.split("/")[6]
          console.log("Poke url:", pokeUrl);
          
          const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeUrl}.png`;
          evolutions.push(
            <EvolutionContainer key={pokemonName}>
              <EvolutionImage src={pokemonImage} alt={pokemonName} />
             {/*  <p>{pokemonName}</p> */}
            </EvolutionContainer>
          );
    
          if (evolves_to && evolves_to.length > 0) {
            currentPokemon = evolves_to[0];
          } else {
            currentPokemon = null;
          }
        }
    
        return evolutions;
      };

  return (
    <InfoContainer>
      <PokeTypeH2>Evolution Chain:</PokeTypeH2>
      <EvolutionContainer>
        {renderEvolutions()}
      </EvolutionContainer>
    </InfoContainer>
  );
};

export default PokeEvoChain