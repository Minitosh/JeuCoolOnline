class Actor {
    constructor(name, image) {
        this._name = name;
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

    fight() {
        console.log("fight")
    }
}