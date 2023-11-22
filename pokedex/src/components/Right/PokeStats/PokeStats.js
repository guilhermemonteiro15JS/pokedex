import React from 'react';
import { Status, PokeStatsH2, PokeStatsUl, InfoStatus, ProgressBarContainer } from './styled';
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
            <InfoStatus>
              <div>
              <span>{stat.stat.name}</span>
              </div>
              {/* <ProgressBarContainer> */}
              <ProgressBar percentage={calculatePercentage(stat.base_stat)} />
              {/* </ProgressBarContainer> */}
              <div>
              <span> {stat.base_stat}</span>
              </div>
            </InfoStatus>
          </li>
        ))}
      </PokeStatsUl>
    </Status>
  );
};
export default PokeStats;
