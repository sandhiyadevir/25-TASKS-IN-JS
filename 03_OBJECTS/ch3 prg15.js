var player1 = {
    name: "Kandra",
    health: 50,
    place: "The Dungeon of Doom",
    items: ["a rusty key", "The Sword of Destiny", "a piece of cheese"]
};

console.log(player1.name);
console.log(player1.name + " is in " + player1.place);
console.log(player1.name + " has health " + player1.health);
console.log("Items: " + player1.items.join(", ")); // Using join to display items in a comma-separated list

var player2 = {
    name: "Rogar",
    health: 70,
    place: "The Enchanted Forest",
    items: ["Potion of Healing", "Magic Staff", "Cloak of Invisibility"]
};


console.log("\n" + player2.name);
console.log(player2.name + " is in " + player2.place);
console.log(player2.name + " has health " + player2.health);
console.log("Items: " + player2.items.join(", "));
