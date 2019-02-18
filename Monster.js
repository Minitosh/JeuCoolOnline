class Monster extends Actor {
    constructor(name, image) {
        super(name, image); // appelle le constructeur parent avec le paramètre
    }

    fight() {
        console.log("fight-Monster")
    }
}