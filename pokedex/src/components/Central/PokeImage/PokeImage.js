import React from "react";

const PokeImage = ({ pokemon }) => {

    
  return (
    <div>
     
      <img src={pokemon.data.sprites.other.home.front_default}/>
    </div>
  );
};

export default PokeImage;
