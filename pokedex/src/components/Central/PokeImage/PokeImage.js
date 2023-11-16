import React from "react";

const PokeImage = ({ pokemon }) => {
    console.log(pokemon.data.name)
  return (
    <div>
     
      <img src={pokemon.data.sprites.other.home.front_default}/>
    </div>
  );
};

export default PokeImage;
