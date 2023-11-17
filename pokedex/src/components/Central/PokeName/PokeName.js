import React from 'react';
import { PokeNameH2 } from './styled';

const PokeName = ({pokemon}) => {
  return (
    <PokeNameH2>{pokemon.data.name}</PokeNameH2>
  )
}

export default PokeName