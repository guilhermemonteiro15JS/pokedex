import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a pokemon"
          value={pokemon}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="button" onClick={handleClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default PokeSearch;
