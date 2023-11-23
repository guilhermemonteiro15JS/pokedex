export const getTypeImage = (type) =>{
    switch (type) {
        case 'water':
          return process.env.PUBLIC_URL +'bk-water.png';
        case 'rock':
          return process.env.PUBLIC_URL +'bk-rock.png';
        case 'bug':
            return process.env.PUBLIC_URL +'bk-bug.png';
        case 'dark':
            return process.env.PUBLIC_URL +'bk-dark.png';
        case 'dragon':
            return process.env.PUBLIC_URL +'bk-dragon.png';
        case 'electric':
            return process.env.PUBLIC_URL +'bk-electric.png';
        case 'fairy':
          return process.env.PUBLIC_URL +'bk-fairy.png';
        case 'fight':
          return process.env.PUBLIC_URL +'bk-fight.png';
        case 'fire':
            return process.env.PUBLIC_URL +'bk-fire.png';
        case 'flying':
            return process.env.PUBLIC_URL +'bk-flying.png';
        case 'ghost':
            return process.env.PUBLIC_URL +'bk-ghost.png';
        case 'grass':
            return process.env.PUBLIC_URL +'bk-grass.png';
        case 'ground':
            return process.env.PUBLIC_URL +'bk-ground.png';
        case 'ice':
            return process.env.PUBLIC_URL +'bk-ice.png';
        case 'normal':
            return process.env.PUBLIC_URL +'bk-normal.png';
        case 'poison':
            return process.env.PUBLIC_URL +'bk-poison.png';
        case 'phychic':
            return process.env.PUBLIC_URL +'bk-phychic.png';
        case 'steel':
            return process.env.PUBLIC_URL +'bk-steel.png';    

        default:
          return ''; 
}};