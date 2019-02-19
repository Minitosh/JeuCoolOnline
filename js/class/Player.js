import Actor from "./Actor.js"

export default class Player extends Actor {
    constructor(name, strength, hp, image) {
        super(name, strength, hp, image);
        console.log("Nouveau joueur : " + name
            + "\n - Strength : " + strength
            + "\n - HP : " + hp
            + "\n - Image : " + image);
    }


}