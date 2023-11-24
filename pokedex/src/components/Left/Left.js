import React from 'react'
import PokeSearch from './PokeSearch/PokeSearch'
import { LefttStyle } from "./styled";
import Filter from './Filter/Filter';

const Left = ({handleSearch, pokemon, handleRegion}) => {
  return (
    <LefttStyle>
        <PokeSearch pokemon={pokemon} handleSearch={handleSearch}/>
        <Filter handleRegion={handleRegion}/>
    </LefttStyle>
  )
}

export default Left;