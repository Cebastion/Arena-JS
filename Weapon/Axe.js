const Weapon = require("./Weapon");

class Axe extends Weapon{
    constructor(damage){
		super(damage)
    }

    info() {
		console.log(`Damage: ${this.damage}`)
	}
	Getdamage() {
		return this.damage = Math.floor(((Math.random() * 30) + 5));
	}
	SpecialAttack(){
		return this.damage * 3;
	}
}

module.exports = Axe;