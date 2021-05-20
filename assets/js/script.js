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
var startButton = document.getElementById("start__button");
startButton.addEventListener("click", startGame);
var answerButtons = document.querySelector(".answerbutton__container");
var questionContainer = document.getElementById("questions__container");
var questionEl = document.getElementById("question");
var questionIndex;

function startGame() {
	questionIndex = 0;
	console.log("Start Game");
	startButton.classList.add("hide");
	for (var i = 0; i < 4; i++) {
		var buttonsElchildren = document.querySelector(
			".answerbutton__container"
		).children;
		buttonsElchildren[i].classList.remove("hide");
	}
	nextQuestion();
}

function nextQuestion() {
	showQuestion(questionBank[questionIndex]);
}

function showQuestion(question) {
	var h2El = document.createElement("h2");
	questionEl.innerText = questionBank[questionIndex].question;

	for (var i = 0; i <= questionBank[questionIndex].answers.length; i++) {
		console.log("length", questionBank[questionIndex].answers.length, "i:", i);
		var button = document.createElement("button");
		button.innerText = questionBank[0].answers[0].answer;
		button.classList.add("btn");
		button.addEventListener("click", chooseAnswer());
		answerButtons.appendChild(button);
	}
}

function resetButtonState() {
	next;
}
function chooseAnswer() {}

var questionBank = [
	{
		question: "What is 2 + 2?",
		answers: [
			{ answer: "One", correct: false },
			{ answer: "2", correct: false },
			{ answer: "3", correct: false },
			{ answer: "4", correct: true },
		],
	},
];
