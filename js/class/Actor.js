export default class Actor {
    constructor(name, strength, hp,  image) {
        this._name = name;
        this._strenght = strength;
        this._hp = hp;
        this._image = image;
    }

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

    get strenght() {
        return this._strenght;
    }

    set strenght(value) {
        this._strenght = value;
    }


    get hp() {
        return this._hp;
    }

    set hp(value) {
        this._hp = value;
    }
}