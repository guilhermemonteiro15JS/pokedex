import { styled } from "styled-components";

export const CountainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  gap: 4px;

  @media (max-width: 875px) {
    flex-direction: row;
  }
`;

export const H2 = styled.h2`

@media (max-width: 1175px) {
   font-size:18px;
   margin:1px;
  }
  @media (max-width: 875px) {
    display: none;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  border-bottom: 3px;

  @media (max-width: 1175px) {
gap: 10px;
  }

  @media (max-width: 875px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const ButtonNormal = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Normal.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;

  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }

  @media (max-width: 875px) {
    flex: 1;
    margin: 4px; 
    width: 25px;
    height: 25px;
  }
`;
export const ButtonBug = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Bug.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px;
    width: 25px;
    height: 25px;
  }
`;
export const ButtonDark = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Dark.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px;
    width: 25px;
    height: 25px;
  }
`;
export const ButtonDragon = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Dragon.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px; 
    width: 25px;
    height: 25px;
  }
`;
export const ButtonElectric = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Electric.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px;
    width: 25px;
    height: 25px;
  }
`;
export const ButtonFairy = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Fairy.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px;
    width: 25px;
    height: 25px;
  }
`;
export const ButtonFire = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Fire.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px; 
    width: 25px;
    height: 25px;
  }
`;
export const ButtonFighting = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Fighting.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px;
    width: 25px;
    height: 25px;
  }
`;
export const ButtonFlying = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Flying.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px;
    width: 25px;
    height: 25px;
  }
`;
export const ButtonGhost = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Ghost.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px;
    width: 25px;
    height: 25px;
  }
`;
export const ButtonGrass = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Grass.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px;
    width: 25px;
    height: 25px;
  }
`;
export const ButtonGround = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Ground.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px;
    width: 25px;
    height: 25px;
  }
`;
export const ButtonIce = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Ice.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px;
    width: 25px;
    height: 25px;
  }
`;
export const ButtonPoison = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Poison.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px;
    width: 25px;
    height: 25px;
  }
`;
export const ButtonPsychic = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Psychic.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px;
    width: 25px;
    height: 25px;
  }
`;
export const ButtonRock = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Rock.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px;
    width: 25px;
    height: 25px;
  }
`;

export const ButtonSteel = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/Steel.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px;
    width: 25px;
    height: 25px;
  }
`;
export const ButtonWater = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: url(${process.env.PUBLIC_URL}/images_Type/water.png);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1175px) {
    flex: 1;
    margin: 1px; 
    width: 30px;
    height: 30px;
  }
  @media (max-width: 875px) {
    flex: 1;
    margin: 4px;
    width: 25px;
    height: 25px;
  }
`;
