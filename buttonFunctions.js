import { questions } from "./questions.js";

export function nextQuestion() {
  if (currentQuestion < questions.length) {
    document.querySelector('.js-question').innerHTML = questions[currentQuestion].question;

    document.querySelector('.js-option-1').innerHTML = questions[currentQuestion].options[0].text;
    document.querySelector('.js-option-2').innerHTML = questions[currentQuestion].options[1].text;
    document.querySelector('.js-option-3').innerHTML = questions[currentQuestion].options[2].text;
    document.querySelector('.js-option-4').innerHTML = questions[currentQuestion].options[3].text;
    updateNavButtons();
    updateImage();
  }
}

document.querySelector('.js-next-button').addEventListener('click', function() {
  currentQuestion++;
  nextQuestion();
});
nextQuestion();

export function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    document.querySelector('.js-question').innerHTML = questions[currentQuestion].question;

    document.querySelector('.js-option-1').innerHTML = questions[currentQuestion].options[0].text;
    document.querySelector('.js-option-2').innerHTML = questions[currentQuestion].options[1].text;
    document.querySelector('.js-option-3').innerHTML = questions[currentQuestion].options[2].text;
    document.querySelector('.js-option-4').innerHTML = questions[currentQuestion].options[3].text;
    
  updateNavButtons();
  updateImage();
  }
}

document.querySelector('.js-previous-button').addEventListener('click', function() {
  previousQuestion();
});

export function updateNavButtons() {
  const previousButton = document.querySelector('.js-previous-button');
  const nextButton = document.querySelector('.js-next-button');
  const submitLink = document.querySelector('.js-submit-link');

  if (currentQuestion === 0) {
    previousButton.classList.add('hidden');
    submitLink.classList.add('hidden');
  }
  if (currentQuestion === questions.length-1) {
    nextButton.classList.add('hidden');
    submitLink.classList.remove('hidden');
  }
  if (currentQuestion > 0) {
    previousButton.classList.remove('hidden');
    }
  if (currentQuestion < questions.length-1) {
    nextButton.classList.remove('hidden');
    submitLink.classList.add('hidden');
  }
}

  document.body.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    if (currentQuestion < questions.length-1 && currentQuestion >= 0) {document.querySelector('.js-next-button').click();
    }
  } else if (event.key === 'ArrowLeft') {
    if (currentQuestion > 0) {document.querySelector('.js-previous-button').click();
    }
  }
});
