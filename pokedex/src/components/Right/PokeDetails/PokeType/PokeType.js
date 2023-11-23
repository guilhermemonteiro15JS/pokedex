import React from 'react';
import { PokeTypeH2, PokeTypeUl, StyledImage, Table } from './styled';
import { getTypeImage } from '../SourceForType/SourceForType';

const PokeType = ({pokemon}) => {
  return (
    <div>
           <PokeTypeH2>Types:</PokeTypeH2>
      <PokeTypeUl>
        {pokemon.data.types.map((type, index) => (
          <Table key={index}> 
          <StyledImage 
          src= { getTypeImage(type.type.name)}
          alt= {type.type.name}/>
          {type.type.name}
           </Table>
        ))}
      </PokeTypeUl>
    </div>
  )
}

export default PokeType