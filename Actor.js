class Actor {
    constructor(name, strenght, pv,  image) {
        this._name = name;
        this._strenght = strenght;
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

    get strenght() {
        return this._strenght;
    }

    set strenght(value) {
        this._strenght = value;
    }


    get pv() {
        return this._pv;
    }

    set pv(value) {
        this._pv = value;
    }
}