var scores = localStorage.getItem("totalScore");
scores = JSON.parse(scores);
var scoresContainer = document.getElementById("scores__container");
var makebuttonEl = document.createElement("button");
function displayScore() {
	for (var i = 0; i < scores.length; i++) {
		var makeOl = document.createElement("ol");
		var makeLi = document.createElement("li");
		scores.sort(function (a, b) {
			return b - a; // Function to sort the scores from highest to lowest
		});

		makeOl.innerText =
			"Initials: " + scores[i].initials + " " + "\nScore: " + scores[i].score;
		makebuttonEl.innerText = "Play Again?";
		scoresContainer.appendChild(makeOl);
		scoresContainer.appendChild(makebuttonEl);
	}
}
makebuttonEl.addEventListener("click", function () {
	window.open("./index.html"); // Takes you back to the main game if you click the button.
});
displayScore();
