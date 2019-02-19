import Player from "./class/Player.js"
import Monster from "./class/Monster.js"

let player = new Player("Heuss L'enfoiré","20","100","img/a97cb2fdfa5d28d7d4e13f0483218938c9e87338.jfif");
let monster = new Monster("Nikita","55","250","img/yes.jpg");


$(document).ready(function() {
    $(".namePlayer").text(player.name);
    $(".nameMonster").text(monster.name);
    $(".imagePlayer").attr('src', player.image);
    $(".imageMonster").attr('src', monster.image);
});

monster.fight();