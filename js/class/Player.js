import Actor from "./Actor.js"

export default class Player extends Actor {
    constructor(name, strength, pv, image) {
        super(name, strength, pv, image); // appelle le constructeur parent avec le paramètre
        console.log("Nouveau joueur : " + name);
    }
}