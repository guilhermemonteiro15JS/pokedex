import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import {
  PokedexFechada,
  Pokedex,
  BrowserButtonsContainer,
  BrowserButton,
  Capa,
  CapaContainer, 
  Image
} from "./styled";

const Home = () => {
  const showButtons = false;

  return (
    <div>
      <NavBar showButtons={showButtons} />
      <Pokedex>
        <PokedexFechada>
          <BrowserButtonsContainer>
            <BrowserButton />
            <BrowserButton />
            <BrowserButton />
          </BrowserButtonsContainer>
          <CapaContainer>
            <Link to="/main">
            <Capa>
              <Image src="./pokebola.png" alt="Pokebola"/>
            </Capa>
            </Link>
          </CapaContainer>
        </PokedexFechada>
      </Pokedex>
    </div>
  );
};

export default Home;
