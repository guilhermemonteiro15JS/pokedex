
import React, {useState} from "react";
import { NavBarStyle, Button } from "./styled";

const NavBar = ({ handleRegion }) => {
  const [selectedGen, setSelectedGen] = useState(null);

  const handleGen = (genUrl) => {
    handleRegion(genUrl);
    setSelectedGen(genUrl);
  };

  return (
    <NavBarStyle>
      <Button isSelected={selectedGen === "https://pokeapi.co/api/v2/pokemon/?limit=151"} onClick={() => handleGen("https://pokeapi.co/api/v2/pokemon/?limit=151")}>Gen1</Button>
      <Button isSelected={selectedGen === "https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100"} onClick={() => handleGen("https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100")}>Gen2</Button>
      <Button isSelected={selectedGen === "https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135"}onClick={() => handleGen("https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135")}>Gen3</Button>
      <Button isSelected={selectedGen === "https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107"}onClick={() => handleGen("https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107")}>Gen4</Button>
      <Button isSelected={selectedGen === "https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156"}onClick={() => handleGen("https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156")}>Gen5</Button>
      <Button isSelected={selectedGen === "https://pokeapi.co/api/v2/pokemon/?offset=649&limit=72"}onClick={() => handleGen("https://pokeapi.co/api/v2/pokemon/?offset=649&limit=72")}>Gen6</Button>
      <Button isSelected={selectedGen === "https://pokeapi.co/api/v2/pokemon/?offset=721&limit=88"}onClick={() => handleGen("https://pokeapi.co/api/v2/pokemon/?offset=721&limit=88")}>Gen7</Button>
      <Button isSelected={selectedGen === "https://pokeapi.co/api/v2/pokemon/?offset=809&limit=96"}onClick={() => handleGen("https://pokeapi.co/api/v2/pokemon/?offset=809&limit=96")}>Gen8</Button>
      <Button isSelected={selectedGen === "https://pokeapi.co/api/v2/pokemon/?offset=905&limit=103"}onClick={() => handleGen("https://pokeapi.co/api/v2/pokemon/?offset=905&limit=103")}>Gen9</Button>
    </NavBarStyle>
  );
};

export default NavBar;