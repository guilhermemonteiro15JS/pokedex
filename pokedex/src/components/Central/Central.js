import React from 'react'
import PokeImage from './PokeImage/PokeImage'
import PokeName from './PokeName/PokeName'

const Central = ({pokemon}) => {
  return (
    <div>
        <PokeImage pokemon={pokemon}/>
        <PokeName pokemon={pokemon}/>
    </div>
  )
}

export default Central