/* import React, { useState } from "react";
import { PokeFilterUl, InfoFilter } from "./styled";

const Filter = (pokemon) => {
  const [isselected, setisselected] = useState(null);

  const handleTypeClick = (type) => {
    
    setisselected(type);
  };

  const types = pokemon.types || [];

  return (
    <div>
         <div>
        {pokemon.types.map((type, index) => (
          <button
            key={index}
            onClick={() => handleTypeClick(type.type.name)}
            className={isselected === type.type.name ? "active" : ""}
          >
            {type.type.name}
          </button>
        ))}
      </div>

      <PokeFilterUl>
        {pokemon.types
          .filter((type) => !isselected || type.type.name === isselected)
          .map((type, index) => (
            <li key={index}>
              {type.type.name}
              <InfoFilter>
                <div>
                  <span>{type.type.name}</span>
                </div>
                <button />
              </InfoFilter>
            </li>
          ))}
      </PokeFilterUl>
    </div>
  );
};

export default Filter;
 */

import { React } from "react";

const Filter = ({ handleRegion }) => {
  const handleType = (type) => {
    const filterByType = `https://pokeapi.co/api/v2/type/${type}`;
    const bkImage = "/Gen1_Map.png";
    handleRegion(filterByType, bkImage);
  };

  return (
    <div>
      Filter
      <button onClick={() => handleType("normal")}>Normal</button>
      <button onClick={() => handleType("fire")}>Fire</button>
      <button onClick={() => handleType("grass")}>Grass</button>
      <button onClick={() => handleType("water")}>Water</button>
      <button onClick={() => handleType("bug")}>Bug</button>
      <button onClick={() => handleType("dark")}>Dark</button>
      <button onClick={() => handleType("dragon")}>Dragon</button>
      <button onClick={() => handleType("electric")}>electric</button>
      <button onClick={() => handleType("fairy")}>Fairy</button>
      <button onClick={() => handleType("fighting")}>Fighting</button>
      <button onClick={() => handleType("flying")}>Flying</button>
      <button onClick={() => handleType("ghost")}>Ghost</button>
      <button onClick={() => handleType("ground")}>Ground</button>
      <button onClick={() => handleType("ice")}>Ice</button>
      <button onClick={() => handleType("psychic")}>Psychic</button>
      <button onClick={() => handleType("poison")}>Poison</button>
      <button onClick={() => handleType("rock")}>Rock</button>
      <button onClick={() => handleType("steel")}>Steel</button>
    </div>
  );
};

export default Filter;
