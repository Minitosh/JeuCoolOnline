import Actor from "./Actor.js"

export default class Player extends Actor {
    constructor(name, strenght, hp, image) {
        super(name, strenght, hp, image); // appelle le constructeur parent avec le paramètre
        console.log("Joueur crée !");
    }
}