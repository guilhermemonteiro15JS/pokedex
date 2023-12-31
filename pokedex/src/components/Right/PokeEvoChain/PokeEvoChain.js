import React from 'react';
import {PokeTypeH2, InfoContainer, EvolutionContainer, EvolutionImage } from "./styled";

const PokeEvoChain = ({ evolutionChain}) => {

    const renderEvolutions = () => {
        if (!evolutionChain) {
          return
        }
    
        const evolutions = [];
        let currentPokemon = evolutionChain;

        if (!evolutionChain || Object.keys(evolutionChain).length === 0) {
            return;
          }
    
        while (currentPokemon) {
          const { species, evolves_to } = currentPokemon;
          const pokemonName = species.name;
          const pokeID= species.url.split("/")[6]
          
          const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`;
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