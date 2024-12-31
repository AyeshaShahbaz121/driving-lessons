// Quiz Data
const quizData = [
    {
        question: "What does a red traffic light mean?",
        options: ["Go", "Stop", "Caution", "Yield"],
        correct: 1,
        explanation: "A red light indicates a full stop. You must wait until it turns green."
    },
    {
        question: "What should you do when driving in fog?",
        options: [
            "Use high-beam headlights",
            "Use low-beam headlights",
            "Turn off your headlights",
            "Drive at the speed limit"
        ],
        correct: 1,
        explanation: "Low-beam headlights reduce glare and improve visibility in fog."
    },
    {
        question: "What is the legal blood alcohol limit for driving in most countries?",
        options: ["0.08%", "0.05%", "0.1%", "0.2%"],
        correct: 0,
        explanation: "In most countries, the legal blood alcohol limit is 0.08%."
    }
];

let currentQuestion = 0;
let score = 0;

// Select DOM Elements
const quizContainer = document.getElementById("quiz");
const nextButton = document.getElementById("next-question");
const resultContainer = document.getElementById("result");
const scoreContainer = document.getElementById("score");

// Load Quiz Question
function loadQuiz() {
    const data = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <h3>${data.question}</h3>
        <ul class="quiz-options">
            ${data.options
            .map(
                (option, index) =>
                    `<li class="quiz-option" data-index="${index}">${option}</li>`
            )
            .join("")}
        </ul>
    `;
    addOptionEventListeners();
}

// Add Event Listeners to Options
function addOptionEventListeners() {
    const options = document.querySelectorAll(".quiz-option");
    options.forEach((option) => {
        option.addEventListener("click", handleOptionClick);
    });
}

// Handle Option Click
function handleOptionClick(event) {
    const selectedOption = event.target;
    const selectedIndex = parseInt(selectedOption.getAttribute("data-index"));
    const data = quizData[currentQuestion];

    // Check Answer
    if (selectedIndex === data.correct) {
        selectedOption.style.backgroundColor = "green";
        score++;
    } else {
        selectedOption.style.backgroundColor = "red";
    }

    // Show Explanation
    quizContainer.innerHTML += `
        <p class="quiz-explanation">${data.explanation}</p>
    `;

    // Disable Further Clicks
    const options = document.querySelectorAll(".quiz-option");
    options.forEach((option) => {
        option.removeEventListener("click", handleOptionClick);
    });

    // Show Next Button
    nextButton.style.display = "block";
}

// Next Question or Show Final Score
nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuiz();
        nextButton.style.display = "none";
    } else {
        showFinalScore();
    }
});

// Show Final Score
function showFinalScore() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreContainer.innerText = `${score} out of ${quizData.length}`;
}

// Initialize Quiz
loadQuiz();
