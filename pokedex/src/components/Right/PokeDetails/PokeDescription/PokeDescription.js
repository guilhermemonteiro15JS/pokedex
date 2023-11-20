import React from 'react';
import { DescriptionH2, PokeDescriptionDiv, TextP } from './styled';

const PokeDescription = ({pokeSpecie}) => {
  return (
    <PokeDescriptionDiv>
        <DescriptionH2>Description:</DescriptionH2>
        <TextP>{pokeSpecie.data.flavor_text_entries[0].flavor_text}</TextP>
    </PokeDescriptionDiv>
  )
}

export default PokeDescription