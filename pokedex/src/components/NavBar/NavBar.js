import { React} from "react";

const NavBar = ({ handleRegion }) => {
  const handleGen1 = () => {
    /*       const newState = kanto;

      handleRegion(newState); */

    const gen1 = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    const bkImage = "/Gen1_Map.png"
    handleRegion(gen1, bkImage);
  };

  const handleGen2 = () => {
    /*         const newState = Johto;
        
  
        handleRegion(newState); */

    const gen2 = "https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100";
    const bkImage = "/Gen2_Map.png"
    handleRegion(gen2, bkImage);
  };

  const handleGen3 = () => {
    const gen3 = "https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135";
    const bkImage = "/Gen3_Map.png"
    handleRegion(gen3, bkImage);
  };
  
  const handleGen4 = () => {
    const gen4 = "https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107";
    handleRegion(gen4);
  };

  const handleGen5 = () => {
    const gen5 = "https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156";
    handleRegion(gen5);
  };

  const handleGen6 = () => {
    const gen6 = "https://pokeapi.co/api/v2/pokemon/?offset=649&limit=72";
    handleRegion(gen6);
  };
  const handleGen7 = () => {
    const gen7 = "https://pokeapi.co/api/v2/pokemon/?offset=721&limit=88";
    handleRegion(gen7);
  };
  const handleGen8 = () => {
    const gen8 = "https://pokeapi.co/api/v2/pokemon/?offset=809&limit=96";
    handleRegion(gen8);
  };

  const handleGen9 = () => {
    const gen9= "https://pokeapi.co/api/v2/pokemon/?offset=905&limit=103";
    handleRegion(gen9);
  };



  return (
    <div>
      <button onClick={handleGen1}>Gen1</button>
      <button onClick={handleGen2}>Gen2</button>
      <button onClick={handleGen3}>Gen3</button>
      <button onClick={handleGen4}>Gen4</button>
      <button onClick={handleGen5}>Gen5</button>
      <button onClick={handleGen6}>Gen6</button>
      <button onClick={handleGen7}>Gen7</button>
      <button onClick={handleGen8}>Gen8</button>
      <button onClick={handleGen9}>Gen9</button>
    </div>
  );
};

export default NavBar;
