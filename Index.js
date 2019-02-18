import Player from "/js/class/Player.js"
import Monster from "/js/class/Monster.js"

let player = new Player("Dylan","20","100","");
console.log(player);

let monster = new Monster("Bolkozor","55","250","");
console.log(monster);

monster.fight();