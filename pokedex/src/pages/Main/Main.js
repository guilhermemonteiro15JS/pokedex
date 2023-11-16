import {React, useEffect, useState} from 'react'
import {getGen1, kanto, getPokem} from '../../api'
import PokeImage from '../../components/Central/PokeImage/PokeImage'
import axios from 'axios';

const Main = () => {
const [pokedex, setPokedex] = useState([]);
const [pokemon, setPokemon] = useState(null);
let pokeNumber= 0;

const fetchPokedex= async () =>{
    try{
        const pokex = await axios.get(kanto);
        console.log(pokex.data)
        setPokedex(pokex.data.pokemon_entries)
        console.log(pokedex)
    }catch(err) {

    }
    
}


const fetchPokemon= async (pokemonName) =>{
    try{
        const pokem = await axios.get(`${getPokem}${pokemonName}`);
        console.log(pokem.data)
        setPokemon(pokem)
    }catch(err) {

    }

} 

 useEffect(()=>{
    fetchPokedex();
}, [])





useEffect(()=>{
    if (pokedex.length > 0) {
        fetchPokemon(pokedex[pokeNumber].pokemon_species.name);
    }
}, [pokedex])


const handleNext = ()=>{
   return pokeNumber +1
}
 
  return (
    <div>
         {pokemon ?<PokeImage pokemon={pokemon}/> : "vazio"} 
         <button onClick={handleNext}>Next</button>
          
    </div>
  )
}

export default Main