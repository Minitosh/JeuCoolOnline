class Items {

    constructor(name, power, range,  image) {
        this._name = name;
        this._strenght = power;
        this._hp = range;
        this._image = image;
        this._power = power;
        this._range = range;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get power() {
        return this._power;
    }

    set power(value) {
        this._power = value;
    }

    get range() {
        return this._range;
    }

    set range(value) {
        this._range = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }
}