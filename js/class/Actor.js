export default class Actor {
    constructor(name, strength, pv,  image) {
        this._name = name;
        this._strength = strength;
        this._pv = pv;
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

    get strength() {
        return this._strength;
    }

    set strength(value) {
        this._strength = value;
    }


    get pv() {
        return this._pv;
    }

    set pv(value) {
        this._pv = value;
    }
}