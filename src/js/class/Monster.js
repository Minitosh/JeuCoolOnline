import Actor from "./Actor.js"

export default class Monster extends Actor {
    constructor(name, strength, hp, image) {
        super(name, strength, hp, image); // appelle le constructeur parent avec le paramètre
        console.log("Monstre crée !");
    }
}