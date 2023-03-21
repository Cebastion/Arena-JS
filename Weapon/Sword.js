const Weapon = require('./Weapon')

class Sword extends Weapon {
    constructor(damage){
        super(damage)
    }
    info() {
		console.log(`Damage: ${this.damage}`)
	}
	Getdamage() {
		return this.damage = Math.floor(((Math.random() * 20) + 5));
	}
	SpecialAttack(){
		
	}
}

module.exports = Sword;