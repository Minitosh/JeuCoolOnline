import Player from './class/Player.js';
import Monster from "./class/Monster.js";
import Item from "./class/Item.js";

let dylan = new Player("Dylan", 10, 200, "");
let doggy_marc = new Monster("Doggy Marc", 5, 10, "");
let wooden_helmet = new Item("Wooden helmet", 0, 10, "");
let wooden_sword = new Item("Wooden sword", 20, 0, "");
let museliere = new Item("Museliere", 0, 0, "");

dylan.equip(wooden_helmet);
dylan.equip(wooden_sword);
doggy_marc.equip(museliere);