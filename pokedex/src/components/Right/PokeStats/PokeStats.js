import React from 'react';
import { Status, PokeStatsH2, PokeStatsUl } from './styled';
import ProgressBar from "../ProgressBar/ProgressBar"; 

const calculatePercentage = (baseStat) => {
  return baseStat;
};

const PokeStats = ({ pokemon }) => {
  return (
    <Status>
      <PokeStatsH2>Stats:</PokeStatsH2>
      <PokeStatsUl>
        {pokemon.data.stats.map((stat, index) => (
          <li key={index}>
            <div>
              <span>{stat.stat.name}</span>
              <ProgressBar percentage={calculatePercentage(stat.base_stat)} />
            </div>
          </li>
        ))}
      </PokeStatsUl>
    </Status>
  );
};
export default PokeStats;
