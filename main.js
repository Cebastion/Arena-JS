const Warrior = require("./Class/Warrior");
const Axe = require("./Weapon/Axe");
const Sword = require('./Weapon/Sword')
const Barbarian =require('./Class/Barbarian')

const axe = new Axe();
const sword = new Sword();

const war = new Warrior();
const bar = new Barbarian();


function Fight(player1, player2) {
    player1.Attack(axe) 
    player2.Attack(sword)
    if (war.GetHP() <= 0) {
        console.log(`${player1.name} Win`)
        return;
    }
    if (bar.GetHP() <= 0) {
        console.log(`${player2.name} Win`)
        return;
    }
    Fight(player1, player2)
}

function play(player1, player2) {
    setTimeout(() => {
        console.log('Welcome to "Arena" \n')
    }, 3000);
    setTimeout(() => {
        console.log("Version: 1.0.0 \n")
    }, 4000);
    setTimeout(() => {
        player1.Info()
    }, 5000);
    setTimeout(() => {
        player2.Info()
    }, 6000);
    setTimeout(() => {
        Fight(player1, player2)
    }, 8000);
}

play(war, bar)