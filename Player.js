class Player {
    constructor(nom, prenom, age, sexe) {
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
        this._sexe = sexe;
    }

    get

    get nom() {
        return this._nom;
    }

    set nom(value) {
        this._nom = value;
    }

    get prenom() {
        return this._prenom;
    }

    set prenom(value) {
        this._prenom = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get sexe() {
        return this._sexe;
    }

    set sexe(value) {
        this._sexe = value;
    }
}