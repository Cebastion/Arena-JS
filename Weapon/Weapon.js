class Weapon{
	constructor(damage){
		this.damage = damage;
	}
    info() {
	};
	Getdamage() {
		return this.damage;
	};
	SpecialAttack(){
		return this.damage;
	}
}

module.exports = Weapon;