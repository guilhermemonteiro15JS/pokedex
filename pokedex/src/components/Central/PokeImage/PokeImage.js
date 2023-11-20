import React from "react";
import { ImgPoke, ImgPokeDiv } from "./styled";

const PokeImage = ({ pokemon }) => {

  return (
    <ImgPokeDiv>
      <ImgPoke src={pokemon.data.sprites.other["official-artwork"].front_default}/>
      
    </ImgPokeDiv>
  );
};

export default PokeImage;
