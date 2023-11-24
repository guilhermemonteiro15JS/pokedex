import { React } from "react";
import {
  CountainerDiv,
  Row,
  ButtonNormal,
  ButtonBug,
  ButtonDragon,
  ButtonDark,
  ButtonElectric,
  ButtonFairy,
  ButtonFire,
  ButtonFighting,
  ButtonFlying,
  ButtonGhost,
  ButtonGrass,
  ButtonGround,
  ButtonIce,
  ButtonPoison,
  ButtonPsychic,
  ButtonRock,
  ButtonSteel,
  ButtonWater,
} from "./styled";

const Filter = ({ handleRegion }) => {
  const handleType = (type) => {
    const filterByType = `https://pokeapi.co/api/v2/type/${type}`;
    const bkImage = "/Gen1_Map.png";
    handleRegion(filterByType, bkImage);
  };

  return (
    <CountainerDiv>
      <h2>Filter:</h2>
      <Row>
      <ButtonNormal onClick={() => handleType("normal")}></ButtonNormal>
      <ButtonFire onClick={() => handleType("fire")}></ButtonFire>
      </Row>
      <Row>
      <ButtonGrass onClick={() => handleType("grass")}></ButtonGrass>
      <ButtonWater onClick={() => handleType("water")}></ButtonWater>
      </Row>
      <Row>
      <ButtonBug onClick={() => handleType("bug")}></ButtonBug>
      <ButtonDark onClick={() => handleType("dark")}></ButtonDark>
      </Row>
      <Row>
      <ButtonDragon onClick={() => handleType("dragon")}></ButtonDragon>
      <ButtonElectric onClick={() => handleType("electric")}></ButtonElectric>
      </Row>
      <Row>
      <ButtonFairy onClick={() => handleType("fairy")}></ButtonFairy>
      <ButtonFighting onClick={() => handleType("fighting")}></ButtonFighting>
      </Row>
      <Row>
      <ButtonFlying onClick={() => handleType("flying")}></ButtonFlying>
      <ButtonGhost onClick={() => handleType("ghost")}></ButtonGhost>
      </Row>
      <Row>
      <ButtonGround onClick={() => handleType("ground")}></ButtonGround>
      <ButtonIce onClick={() => handleType("ice")}></ButtonIce>
      </Row>
      <Row>
      <ButtonPsychic onClick={() => handleType("psychic")}></ButtonPsychic>
      <ButtonPoison onClick={() => handleType("poison")}></ButtonPoison>
      </Row>
      <Row>
      <ButtonRock onClick={() => handleType("rock")}></ButtonRock>
      <ButtonSteel onClick={() => handleType("steel")}></ButtonSteel>
      </Row>
    </CountainerDiv>
  );
};

export default Filter;
