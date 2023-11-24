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