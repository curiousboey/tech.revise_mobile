// Network fundamentals quiz questions are loaded from network-fundamentals-quiz.js
// Web development quiz questions are loaded from web-app-dev-quiz.js
// Nmap quiz questions are loaded from nmap-quiz.js
// Operating Systems quiz questions are loaded from OS-quiz.js

// Quiz data storage - questions are loaded from external files
const quizData = {
    'network-fundamentals': networkFundamentalsQuestions,
    'web-app-development': webAppDevQuestions,
    'nmap-quiz': nmapQuestions,
    'os-quiz': osQuizQuestions
};

let currentQuizType = 'network-fundamentals';
let currentQuestionIndex = 0;
let score = 0;
let randomizedQuestions = [];

// UI Elements
const dashboardPage = document.getElementById('dashboard');
const quizPage = document.getElementById('quiz-section');
const resultsPage = document.getElementById('results-section');

const dashboardBtn = document.getElementById('dashboard-btn');
const quizBtn = document.getElementById('quiz-btn');
const startQuizBtns = document.querySelectorAll('.start-quiz-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const scoreDisplay = document.getElementById('score-display');
const totalQuestionsDisplay = document.getElementById('total-questions');
const correctAnswersDisplay = document.getElementById('correct-answers');
const incorrectAnswersDisplay = document.getElementById('incorrect-answers');

// The "check-answer-btn" is no longer needed in the HTML and JS
const nextQuestionBtn = document.getElementById('next-question-btn');
const showHintBtn = document.getElementById('show-hint-btn');
const restartBtn = document.getElementById('restart-btn');

const hintSection = document.getElementById('hint-section');
const hintText = document.getElementById('hint-text');
const explanationSection = document.getElementById('explanation-section');
const explanationText = document.getElementById('explanation-text');

// Helper function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to update question counts dynamically
function updateQuestionCounts() {
    const questionCountElements = document.querySelectorAll('.question-count');
    questionCountElements.forEach(element => {
        const quizType = element.getAttribute('data-quiz');
        if (quizData[quizType] && quizData[quizType].length) {
            element.textContent = quizData[quizType].length;
        } else {
            // Fallback to 0 if quiz data is not available
            element.textContent = '0';
            console.warn(`Quiz data for ${quizType} is not available or empty`);
        }
    });
}

// Function to switch between pages
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');

    // Update navigation button states
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if (pageId === 'dashboard') {
        dashboardBtn.classList.add('active');
    } else if (pageId === 'quiz-section') {
        quizBtn.classList.add('active');
    }
}

// Function to start the quiz
function startQuiz(quizType = 'network-fundamentals') {
    currentQuizType = quizType;
    showPage('quiz-section');
    currentQuestionIndex = 0;
    score = 0;
    
    // Get the questions for the selected quiz type
    const selectedQuestions = quizData[currentQuizType];
    if (!selectedQuestions || selectedQuestions.length === 0) {
        alert('Quiz questions not loaded yet. Please try again.');
        return;
    }
    
    // Update quiz title
    const quizTitle = document.getElementById('quiz-title');
    if (currentQuizType === 'network-fundamentals') {
        quizTitle.textContent = 'Network Fundamentals';
    } else if (currentQuizType === 'web-app-development') {
        quizTitle.textContent = 'Web/App Development';
    } else if (currentQuizType === 'nmap-quiz') {
        quizTitle.textContent = 'Nmap & Network Security';
    } else if (currentQuizType === 'os-quiz') {
        quizTitle.textContent = 'Operating Systems';
    }
    
    // Randomize the order of the questions
    randomizedQuestions = [...selectedQuestions];
    shuffleArray(randomizedQuestions);

    totalQuestionsDisplay.textContent = randomizedQuestions.length;

    loadQuestion();
}

// Function to load a new question
function loadQuestion() {
    // Hide feedback sections
    hintSection.style.display = 'none';
    explanationSection.style.display = 'none';

    // Reset button states
    nextQuestionBtn.disabled = true;
    showHintBtn.disabled = false;
    
    // Check if the quiz is over
    if (currentQuestionIndex >= randomizedQuestions.length) {
        showResults();
        return;
    }

    const currentQuestion = randomizedQuestions[currentQuestionIndex];
    questionText.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    
    // Update progress bar
    const progress = (currentQuestionIndex / randomizedQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Randomize the options
    const options = [...currentQuestion.options];
    const originalAnswerIndex = currentQuestion.answer;
    const answerText = options[originalAnswerIndex];
    shuffleArray(options);

    // Find the new index of the correct answer
    const newAnswerIndex = options.indexOf(answerText);
    currentQuestion.randomizedAnswer = newAnswerIndex;

    optionsContainer.innerHTML = '';
    options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(optionElement, index));
        optionsContainer.appendChild(optionElement);
    });
}

// Function to handle option selection
function selectOption(optionElement, index) {
    // Deselect all other options
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
        opt.style.pointerEvents = 'none'; // Disable all options after selection
    });
    
    // Select the clicked option
    optionElement.classList.add('selected');
    
    const currentQuestion = randomizedQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    if (index === currentQuestion.randomizedAnswer) {
        options[index].classList.add('correct');
        score++;
    } else {
        options[index].classList.add('incorrect');
        // Also highlight the correct answer
        options[currentQuestion.randomizedAnswer].classList.add('correct');
    }
    
    // Show the explanation and enable the next button
    explanationSection.style.display = 'block';
    explanationText.textContent = currentQuestion.detailedExplanation;
    nextQuestionBtn.disabled = false;
    showHintBtn.disabled = true;
}

// Function to show a hint
function showHint() {
    const currentQuestion = randomizedQuestions[currentQuestionIndex];
    hintSection.style.display = 'block';
    hintText.textContent = currentQuestion.hint;
}

// Function to show the results
function showResults() {
    showPage('results-section');
    scoreDisplay.textContent = score;
    correctAnswersDisplay.textContent = score;
    incorrectAnswersDisplay.textContent = randomizedQuestions.length - score;
    progressBar.style.width = '100%';
}

// Event Listeners
startQuizBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const quizCard = e.target.closest('.quiz-card');
        const quizType = quizCard.getAttribute('data-quiz-id');
        startQuiz(quizType);
    });
});

nextQuestionBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

showHintBtn.addEventListener('click', showHint);

restartBtn.addEventListener('click', () => startQuiz(currentQuizType));

dashboardBtn.addEventListener('click', () => showPage('dashboard'));
quizBtn.addEventListener('click', () => {
    // Only show the quiz page if a quiz has been started
    if (randomizedQuestions.length > 0) {
        showPage('quiz-section');
    } else {
        alert('Please start a quiz from the dashboard first!');
    }
});

// Logo click functionality - return to dashboard/home page
document.getElementById('home-logo').addEventListener('click', () => {
    showPage('dashboard');
    // Ensure navigation buttons are updated correctly
    dashboardBtn.classList.add('active');
    quizBtn.classList.remove('active');
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    showPage('dashboard');
    updateQuestionCounts(); // Update question counts dynamically
});
