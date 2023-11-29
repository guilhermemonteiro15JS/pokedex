import React, { useState } from "react";
import { SearchDiv, Input, BtnSearch } from "./styled";

const PokeSearch = ({handleSearch, pokemon}) => {
    const [searchText, setSearchText] = useState("")
    const nationalPokedex = "https://pokeapi.co/api/v2/pokedex/1"

    const handleClick = () => {
        if(searchText.length>0){
        handleSearch(searchText, );
        }else{
            handleSearch("pikachu")
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        handleClick();
      };

  return (
    <SearchDiv>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a pokemon"
          style={{
            color: '#0c4767',
            placeholder: '#0c4767',
          }}

          value={pokemon}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <BtnSearch type="button" onClick={handleClick}>
          Search
        </BtnSearch>
      </form>
    </SearchDiv>
  );
};

export default PokeSearch;
