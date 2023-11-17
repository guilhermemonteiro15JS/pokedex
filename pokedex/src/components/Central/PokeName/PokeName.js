import React from 'react'

const PokeName = ({pokemon}) => {
  return (
    <h2>{pokemon.data.name}</h2>
  )
}

export default PokeName