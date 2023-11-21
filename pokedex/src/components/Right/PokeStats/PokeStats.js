import React from 'react';
import { Status, PokeStatsH2, PokeStatsUl } from './styled';

const PokeStats = ({ pokemon }) => {
  return (
    <Status>
      <PokeStatsH2>Stats:</PokeStatsH2>
      <PokeStatsUl>
        {pokemon.data.stats.map((stat, index) => (
          <li key={index}> {stat.stat.name} : {stat.base_stat} </li>
        ))}
      </PokeStatsUl>
    </Status>
  );
};
export default PokeStats;
