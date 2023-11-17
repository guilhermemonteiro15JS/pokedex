import {React, useEffect, useState} from 'react'
import {getGen1, kanto, getPokem} from '../../api'
import PokeImage from '../../components/Central/PokeImage/PokeImage'
import axios from 'axios';
import Central from '../../components/Central/Central';

const Main = () => {
const [pokedex, setPokedex] = useState([]);
const [pokemon, setPokemon] = useState(null);
const [pokeNumber, setPokeNumber] = useState(0);

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


const fetchDataForCurrentPokemon = () => {
    if (pokedex.length > 0) {
      fetchPokemon(pokedex[pokeNumber].pokemon_species.name);
    }
  };


 useEffect(()=>{
    fetchPokedex();
}, [])




useEffect(() => {
    fetchDataForCurrentPokemon();
  }, [pokedex, pokeNumber]);

  const handlePrev = (e)=>{
    setPokeNumber((prevNumber) => prevNumber -1)
    
    }

const handleNext = (e)=>{
setPokeNumber((prevNumber) => prevNumber +1)

}
 
  return (
    <div>
         {pokemon ?<Central pokemon={pokemon}/> : "vazio"} 
         <button onClick={handlePrev}>Prev</button>
         <button onClick={handleNext}>Next</button>
          
    </div>
  )
}

export default Main