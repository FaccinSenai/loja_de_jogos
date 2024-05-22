// produtosDAO.js
const Produto = require("../produto");

let produtos = [
  new Produto({
    id: 1,
    nome: 'The Legend of Zelda: Breath of the Wild',
    promocao: false,
    desconto: 0,
    preco: 59.99,
    precoDesconto: 0,
    descricao: 'Embark on a breathtaking journey through the vast world of Hyrule in "The Legend of Zelda: Breath of the Wild." This critically acclaimed action-adventure game offers an unprecedented open-world experience filled with stunning landscapes, intricate puzzles, and formidable enemies. As Link, the legendary hero, you must explore mysterious forests, towering mountains, and ancient ruins while battling to save the kingdom from the malevolent forces of Calamity Ganon. Discover hidden secrets, master your combat skills, and harness the power of magical abilities to overcome obstacles and defeat powerful bosses. Customize your gameplay with a variety of weapons, armor, and abilities that can be upgraded to suit your play style. The game\'s dynamic weather system and day-night cycle add depth and realism to your adventure, making each encounter unique and challenging. Whether you are climbing sheer cliffs, paragliding over vast expanses, or solving intricate shrines, "Breath of the Wild" offers an unforgettable experience that redefines the open-world genre. Are you ready to uncover the ancient secrets of Hyrule and fulfill your destiny as the hero of legend?'
  }),
  new Produto({
    id: 2,
    nome: 'Super Mario Odyssey',
    promocao: false,
    desconto: 0,
    preco: 49.99,
    precoDesconto: 0,
    descricao: 'Join Mario on a massive, globe-trotting 3D adventure in "Super Mario Odyssey." Use amazing new abilities like the power to capture and control objects, animals, and enemies to collect Power Moons and rescue Princess Peach from Bowser\'s wedding plans. Explore astonishing new locales and play with friends using two-player cooperative mode.'
  }),
  new Produto({
    id: 3,
    nome: 'Minecraft',
    promocao: true,
    desconto: 38,
    preco: 26.95,
    precoDesconto: 0,
    descricao: 'Explore infinite worlds and build everything from the simplest of homes to the grandest of castles in "Minecraft." Play in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off dangerous mobs. Create, explore, and survive alone or with friends on mobile devices, Switch, Xbox One, and Windows 10.'
  }),
  new Produto({
    id: 4,
    nome: 'Among Us',
    promocao: true,
    desconto: 3,
    preco: 4.99,
    precoDesconto: 0,
    descricao: 'Join your crewmates in a multiplayer game of teamwork and betrayal in "Among Us!" Play online or via local WiFi with 4-15 players as you attempt to prepare your spaceship for departure, but beware as one or more random players among the crew are impostors bent on killing everyone.'
  }),
  new Produto({
    id: 5,
    nome: 'Fall Guys: Ultimate Knockout',
    promocao: true,
    desconto: 41,
    preco: 19.99,
    precoDesconto: 0,
    descricao: 'Compete with dozens of players online in a mad dash through round after round of escalating chaos until one victor remains! "Fall Guys: Ultimate Knockout" is a massively multiplayer party game with up to 60 players online in a free-for-all struggle through round after round of escalating chaos until one victor remains.'
  }),
  new Produto({
    id: 6,
    nome: 'Cyberpunk 2077',
    promocao: false,
    desconto: 0,
    preco: 59.99,
    precoDesconto: 0,
    descricao: 'Step into the neon-lit world of "Cyberpunk 2077," a story-driven, open-world RPG set in the dangerous metropolis of Night City. Customize your character’s cyberware, skillset, and playstyle to take on the megacorporations and explore a vast city where your choices shape the story and the world around you.'
  }),
  new Produto({
    id: 7,
    nome: 'Red Dead Redemption 2',
    promocao: false,
    desconto: 0,
    preco: 59.99,
    precoDesconto: 0,
    descricao: 'Experience the epic tale of outlaw Arthur Morgan and the notorious Van der Linde gang in "Red Dead Redemption 2." Set in America at the dawn of the modern age, this expansive open-world game blends storytelling and action with stunning visuals and lifelike gameplay.'
  }),
  new Produto({
    id: 8,
    nome: 'FIFA 21',
    promocao: false,
    desconto: 0,
    preco: 59.99,
    precoDesconto: 0,
    descricao: 'Win as One in EA SPORTS™ FIFA 21, powered by Frostbite™. Whether it’s on the streets or in the stadium, "FIFA 21" has more ways to play than ever before, including the UEFA Champions League and CONMEBOL Libertadores.'
  }),
  new Produto({
    id: 9,
    nome: 'Fortnite',
    promocao: false,
    desconto: 0,
    preco: 72,
    precoDesconto: 0,
    descricao: 'Jump into the action-packed world of "Fortnite," the free-to-play Battle Royale game where you can build, battle, and compete to be the last one standing. Join your friends in the most vibrant, varied, and ever-changing multiplayer game experience.'
  }),
  new Produto({
    id: 10,
    nome: 'Call of Duty: Warzone',
    promocao: true,
    desconto: 75,
    preco: 41,
    precoDesconto: 0,
    descricao: 'Drop into "Call of Duty: Warzone," a massive free-to-play combat arena with up to 150 players. Explore the sprawling city of Verdansk, and experience the intensity of Call of Duty’s iconic gunplay with various game modes and cross-play integration.'
  }),
  new Produto({
    id: 11,
    nome: 'Valorant',
    promocao: true,
    desconto: 27,
    preco: 53,
    precoDesconto: 0,
    descricao: 'Blend high-fidelity gunplay with unique agent abilities in "Valorant," the 5v5 character-based tactical shooter from Riot Games. Show off your strategic thinking and aim skills in this highly competitive game that combines precise gun mechanics with agent abilities for complex tactical plays.'
  }),
  new Produto({
    id: 12,
    nome: 'League of Legends',
    promocao: false,
    desconto: 0,
    preco: 6,
    precoDesconto: 0,
    descricao: 'Join the millions of players in "League of Legends," the highly competitive, team-based strategy game from Riot Games. Select your champion, master your role, and compete with your team to outplay, outsmart, and outmaneuver the enemy in this fast-paced MOBA.'
  }),
  new Produto({
    id: 13,
    nome: 'World of Warcraft',
    promocao: true,
    desconto: 23,
    preco: 14.99,
    precoDesconto: 0,
    descricao: 'Enter the world of Azeroth in "World of Warcraft," the legendary MMORPG from Blizzard Entertainment. Embark on epic quests, fight fierce monsters, and join forces with friends and allies to defeat powerful foes and save the world from destruction.'
  }),
  new Produto({
    id: 14,
    nome: 'Overwatch',
    promocao: false,
    desconto: 0,
    preco: 39.99,
    precoDesconto: 0,
    descricao: 'Join the fight for the future in "Overwatch," the team-based shooter from Blizzard Entertainment. Choose from a diverse cast of heroes, each with their own unique abilities and playstyles, and work together with your team to secure objectives and achieve victory.'
  }),
  new Produto({
    id: 15,
    nome: 'The Witcher 3: Wild Hunt',
    promocao: true,
    desconto: 53,
    preco: 39.99,
    precoDesconto: 0,
    descricao: 'Step into the shoes of Geralt of Rivia, a monster hunter for hire, and explore a war-torn, monster-infested world in "The Witcher 3: Wild Hunt." Experience a richly detailed open world filled with challenging quests, complex characters, and impactful choices.'
  }),
  new Produto({
    id: 16,
    nome: 'Grand Theft Auto V',
    promocao: true,
    desconto: 44,
    preco: 29.99,
    precoDesconto: 0,
    descricao: 'Explore the sprawling city of Los Santos and the surrounding countryside in "Grand Theft Auto V." Switch between the interconnected lives of Michael, Trevor, and Franklin as they embark on a series of dangerous heists and thrilling adventures in this open-world action game.'
  }),
  new Produto({
    id: 17,
    nome: 'PlayerUnknown\'s Battlegrounds',
    promocao: true,
    desconto: 78,
    preco: 29.99,
    precoDesconto: 0,
    descricao: 'Jump into "PlayerUnknown\'s Battlegrounds," the game that pioneered the battle royale genre. Drop onto an enormous map, scavenge for weapons and supplies, and fight to be the last person standing in this intense, winner-takes-all showdown.'
  }),
  new Produto({
    id: 18,
    nome: 'Baldur\'s Gate III',
    promocao: false,
    desconto: 0,
    preco: 200.00,
    precoDesconto: 0,
    descricao: 'Return to the Forgotten Realms in "Baldur\'s Gate III," the long-awaited RPG sequel from Larian Studios. Engage in a rich narrative filled with complex characters, tactical combat, and branching storylines that respond to your choices and actions.'
  }),
  new Produto({
    id: 19,
    nome: 'Rocket League',
    promocao: false,
    desconto: 0,
    preco: 19.99,
    precoDesconto: 0,
    descricao: 'Experience the high-octane blend of arcade-style soccer and vehicular mayhem in "Rocket League." Drive customizable cars and compete in thrilling matches across a variety of game modes, including competitive, casual, and limited-time events.'
  }),
  new Produto({
    id: 20,
    nome: 'Hades',
    promocao: true,
    desconto: 94,
    preco: 24.99,
    precoDesconto: 0,
    descricao: 'Battle out of hell in "Hades," the critically acclaimed rogue-like dungeon crawler from Supergiant Games. Defy the god of the dead as you hack and slash your way out of the Underworld, using powerful abilities and discovering rich narrative depth with each escape attempt.'
  })
];

class ProdutosDAO {
  listar() {
    for (const produto of produtos) {
      produto.calculaPromocao();
    }
    return produtos;
  }

  buscarPorId(id) {
    return produtos.find(produto => produto.id === id);
  }

  exist(id) {
    return !!this.buscarPorId(id);
  }

  criar(produto) {
    produto.id = produtos.length ? produtos[produtos.length - 1].id + 1 : 1;
    produtos.push(produto);
    return produto.id;
  }

  atualizar(id, produtoAtualizado) {
    const index = produtos.findIndex(produto => produto.id === id);
    if (index !== -1) {
      produtos[index] = produtoAtualizado;
    }
  }

  deletar(id) {
    const index = produtos.findIndex(produto => produto.id === id);
    if (index !== -1) {
      produtos.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = new ProdutosDAO();