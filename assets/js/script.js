var questionBank = [
	{
		title: "What is 2 + 2?",
		choices: ["1", "2", "3", "4"],
		answer: "4",
	},
	{
		title: "What color is the Sky?",
		choices: ["Blue", "Red", "Orange", "Pink"],
		answer: "Blue",
	},
	{
		title: "What is H20?",
		choices: ["Fire", "Earth", "Water", "Air"],
		answer: "Water",
	},
	{
		title: "What language is this written in?",
		choices: ["C++", "Ruby", "Javascript", "Perl"],
		answer: "Javascript",
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

//The event listener belos is run once the showQuestions() function is run and handles starting the timer for the application.

startgameTime.addEventListener("click", function () {
	if (penaltyTime === 0) {
		penaltyTime = setInterval(function () {
			secondsRemaining--;
			timerCurrent.textContent = "Time: " + secondsRemaining;
			if (secondsRemaining <= 0) {
				clearInterval(penaltyTime);
				gameOver();
			}
		}, 1000);
	}
	console.log("Start game");
	showQuestions(); // After checking if the penalty time is at 0, the game begins with this function.
});

function showQuestions() {
	startgameTime.classList.add("hide"); // Hides initial start button
	questionsContainer.innerHTML = "";
	answerButtons.innerHTML = "";
	for (var i = 0; i < questionBank.length; i++) {
		// For loop that populates individual questions.
		var questionTitle = questionBank[questionIndex].title;
		var questionChoice = questionBank[questionIndex].choices;
		questionsContainer.innerText = questionTitle;
	}
	for (var i = 0; i < 4; i++) {
		// For loop that populates buttons with answers.
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
		// Check if target value === the value of the questionbank answer variable.
		console.log("correct");
		score++;
		makedivEl.textContent = "That is correct!";
		answerButtons.appendChild(makedivEl);
	} else {
		// If target value is not equal, subtract penalty amount from time left.
		secondsRemaining = secondsRemaining - penaltyAmount;
		console.log("incorrect");
		makedivEl.textContent = "That is not correct :(";
		answerButtons.appendChild(makedivEl);
	}

	questionIndex++;

	if (questionIndex >= questionBank.length) {
		gameOver();
	} else {
		showQuestions(questionIndex);
	}
	questionsContainer.appendChild(makedivEl);
}

function gameOver() {
	questionsContainer.innerHTML = "Game Over";
	answerButtons.innerHTML = "";
	// var makebuttonEl = document.createElement("button");
	// makebuttonEl.innerText = "Start Over?";
	// answerButtons.appendChild(makebuttonEl);
	console.log("Game Over");

	if (secondsRemaining >= 0) {
		// IF you have more than 0 seconds on clock, consider that in the final score
		var remainingTime = secondsRemaining;
		var createh2 = document.createElement("h2");
		clearInterval(penaltyTime);
		createh2.textContent = "Your Final Score: " + remainingTime;
		questionsContainer.appendChild(createh2);
	}
	questionIndex = 0; // Reset question index in case another game is to be played

	var makeForm = document.createElement("form");
	var makeInput = document.createElement("input");
	makeInput.setAttribute("id", "userInitials");
	var makeformLabel = document.createElement("label");
	var makesubmitButton = document.createElement("button");
	makeformLabel.textContent = "Enter initials:";
	makesubmitButton.textContent = "Submit";
	questionsContainer.appendChild(makeformLabel);
	makeForm.appendChild(makesubmitButton);
	makeForm.appendChild(makeInput);
	questionsContainer.appendChild(makeForm);
	//The above handles creating the input form for inital entering.

	makesubmitButton.addEventListener("click", function () {
		var getInitials = document.getElementById("userInitials");
		userInitials = getInitials.value;

		if (userInitials === null) {
			console.log("No value entered");
		} else {
			var playerRecord = {
				// Shape of data to be passed to localstorage
				initials: userInitials,
				score: remainingTime,
			};
			var totalScore = localStorage.getItem("totalScore");
			if (totalScore === null) {
				totalScore = [];
			} else {
				totalScore = JSON.parse(totalScore);
			}
			totalScore.push(playerRecord);
			var newScores = JSON.stringify(totalScore);
			localStorage.setItem("totalScore", newScores);
			makeInput.value = "";
			window.open("./highscores.html"); //Takes you to high scores page after entering initials.
		}
		questionsContainer.textContent = "Thank you!";
	});
	startgameTime.innerHTML = "Restart?";
	startgameTime.classList.remove("hide");
	makebuttonEl.addEventListener("click", showQuestions);
}
