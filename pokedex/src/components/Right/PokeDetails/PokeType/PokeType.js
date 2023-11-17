import React from 'react'

const PokeType = ({pokemon}) => {
  return (
    <div>
           <h2>Types:</h2>
      <ul>
        {pokemon.data.types.map((type, index) => (
          <li key={index}> {type.type.name} </li>
        ))}
      </ul>
    </div>
  )
}

export default PokeType