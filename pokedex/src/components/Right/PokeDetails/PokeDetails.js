import React from 'react'
import PokeType from "./PokeType/PokeType";
import PokeDescription from "./PokeDescription/PokeDescription";
import { PokeDetailsDiv } from './styled';


const PokeDetails = ({ pokemon , pokeSpecie}) => {
  return (
    <PokeDetailsDiv>
        <PokeDescription pokeSpecie={pokeSpecie} />
        <PokeType pokemon={pokemon}/>
    </PokeDetailsDiv>
  )
};

export default PokeDetails;