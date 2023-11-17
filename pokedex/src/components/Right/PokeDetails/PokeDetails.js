import React from 'react'
import PokeType from "./PokeType/PokeType";
import PokeDescription from "./PokeDescription/PokeDescription";

const PokeDetails = ({ pokemon , pokeSpecie}) => {
  return (
    <div>
        <PokeDescription pokeSpecie={pokeSpecie} />
        <PokeType pokemon={pokemon}/>
    </div>
  )
}

export default PokeDetails