const Weapon = require('../Weapon/Weapon')

class Warrior{
    #hpleft;
    #chance;
    #ChanceBlock = ((Math.random() * 2) / 3) * 100;
    #ChanceDodge = ((Math.random() * 2) / 3) * 100;
    #ChanceCrit = ((Math.random() * 2) / 3) * 100;
    #k = 1.5;
    #armor = Math.floor(((Math.random() * 2) / 3) * 10 * this.#k);
    #HP = 100;
    #weapon = new Weapon();
    constructor(name = "Warrior") {
        this.name = name
    }

    Info(){
        console.log(`${this.name}: \n Hp:${this.#HP} \n Chance Block:${Math.floor(this.#ChanceBlock)} \n Chance Dodge:${Math.floor(this.#ChanceDodge)} \n Chance Crit:${Math.floor(this.#ChanceCrit)} \n Armor:${this.#armor} \n`)
    }

    GetHP() {
        return this.#HP = this.#hpleft;
    }


    GetHPS(){
        return this.#HP
    }


    #Random() {
        this.#chance = ((Math.random() * 1.8) / 3) * 100;
        return this.#chance;
    }



    #Defent(weapon) {
        this.#weapon = weapon
        this.#Random()
        if (this.#chance < this.#ChanceCrit && this.#chance > this.#ChanceDodge && this.#chance > this.#ChanceBlock) {
            this.#hpleft = this.#HP - (this.#weapon.Getdamage() * 2 - this.#armor);
            console.log(`${this.name} Crit damage! HP: ${this.#HP} - ${this.#weapon.Getdamage() * 2 - this.#armor} damage = ${this.#hpleft}`)
        }
        if (this.#chance < this.#ChanceBlock && this.#chance > this.#ChanceCrit && this.#chance > this.#ChanceDodge) {
            this.#hpleft = this.#HP - (this.#weapon.Getdamage() / 2 - this.#armor);
            console.log(`${this.name} Block damage! HP: ${this.#HP} - ${this.#weapon.Getdamage() / 2 - this.#armor} damage = ${this.#hpleft}`)
        }
        if (this.#chance < this.#ChanceDodge && this.#chance > this.#ChanceBlock && this.#chance > this.#ChanceCrit) {
            this.#hpleft = this.#HP;
            console.log(`${this.name} Dodge damage! HP: ${this.#HP} - 0 damage = ${this.#hpleft}`)
        } else {
            this.#hpleft = this.#HP - (this.#weapon.Getdamage() - this.#armor);
            console.log(`${this.name} HP: ${this.#HP} - ${this.#weapon.Getdamage() - this.#armor} damage = ${this.#hpleft}`)
        }
        this.GetHP();
        return this.GetHP();
    }



    Attack(weapon) {
        this.#Defent(weapon)
    }
}

module.exports = Warrior;