import Actor from "./Actor.js"

export default class Monster extends Actor {
    constructor(name, strenght, pv, image) {
        super(name, strenght, pv, image); // appelle le constructeur parent avec le paramètre
        console.log("Monstre crée !");
        this.fight();
    }

    fight() {
        console.log("fight-Monster");
    }
}