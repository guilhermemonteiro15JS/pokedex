import React, { useState } from "react";
import { SearchDiv, Input } from "./styled";

const PokeSearch = ({handleSearch, pokemon}) => {
    const [searchText, setSearchText] = useState("")


    const handleClick = () => {
        if(searchText.length>0){
        handleSearch(searchText);
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
        <button type="button" onClick={handleClick}>
          Search
        </button>
      </form>
    </SearchDiv>
  );
};

export default PokeSearch;
