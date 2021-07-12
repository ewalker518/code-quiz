var time = 100;
var timer;
var questionArray = 0;
var startButtonEl = document.getElementById("start-btn");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var questionsEl = document.getElementById("questions");



var questions = [
    {
        question: "What is a good way to store a lot of data without writing out an excessive amount of code?",
        choices: ["array", "console", "string", "you can't"],
        answer: "array"
    },
    {
        question: "Which of these is NOT a good use for console.log?",
        choices: ["debugging", "verifying that your script targets the correct elements", "deciding what to eat for breakfast","displaying messages to the user"],
        answer: "deciding what to eat for breakfast"
    },
    {
        question: "What symbols are used after the name of a function?",
        choices: ["square brackets", "squiggly brackets", "these thingies < >", "parentheses"],
        answer: "parentheses"
    },
    {
        question: "What does 'var' mean in JavaScript?",
        choices: ["video assistant referee", "short for 'variable'", "value-added reseller", "very agile reptilian"],
        answer: "short for 'variable'"
    },
    {
        question: "What does a for-loop do?",
        choices: ["allows code to be executed repeatedly", "calls a previous function", "breaks the internet and releases the kraken", "logs the information in the console"],
        answer: "allows code to be executed repeatedly"
    }
];

function startQuiz() {
    // hide the stuff in the start screen
    var startScreenEl = document.getElementById("start");
    startScreenEl.setAttribute("class", "hidden");

    // unhide the stuff in the questions screen
    questionsEl.removeAttribute("class", "hidden");

    // start the timer
    timer = setInterval(runTimer, 1000);
    timerEl.textContent = time;
    runTimer();
    

    // run the questions script
    showQuestions();
};

function showQuestions() {
    // get the question from the array
    var currentQuestion = questions[questionArray];
    var questionTitleEl = document.getElementById("question-title");

    // set the title for the current question
    questionTitleEl.textContent = currentQuestion.question;

    // set the choices for the question
    currentQuestion.choices.forEach(function(choice) {
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);
    console.log(time);

    choiceButton.textContent = choice;

    choiceButton.onclick = questionClick;

    choicesEl.appendChild(choiceButton);
    });
}

function questionClick() {
    if (this.value !== questions[questionArray].answer) {
        time -= 10;

        if (time < 0) {
            time = 0;
        }
    }

    // clear previous questions
    choices.innerHTML = "";

    timerEl.textContent = time;

    questionArray++;

    if (questionArray === questions.length) {
        endQuiz();
        
    } else {
        showQuestions();
    }
}

function endQuiz() {
    var questionTitleEl = document.getElementById("question-title");
    questionTitleEl.setAttribute("class", "hidden");
    choicesEl.setAttribute("class", "hidden");

    var finalScreenEl = document.getElementById("final-screen");
    finalScreenEl.removeAttribute("class");

}

var timeOut = function() {
    var questionTitleEl = document.getElementById("question-title");
    questionTitleEl.setAttribute("class", "hidden");
    choicesEl.setAttribute("class", "hidden");

    var loseScreenEl = document.getElementById("lose-screen");
    loseScreenEl.removeAttribute("class");
}

function runTimer() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        timeOut();
    }
}


startButtonEl.onclick = startQuiz;