import React from 'react';
import { PokeTypeH2, PokeTypeUl } from './styled';

const PokeType = ({pokemon}) => {
  return (
    <div>
           <PokeTypeH2>Types:</PokeTypeH2>
      <PokeTypeUl>
        {pokemon.data.types.map((type, index) => (
          <li key={index}> {type.type.name} </li>
        ))}
      </PokeTypeUl>
    </div>
  )
}

export default PokeType