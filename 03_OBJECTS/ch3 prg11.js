var player1;

player1 = {
	  name: "Max",
	  score: 0
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score * 1.10;
console.log(player1.name + " has scored " + player1.score + " after a 10% increase");

var player2;

player2 = {
    name: "Anna",
    score: 30
};

console.log(player2.name + " has scored " + player2.score);


var totalScore = player1.score + player2.score;
console.log(player1.name + " and " + player2.name + " have a combined score of " + totalScore);