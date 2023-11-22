import React from "react";
import {
  Status,
  PokeStatsH2,
  PokeStatsUl,
  InfoStatus,
  ProgressBarContainer,
} from "./styled";
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

            <InfoStatus key={index}>
              <td>
              <span>{stat.stat.name}</span>
              </td>
              <td>
              <ProgressBar percentage={calculatePercentage(stat.base_stat)} />
              </td>
              <td>
              <span> {stat.base_stat}</span>
              </td>
            </InfoStatus>
        ))}
      </PokeStatsUl>
    </Status>
  );
};
export default PokeStats;
