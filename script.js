const quizData = [
    {
        question: "Which game studio makes the RED DEAD REDEMPTION series ?",
        a: "Gameloft",
        b: "Epic Games",
        c: "Ubisoft",
        d: "Rockstar Games",
        correct: "d",
    },
    {
        question: "What is the fourth letter of Greek alphabet ?",
        a: "Alpha",
        b: "Delta",
        c: "Gamma",
        d: "Beta",
        correct: "b",
    },
    {
        question: "Which Planet has the most number of moons ?",
        a: "Saturn",
        b: "Mars",
        c: "Earth",
        d: "Neptune",
        correct: "a",
    },
    {
        question: "What is the only country flag that doesn't have four sides ?",
        a: "Bolivia",
        b: "Nepal",
        c: "Croatia",
        d: "Palestine",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})