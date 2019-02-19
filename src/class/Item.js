export default class Item {
    constructor(name, power, hp,  image) {
        this._name = name;
        this._power = power;
        this._hp = hp;
        this._image = image;
        console.log("Nouvel item : " + name
            + "\n - Power : " + power
            + "\n - HP : " + hp
            + "\n - Image : " + image);
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
    get power() {
        return this._power;
    }
    set power(value) {
        this._power = value;
    }
    get hp() {
        return this._hp;
    }
    set hp(value) {
        this._hp = value;
    }

    // METHODS

}