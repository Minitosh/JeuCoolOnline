import Player from "./class/Player.js"
import Monster from "./class/Monster.js"
import Items from "./class/Items.js"

let player = new Player("Dylan",20,100,"");
let monster = new Monster("Bolkozor",55,250,"");
let item = new Items("Baton de foudre",26,"Or","");

player.equiper(item.power);