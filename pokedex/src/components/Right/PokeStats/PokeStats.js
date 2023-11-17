import React from 'react';

const PokeStats = ({ pokemon }) => {
  return (
    <div>
      <h2>Stats:</h2>
      <ul>
        {pokemon.data.stats.map((stat, index) => (
          <li key={index}> {stat.stat.name} : {stat.base_stat} </li>
        ))}
      </ul>
    </div>
  );
}

export default PokeStats;