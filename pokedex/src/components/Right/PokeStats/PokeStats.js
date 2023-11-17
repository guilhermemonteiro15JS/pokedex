import React from 'react';
import { Status } from './styled';

const PokeStats = ({ pokemon }) => {
  return (
    <Status>
      <h2>Stats:</h2>
      <ul>
        {pokemon.data.stats.map((stat, index) => (
          <li key={index}> {stat.stat.name} : {stat.base_stat} </li>
        ))}
      </ul>
    </Status>
  );
}

export default PokeStats;