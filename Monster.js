class Monster extends Actor {
    constructor(name, strenght, pv, image) {
        super(name, strenght, pv, image); // appelle le constructeur parent avec le paramètre
    }

    fight() {
        console.log("fight-Monstr")
    }
}