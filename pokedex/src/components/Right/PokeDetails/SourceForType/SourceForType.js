export const getTypeImage = (type) =>{
    switch (type) {
        case 'water':
          return process.env.PUBLIC_URL +'./images_Type/water.png';
        case 'rock':
          return process.env.PUBLIC_URL +'./images_Type/rock.png';
        case 'bug':
            return process.env.PUBLIC_URL +'./images_Type/bug.png';
        case 'dark':
            return process.env.PUBLIC_URL +'./images_Type/dark.png';
        case 'dragon':
            return process.env.PUBLIC_URL +'./images_Type/dragon.png';
        case 'electric':
            return process.env.PUBLIC_URL +'./images_Type/electric.png';
        case 'fairy':
          return process.env.PUBLIC_URL +'./images_Type/fairy.png';
        case 'fighting':
          return process.env.PUBLIC_URL +'./images_Type/fighting.png';
        case 'fire':
            return process.env.PUBLIC_URL +'./images_Type/fire.png';
        case 'flying':
            return process.env.PUBLIC_URL +'./images_Type/flying.png';
        case 'ghost':
            return process.env.PUBLIC_URL +'./images_Type/ghost.png';
        case 'grass':
            return process.env.PUBLIC_URL +'./images_Type/grass.png';
        case 'ground':
            return process.env.PUBLIC_URL +'./images_Type/ground.png';
        case 'ice':
            return process.env.PUBLIC_URL +'./images_Type/ice.png';
        case 'normal':
            return process.env.PUBLIC_URL +'./images_Type/normal.png';
        case 'poison':
            return process.env.PUBLIC_URL +'./images_Type/poison.png';
        case 'psychic':
            return process.env.PUBLIC_URL +'./images_Type/psychic.png';
        case 'steel':
            return process.env.PUBLIC_URL +'./images_Type/steel.png';    

        default:
          return ''; 
}};