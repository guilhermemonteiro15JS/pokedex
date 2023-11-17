import React from 'react'

const PokeDescription = ({pokeSpecie}) => {
  return (
    <div>
        <h2>Description:</h2>
        <p>{pokeSpecie.data.flavor_text_entries[1].flavor_text}</p>
    </div>
  )
}

export default PokeDescription