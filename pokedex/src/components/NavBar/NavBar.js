import React, { useState } from "react";
import {
  NavBarStyle,
  Button,
  ImagemPoke,
  DivButton,
  MenuButton,
  ButtonS
} from "./styled";

const NavBar = ({ handleRegion, showButtons }) => {
  const [selectedGen, setSelectedGen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleGen1 = () => {
    const gen1 = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    const bkImage = "/Gen1_Map.png";
    setSelectedGen(gen1);
    handleRegion(gen1, bkImage);
  };

  const handleGen2 = () => {
    const gen2 = "https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100";
    const bkImage = "/Gen2_Map.png";
    setSelectedGen(gen2);
    handleRegion(gen2, bkImage);
  };

  const handleGen3 = () => {
    const gen3 = "https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135";
    const bkImage = "/Gen3_Map.png";
    setSelectedGen(gen3);
    handleRegion(gen3, bkImage);
  };

  const handleGen4 = () => {
    const gen4 = "https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107";
    setSelectedGen(gen4);
    handleRegion(gen4);
  };

  const handleGen5 = () => {
    const gen5 = "https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156";
    setSelectedGen(gen5);
    handleRegion(gen5);
  };

  const handleGen6 = () => {
    const gen6 = "https://pokeapi.co/api/v2/pokemon/?offset=649&limit=72";
    setSelectedGen(gen6);
    handleRegion(gen6);
  };
  const handleGen7 = () => {
    const gen7 = "https://pokeapi.co/api/v2/pokemon/?offset=721&limit=88";
    handleRegion(gen7);
  };
  const handleGen8 = () => {
    const gen8 = "https://pokeapi.co/api/v2/pokemon/?offset=809&limit=96";
    setSelectedGen(gen8);
    handleRegion(gen8);
  };

  const handleGen9 = () => {
    const gen9 = "https://pokeapi.co/api/v2/pokemon/?offset=905&limit=103";
    setSelectedGen(gen9);
    handleRegion(gen9);
  };

  return (
    <NavBarStyle>
      <ImagemPoke src="/PokémonLogo.png" alt="Pokémon" />
      <MenuButton
        onClick={toggleMenu}
        isOpen={menuOpen}
        className={menuOpen ? "open" : ""}
      >
        <div />
        <div />
        <div />
      </MenuButton>
      <DivButton isOpen={menuOpen}>
        {showButtons&&(<ButtonS
          isSelected={
            selectedGen === "https://pokeapi.co/api/v2/pokemon/?limit=151"
          }
          onClick={handleGen1}
        >
          <img
            class="imagem"
            src="https://i.pinimg.com/originals/b7/e1/8c/b7e18c4d7e8b6b6a90b3603fd6c14bec.jpg"
          />
         <span className="now">Gen 1</span>

          Gen1
        </ButtonS>
        )}
        {showButtons && (<ButtonS
          isSelected={
            selectedGen ===
            "https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100"
          }
          onClick={handleGen2}
        >
           <img
            class="imagem"
            src="https://i.pinimg.com/originals/b7/e1/8c/b7e18c4d7e8b6b6a90b3603fd6c14bec.jpg"
          />
         <span className="now">Gen 2</span>
          Gen2
        </ButtonS>
  )}
        {showButtons && (<ButtonS
          isSelected={
            selectedGen ===
            "https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135"
          }
          onClick={handleGen3}
        >
          <img
            class="imagem"
            src="https://i.pinimg.com/originals/b7/e1/8c/b7e18c4d7e8b6b6a90b3603fd6c14bec.jpg"
          />
         <span className="now">Gen 3</span>
          Gen3
        </ButtonS>
        )}

        {showButtons&&(<ButtonS
          isSelected={
            selectedGen ===
            "https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107"
          }
          onClick={handleGen4}
        >
          <img
            class="imagem"
            src="https://i.pinimg.com/originals/b7/e1/8c/b7e18c4d7e8b6b6a90b3603fd6c14bec.jpg"
          />
         <span className="now">Gen 4</span>
          Gen4
        </ButtonS>
        )}
       {showButtons &&(<ButtonS
          isSelected={
            selectedGen ===
            "https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156"
          }
          onClick={handleGen5}
        >
          <img
            class="imagem"
            src="https://i.pinimg.com/originals/b7/e1/8c/b7e18c4d7e8b6b6a90b3603fd6c14bec.jpg"
          />
         <span className="now">Gen 5</span>
          Gen5
        </ButtonS>
       )}
        {showButtons&& (<ButtonS
          isSelected={
            selectedGen ===
            "https://pokeapi.co/api/v2/pokemon/?offset=649&limit=72"
          }
          onClick={handleGen6}
        >
          <img
            class="imagem"
            src="https://i.pinimg.com/originals/b7/e1/8c/b7e18c4d7e8b6b6a90b3603fd6c14bec.jpg"
          />
         <span className="now">Gen 6</span>
          Gen6
        </ButtonS>
        )}
        {showButtons&&(<ButtonS
          isSelected={
            selectedGen ===
            "https://pokeapi.co/api/v2/pokemon/?offset=721&limit=88"
          }
          onClick={handleGen7}
        >
          <img
            class="imagem"
            src="https://i.pinimg.com/originals/b7/e1/8c/b7e18c4d7e8b6b6a90b3603fd6c14bec.jpg"
          />
         <span className="now">Gen 7</span>
          Gen7
        </ButtonS>
        )}
        {showButtons&&(<ButtonS
          isSelected={
            selectedGen ===
            "https://pokeapi.co/api/v2/pokemon/?offset=809&limit=96"
          }
          onClick={handleGen8}
        >
          <img
            class="imagem"
            src="https://i.pinimg.com/originals/b7/e1/8c/b7e18c4d7e8b6b6a90b3603fd6c14bec.jpg"
          />
         <span className="now">Gen 8</span>
          Gen8
        </ButtonS>
        )}
        {showButtons&&(<ButtonS
          isSelected={
            selectedGen ===
            "https://pokeapi.co/api/v2/pokemon/?offset=905&limit=103"
          }
          onClick={handleGen9}
        >
          <img
            class="imagem"
            src="https://i.pinimg.com/originals/b7/e1/8c/b7e18c4d7e8b6b6a90b3603fd6c14bec.jpg"
          />
         <span className="now">Gen 9</span>
          Gen9
        </ButtonS>
        )}
      </DivButton>
    </NavBarStyle>
  );
};

export default NavBar;
