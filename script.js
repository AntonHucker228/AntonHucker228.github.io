// JavaScript код
let currentQuestion = 0;
let questions = [
    {
        question: "Какой напиток предпочитают итальянские вампиры?",
        answers: ["Томатный сок", "Красное вино", "Эспрессо", "Воду"],
        correctAnswer: 1 // Красное вино
    },
    {
        question: "Что едят итальянские оборотни?",
        answers: ["Пасту", "Мясо", "Пиццу", "Овощи"],
        correctAnswer: 1 // Мясо
    },
    {
        question: "Куда ходят на пляж итальянские русалки?",
        answers: ["В Венецию", "На Сицилию", "В Римини", "В Неаполь"],
        correctAnswer: 3 // В Римини
    }
];

function showQuestion() {
    const questionDiv = document.getElementById("question");
    const answersDiv = document.getElementById("answers");
    const nextButton = document.getElementById("nextButton");

    questionDiv.textContent = questions[currentQuestion].question;
    answersDiv.innerHTML = "";

    questions[currentQuestion].answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => selectAnswer(index));
        answersDiv.appendChild(button);
    });

    nextButton.style.display = "none";
}

function selectAnswer(index) {
    const answersDiv = document.getElementById("answers");
    const nextButton = document.getElementById("nextButton");

    // Удаляем класс selected у всех кнопок
    Array.from(answersDiv.children).forEach(button => {
        button.classList.remove("selected");
    });

    // Добавляем класс selected к выбранной кнопке
    answersDiv.children[index].classList.add("selected");

    // Показываем кнопку "Следующий"
    nextButton.style.display = "block";
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
}

// JavaScript код (продолжение)

document.getElementById("nextButton").addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

document.getElementById("playButton").addEventListener("click", () => {
    document.getElementById("cover").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
});
