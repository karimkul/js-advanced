// Static Classes

// Player Class with Static Methods
// Defining the Player Class:
Copy;
class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    attack(target) {
        let damage = Math.floor(Math.random() * 10 + 1); // Random damage between 1 and 10
        target.score -= damage; // Reduce the target's score by the damage
        console.log(
            `${this.name} attacks ${target.name} for ${damage} points! ${target.name}'s score is now ${target.score}.`
        );
    }
}
// Adding a Static Method: declareWinner()

class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    attack(target) {
        let damage = Math.floor(Math.random() * 10 + 1);
        target.score -= damage;
        console.log(
            `${this.name} attacks ${target.name} for ${damage} points! ${target.name}'s score is now ${target.score}.`
        );
    }

    static declareWinner(player1, player2) {
        if (player1.score > player2.score) {
            return `${player1.name} is the winner with a score of ${player1.score}!`;
        } else if (player1.score < player2.score) {
            return `${player2.name} is the winner with a score of ${player2.score}!`;
        } else {
            return "It's a tie!";
        }
    }
}
// Using the Static Method

let player1 = new Player("Alice", 100);
let player2 = new Player("Bob", 100);

player1.attack(player2);
player2.attack(player1);

console.log(Player.declareWinner(player1, player2));
