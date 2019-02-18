import Actor from "./Actor.js"

export default class Player extends Actor {
    constructor(name, strenght, pv, image) {
        super(name, strenght, pv, image); // appelle le constructeur parent avec le paramètre
        console.log("Joueur crée !");
    }

    fight() {
        console.log("fight-Player");
    }
}