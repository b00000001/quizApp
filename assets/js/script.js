// GIVEN I am taking a code quiz
// WHEN I click the start button

// - Function that holds event listener for button click
//   THEN a timer starts and I am presented with a question
// - Set interval timer with default value
//   WHEN I answer a question
//   THEN I am presented with another question
// - Array of objects.
//   WHEN I answer a question incorrectly
//   THEN time is subtracted from the clock
// - variable that holds guess and variable that holds time
//   WHEN all questions are answered or the timer reaches
// - trigger function when timer runs out

// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
var time = 100;
var score = 0;
var highScore = 0;
var startButton = document.getElementById("start__button");

function startGame(event) {
	console.log("Start Quiz!");
	var element = event.target;
	var state = element.getAttribute("data-state");
	console.log(state, element);
	if (state === "unclicked") {
		startButton.innerText = "Test";
	}
}

// function nextQuestion() {}

// function gameOver() {}

startButton.addEventListener("click", startGame);
