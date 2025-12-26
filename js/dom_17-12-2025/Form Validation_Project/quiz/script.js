const timer = document.getElementById("timer");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const question = document.getElementById("question");

const quizQuestions = [
  {
    question: "Which language runs in the browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correctAnswer: 3
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Direct Object Method",
      "Document Order Model"
    ],
    correctAnswer: 0
  },
  {
    question: "Which keyword is used to declare a constant?",
    options: ["var", "let", "const", "static"],
    correctAnswer: 2
  },
  {
    question: "Which method adds an element at the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: 0
  },
  {
    question: "Which operator checks value and type?",
    options: ["==", "=", "===", "!="],
    correctAnswer: 2
  }
];

// STATE
let currentIndex = 0;
let score = 0;
let selectedAnswer = null;
let interval;

// LOAD FIRST QUESTION
loadQuestion();

/* ---------------- FUNCTIONS ---------------- */

function loadQuestion() {
  const currentQ = quizQuestions[currentIndex];

  question.textContent = currentQ.question;
  options.innerHTML = "";
  selectedAnswer = null;

  currentQ.options.forEach((opt, index) => {
    const li = document.createElement("li");
    li.textContent = opt;

    li.onclick = () => {
      [...options.children].forEach(o => o.classList.remove("selected"));
      li.classList.add("selected");
      selectedAnswer = index;
    };

    options.appendChild(li);
  });

  resetTimer();
}

nextBtn.addEventListener("click", () => {
  if (selectedAnswer === null) {
    alert("Please select an option");
    return;
  }

  if (selectedAnswer === quizQuestions[currentIndex].correctAnswer) {
    score++;
  }

  currentIndex++;

  if (currentIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

/* ---------------- TIMER ---------------- */

function resetTimer() {
  clearInterval(interval);

  let timeLeft = 15;
  timer.textContent = `⏱️ ${timeLeft}`;

  interval = setInterval(() => {
    timeLeft--;
    timer.textContent = `⏱️ ${timeLeft}`;

    if (timeLeft === 0) {
      clearInterval(interval);
      nextBtn.click(); // auto next
    }
  }, 1000);
}

/* ---------------- RESULT ---------------- */

function showResult() {
  clearInterval(interval);

  document.body.innerHTML = `
    <div style="background:white;padding:30px;border-radius:8px;text-align:center;font-family:system-ui">
      <h2>Quiz Completed 🎉</h2>
      <h3>Your Score: ${score} / ${quizQuestions.length}</h3>
      <button onclick="location.reload()">Restart</button>
    </div>
  `;
}
