"use strict";

//arrow function to declare random damage 1-10
const randomDamage = () => Math.floor(Math.random() * (11-1) + 1);


//Arrow function:
const chooseOption = (opt1, opt2) => {
    let randNum = Math.round((Math.random()*(1))); 
    return(randNum === 0 ? opt1: opt2);
}  

function attackPlayer(health){
    return (health - randomDamage());
}

const logHealth = (player, health) =>{
    console.log(player + " health: " + health); 
}

const logDeath = (winner, loser) => {
    console.log(winner + " defeated " + loser);
}

const isDead = (health) => {
    if(health<= 0){
        return true;
    } else{
        return false; 
    }
}


function fight(player1, player2, player1Health, player2Health){
    while(true){
        let attacker = chooseOption(player1, player2);
        if(attacker === player1){
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);

            if(isDead(player2Health)){
                logDeath(player1, player2);
                break;
            }
            
        } else{
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if(isDead(player1Health)){
                logDeath(player2, player1);
                break;
            }
        }
    }
}


fight("Mitch", "Adam", 100, 100);







// TODO - write your code here.