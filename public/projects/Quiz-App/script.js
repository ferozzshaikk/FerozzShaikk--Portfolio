document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");

  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "Which city is known as City of Love?",
      choices: ["London", "Paris", "New York", "Ottawa"],
      answer: "Paris",
      marks: 2,
    },
    {
      question: "Which city is known as the Big Apple?",
      choices: ["Los Angeles", "New York", "Chicago", "Miami"],
      answer: "New York",
      marks: 2.5,
    },
    {
      question: "Which city is referred to as the City of Canals?",
      choices: ["Amsterdam", "Venice", "Bangkok", "Bruges"],
      answer: "Venice",
      marks: 2,
    },
    {
      question: "Which is known as the City of Lights?",
      choices: ["Berlin", "Tokyo", "Paris", "Dubai"],
      answer: "Paris",
      marks: 1.5,
    },
    {
      question: "Which city is famously called the Eternal City?",
      choices: ["Athens", "Rome", "Istanbul", "Jerusalem"],
      answer: "Rome",
      marks: 2,
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let answered = false;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    answered = false;
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; //clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectedAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function selectedAnswer(choice) {
    const listItems = choicesList.querySelectorAll("li");

    // Remove 'selected' class from all choices
    listItems.forEach((li) => li.classList.remove("selected"));

    // Find and highlight the currently clicked one
    const selectedLi = Array.from(listItems).find(
      (li) => li.textContent === choice
    );
    selectedLi.classList.add("selected");

    const correctAnswer = questions[currentQuestionIndex].answer;
    if (!answered && choice === correctAnswer) {
      score += questions[currentQuestionIndex].marks 
      answered = true;
    }

    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    const totalMarks = questions.reduce((sum, q) => sum+q.marks, 0)
    scoreDisplay.textContent = `${score} Out of ${totalMarks}`;
  }
});
