const Weapon = require("./Weapon");

class PairedAxes extends Weapon{
    constructor(damage){
		super(damage)
    }

    info() {
		console.log(`Damage: ${this.damage}`)
	}
	Getdamage() {
		return this.damage = Math.floor(((Math.random() * 15) + 9));
	}
	SpecialAttack(){
		
	}
}

module.exports = PairedAxes;