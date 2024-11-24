// script.js

const questions = [
    {
      question: "What is 2 + 2?",
      options: ["2", "3", "4", "5"],
      correct: 2,
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Rome"],
      correct: 2,
    },
    {
      question: "Which is the smallest planet in our solar system?",
      options: ["Mars", "Mercury", "Earth", "Venus"],
      correct: 1,
    },
  ];
  
//#Setup Start Button Logic
  
  let currentQuestionIndex = 0;
  let score = 0;

  
  const startBtn = document.getElementById("start-btn");
const questionScreen = document.getElementById("question-screen");
const startScreen = document.getElementById("start-screen");

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  showQuestion();
});

//#Show Questions Dynamically

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = ""; // Clear previous options

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(index));
    optionsContainer.appendChild(button);
  });
}

//Handle Answer Selection

function selectAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
      score++;
    }
  
    nextBtn.classList.remove("hidden"); // Show next button
  }

//#Move to the Next Question

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
      nextBtn.classList.add("hidden"); // Hide next button until answer selected
    } else {
      showResult();
    }
  });

  
//#Display the Result  

const resultScreen = document.getElementById("result-screen");
const scoreText = document.getElementById("score-text");

function showResult() {
  questionScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  scoreText.textContent = `You scored ${score} out of ${questions.length}`;
}

const restartBtn = document.getElementById("restart-btn");
restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
});



 