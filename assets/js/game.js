var enemy1 = "Roborto";
var enemy2 = "Amy Android";
var enemy3 = "Robo Trumble";

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


//Game States
//"Win" - Player robot has defeated all enemy-robots.
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less.


var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Remove enemy health
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
        )
        if (enemyHealth <- 0) {
            window.alert(enemyNames[i] + " has died!");
        }
        else {
            window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.")
        }
        
        //Remove player heath when attacked
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )

        //Check Player's Health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!")
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.")
        }
    }
        else if (promptFight === "skip" || promptFight === "SKIP") {
            //Confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //If yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided tos kip this fight. Goodbye!");
                
                //Subtract money from playerMoney for skipping
                playerMoney = playerMoney -2;
            }

            //If no (false), ask question again by running fight() again.
            else {
                fight();
            }
        }
};  

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}