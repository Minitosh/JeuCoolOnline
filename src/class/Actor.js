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
    equip(item) {
        console.log(this._name + " is now equipped with " + item._name + " !");
        if (item._power > 0) {
            console.log(this._name + " gain " + item._power + " power ! (" + this._strength + "->" + (this._strength + item._power) + ")");
            this._strength += item._power;
        }
        if (item._hp > 0) {
            console.log(this._name + " gain " + item._hp + " hp ! (" + this._hp + "->" + (this._hp + item._hp) + ")");
            this._strength += item._power;
        }

    }
}