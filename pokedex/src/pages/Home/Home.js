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
  Image, 
  Button, 
  TextCountainer, 
  Title,
  SubTitle,
  HomeD
} from "./styled";

const Home = () => {
  const showButtons = false;

  return (
    <HomeD>
      {/* <NavBar showButtons={showButtons} /> */}
      <TextCountainer>
      <Title> Aqui poderás ver todos os Pokemons das várias gerações. </Title>
      <SubTitle> Clica no centro da Pokebola e revive memórias de infância.</SubTitle>
      </TextCountainer>
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
    </HomeD>
  );
};

export default Home;
