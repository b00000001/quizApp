var questionBank = [
	{
		title: "What is 2 + 2?",
		choices: ["1", "2", "3", "4"],
		answer: "4",
	},
	{
		title: "What color is the Sky?",
		choices: ["1", "2", "3", "4"],
		answer: "4",
	},
	{
		title: "What is H20?",
		choices: ["1", "2", "3", "4"],
		answer: "4",
	},
	{
		title: "What language is this written in?",
		choices: ["1", "2", "3", "4"],
		answer: "4",
	},
];

var score = 0;
var questionIndex = 0; // For tracking position of questions array
// Global variables
var timerCurrent = document.querySelector("#current__time");
var startgameTime = document.querySelector("#start__button");
var questionsContainer = document.querySelector("#questions__container");
var container = document.querySelector("#container");
var answerButtons = document.querySelector(".answerbutton__container");
// Timer variables

var secondsRemaining = 100;
var penaltyTime = 0;
var penaltyAmount = 5;

startgameTime.addEventListener("click", function () {
	console.log("Start game");
	showQuestions();
});

function showQuestions() {
	startgameTime.classList.add("hide");
	questionsContainer.innerHTML = "";
	answerButtons.innerHTML = "";
	for (var i = 0; i < questionBank.length; i++) {
		var questionTitle = questionBank[questionIndex].title;
		var questionChoice = questionBank[questionIndex].choices;
		questionsContainer.innerText = questionTitle;
	}
	for (var i = 0; i < 4; i++) {
		var button = document.createElement("button");
		button.innerText = questionBank[questionIndex].choices[i];
		button.addEventListener("click", checkAnswer);
		answerButtons.appendChild(button);
	}
}

function checkAnswer(event) {
	var target = event.target;
	var makedivEl = document.createElement("div");
	if (target.innerText == questionBank[questionIndex].answer) {
		console.log("correct");
		score++;
		makedivEl.textContent = "That is correct!";
		questionsContainer.appendChild(makedivEl);
	} else {
		secondsRemaining = secondsRemaining - penaltyAmount;
		console.log("incorrect");
		makedivEl.textContent = "That is not correct :(";
		questionsContainer.appendChild(makedivEl);
	}

	questionIndex++;

	if (questionIndex >= questionBank.length) {
		gameOver();
		makedivEL.textContent = "That is the end";
	} else {
		showQuestions(questionIndex);
	}
	questionsContainer.appendChild(makedivEl);
}

function gameOver() {
	console.log("Game Over");
}
