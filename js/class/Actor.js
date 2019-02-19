export default class Actor {
    constructor(name, strength, hp,  image) {
        this._name = name;
        this._strength = strength;
        this._hp = hp;
        this._image = image;
    }

    // GETTERS AND SETTERS
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get image() {
        return this._image;
    }
    set image(value) {
        this._image = value;
    }
    get strength() {
        return this._strength;
    }
    set strength(value) {
        this._strength = value;
    }
    get hp() {
        return this._hp;
    }
    set hp(value) {
        this._hp = value;
    }

    // METHODS
    equip(power) {
        console.log(this._name + " gain " + power + " power ! (" + this._strength + "->" + (this._strength + power) + ")");
        this._strength += power;
    }
}