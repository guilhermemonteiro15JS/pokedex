import React from 'react'
import PokeSearch from './PokeSearch/PokeSearch'
import { LefttStyle } from "./styled";

const Left = ({handleSearch, pokemon}) => {
  return (
    <LefttStyle>
        <PokeSearch pokemon={pokemon} handleSearch={handleSearch}/>
    </LefttStyle>
  )
}

export default Left;