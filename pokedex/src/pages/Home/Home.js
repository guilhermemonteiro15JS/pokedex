import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import {Link } from "react-router-dom"
import {
  PokedexFechada,
  Pokedex,
  BrowserButtonsContainer,
  BrowserButton,
  Capa,
  CapaContainer, 
  Image, Button
} from "./styled";

const Home = () => {
  const showButtons = false;

  return (
    <>
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
              <Image >
                <Button/>
              </Image>
            </Capa>
            </Link>
          </CapaContainer>
        </PokedexFechada>
      </Pokedex>
    </>
  );
};

export default Home;
