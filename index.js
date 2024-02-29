// script.js

let questions = [
	{
		prompt: `What is C?`,
		options: [
		    "A programming language",
		    "A markup language",
		    "A database system",
		    "A web browser",
		],
		answer: "A programming language",
	    },
	    {
		prompt: `Which keyword is used to declare a function in C?`,
		options: [		    
		    "function",
		    "declare",
		    "void",
		    "int",
		],
		answer: "void",
	    },
	    {
		prompt: `What is the correct way to define a constant in C?`,
		options: [
		    "constant PI = 3.14159",
		    "const PI = 3.14159",
		    "#define PI 3.14159",
		    "PI = 3.14159",
		],
		answer: "#define PI 3.14159",
	    },
	    {
		prompt: `How do you declare a variable in C?`,
		options: [
		    "x = int;",
		    "int x;",
		    "x int;",
		    "variable x;",
		],
		answer: "int x;",
	    },
	    {
		prompt: `Which operator is used for pointer-to-member access in C?`,
		options: [
		    ".",
		    "::",
		    "->",
		    "=>",
		],
		answer: "->",
	    },
	    {
		prompt: `What is the correct syntax for a multi-line comment in C?`,
		options: [
		    "/* This is a comment */",
		    "<!-- This is a comment -->",
		    "# This is a comment",
		    "// This is a comment",
		],
		answer: "/* This is a comment */",
	    },
	    {
		prompt: `Which loop is not supported by C language?`,
		options: [
		    "for each loop",
		    "for loop",
		    "do-while loop",
		    "while loop",
		],
		answer: "foreach loop",
	    },
	    {
		prompt: `What does the "break" statement do in C?`,
		options: [
		    "Skips the current iteration of the loop",
		    "Continues to the next iteration of the loop",
		    "Ends the program execution",
		    "Exits the loop or switch statement",
		],
		answer: "Exits the loop or switch statement",
	    },
	    {
		prompt: `What is the purpose of the "continue" statement in C?`,
		options: [
		    "Exits the loop or switch statement",
		    "Ends the program execution",
		    "Skips the current iteration of the loop",
		    "Restarts the loop from the beginning",
		],
		answer: "Skips the current iteration of the loop",
	    },
	    {
		prompt: `Which function is used to allocate memory dynamically in C?`,
		options: [
		    "calloc()",
		    "realloc()",
		    "malloc()",
		    "free()",
		],
		answer: "malloc()",
	    },
	    {
		prompt: `What is the output of the following code snippet in C? \n int x = 5, y = 10; \n y = x++ + ++y; \n printf("%d", y);`,
		options: [
		    "15",
		    "20",
		    "16",
		    "21",
		],
		answer: "16",
	    },
	    {
		prompt: `What is the correct way to declare a two-dimensional array in C?`,
		options: [
		    "int arr[][];",
		    "arr = int[3][3];",
		    "arr = 3x3 int;",
		    "int arr[3][3];",
		],
		answer: "int arr[3][3];",
	    },
	    {
		prompt: `Which header file should be included to use the printf() function in C?`,
		options: [
		    "<stdio.h>",
		    "<math.h>",
		    "<stdlib.h>",
		    "<string.h>",
		],
		answer: "<stdio.h>",
	    },
	    {
		prompt: `What is the purpose of the "return" statement in C?`,
		options: [
		    "To return a value from a function",
		    "To exit the program execution",
		    "To skip the current iteration of the loop",
		    "To continue to the next iteration of the loop",
		],
		answer: "To return a value from a function",
	    },
	    {
		prompt: `Which operator is used for bitwise XOR in C?`,
		options: [
		    "^",
		    "&",
		    "|",
		    "~",
		],
		answer: "^",
	    },
	    {
		prompt: `What is the correct way to declare a structure in C?`,
		options: [
		    "struct { ... } myStruct;",
		    "myStruct { ... };",
		    "struct myStruct { ... };",
		    "struct = myStruct { ... };",
		],
		answer: "struct myStruct { ... };",
	    },
	    {
		prompt: `What is the correct way to define an enumeration in C?`,
		options: [
		    "enum { ... } myEnum;",
		    "myEnum { ... };",
		    "enum myEnum { ... };",
		    "enum = myEnum { ... };",
		],
		answer: "enum myEnum { ... };",
	    },
	    {
		prompt: `What does the "sizeof" operator return in C?`,
		options: [
		    "Size of a variable or data type",
		    "Size of the memory allocation",
		    "Size of the pointer",
		    "Size of the array",
		],
		answer: "Size of a variable or data type",
	    },
	    {
		prompt: `What is the purpose of the "static" keyword in C?`,
		options: [
		    "To specify the access level of a variable",
		    "To allocate memory dynamically",
		    "To declare a variable with static storage duration",
		    "To declare a variable with automatic storage duration",
		],
		answer: "To declare a variable with static storage duration",
	    },
	    {
		prompt: `What is the output of the following code snippet in C? \n int arr[5] = {1, 2, 3, 4, 5}; \n printf("%d", arr[5]);`,
		options: [
		    "Undefined behavior",
		    "5",
		    "4",
		    "Error",
		],
		answer: "Undefined behavior",
	    },
	    {
		prompt: `What is the purpose of the "typedef" keyword in C?`,
		options: [
		    "To declare a new type",
		    "To specify the access level of a variable",
		    "To create an alias for data types",
		    "To declare a variable with automatic storage duration",
		],
		answer: "To create an alias for data types",
	    },
	    {
		prompt: `What does the "const" keyword indicate in C?`,
		options: [
		    "That the value of a variable cannot be changed",
		    "That the variable is a constant",
		    "That the variable is static",
		    "That the variable is global",
		],
		answer: "That the value of a variable cannot be changed",
	    },
	    {
		prompt: `What is the output of the following code snippet in C? \n int x = 10; \n printf("%d", ++x * x++);`,
		options: [
		    "110",
		    "120",
		    "100",
		    "121",
		],
		answer: "121",
	    },
	    {
		prompt: `What is the correct way to include a header file named "myheader.h" in C?`,
		options: [
		    `#include "myheader.h"`,
		    `<include "myheader.h">`,
		    `include "myheader.h"`,
		    `#include <myheader.h>`,
		],
		answer: `#include "myheader.h"`,
	    }
	    
	    
];

// Get Dom Elements

let questionsEl =
	document.querySelector(
		"#questions"
	);
let timerEl =
	document.querySelector("#timer");
let choicesEl =
	document.querySelector("#options");
let submitBtn = document.querySelector(
	"#submit-score"
);
let startBtn =
	document.querySelector("#start");
let nameEl =
	document.querySelector("#name");
let feedbackEl = document.querySelector(
	"#feedback"
);
let reStartBtn =
	document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
	timerId = setInterval(
		clockTick,
		1000
	);
	timerEl.textContent = time;
	let landingScreenEl =
		document.getElementById(
			"start-screen"
		);
	landingScreenEl.setAttribute(
		"class",
		"hide"
	);
	questionsEl.removeAttribute(
		"class"
	);
	getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
	let currentQuestion =
		questions[currentQuestionIndex];
	let promptEl =
		document.getElementById(
			"question-words"
		);
	promptEl.textContent =
		currentQuestion.prompt;
	choicesEl.innerHTML = "";
	currentQuestion.options.forEach(
		function (choice, i) {
			let choiceBtn =
				document.createElement(
					"button"
				);
			choiceBtn.setAttribute(
				"value",
				choice
			);
			choiceBtn.textContent =
				i + 1 + ". " + choice;
			choiceBtn.onclick =
				questionClick;
			choicesEl.appendChild(
				choiceBtn
			);
		}
	);
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
	if (
		this.value !==
		questions[currentQuestionIndex]
			.answer
	) {
		time -= 10;
		if (time < 0) {
			time = 0;
		}
		timerEl.textContent = time;
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`;
		feedbackEl.style.color = "red";
	} else {
		feedbackEl.textContent =
			"Correct!";
		feedbackEl.style.color =
			"green";
	}
	feedbackEl.setAttribute(
		"class",
		"feedback"
	);
	setTimeout(function () {
		feedbackEl.setAttribute(
			"class",
			"feedback hide"
		);
	}, 2000);
	currentQuestionIndex++;
	if (
		currentQuestionIndex ===
		questions.length
	) {
		quizEnd();
	} else {
		getQuestion();
	}
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
	clearInterval(timerId);
	let endScreenEl =
		document.getElementById(
			"quiz-end"
		);
	endScreenEl.removeAttribute(
		"class"
	);
	let finalScoreEl =
		document.getElementById(
			"score-final"
		);
	finalScoreEl.textContent = time;
	questionsEl.setAttribute(
		"class",
		"hide"
	);
}

// End quiz if timer reaches 0

function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		quizEnd();
	}
}

// Save score in local storage
// Along with users' name

function saveHighscore() {
	let name = nameEl.value.trim();
	if (name !== "") {
		let highscores =
			JSON.parse(
				window.localStorage.getItem(
					"highscores"
				)
			) || [];
		let newScore = {
			score: time,
			name: name,
		};
		highscores.push(newScore);
		window.localStorage.setItem(
			"highscores",
			JSON.stringify(highscores)
		);
		alert(
			"Your Score has been Submitted"
		);
	}
}

// Save users' score after pressing enter

function checkForEnter(event) {
	if (event.key === "Enter") {
		saveHighscore();
		alert(
			"Your Score has been Submitted"
		);
	}
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;
