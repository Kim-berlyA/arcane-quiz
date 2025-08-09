import { questions } from "./questions.js";
import{loadContent} from "./content.js"

let currentQuestion = 0;

function nextQuestion() {
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

function previousQuestion() {
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

function updateNavButtons() {
  const previousButton = document.querySelector('.js-previous-button');
  const nextButton = document.querySelector('.js-next-button');
  const submitButton = document.querySelector('.js-submit-button');

  if (currentQuestion === 0) {
    previousButton.classList.add('hidden');
    submitButton.classList.add('hidden');
  }
  if (currentQuestion === questions.length-1) {
    nextButton.classList.add('hidden');
    submitButton.classList.remove('hidden');
  }
  if (currentQuestion > 0) {
    previousButton.classList.remove('hidden');
    }
  if (currentQuestion < questions.length-1) {
    nextButton.classList.remove('hidden');
    submitButton.classList.add('hidden');
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

function updateImage() {
  if (currentQuestion === 0) {
    document.querySelector('.app-image').innerHTML = '<img src="img/jinx-2.jpg" alt="mountain" class="image">'
  } else if (currentQuestion === 1) {
    document.querySelector('.app-image').innerHTML = '<img src="img/viktor-and-jayce.jpg" alt="mountain" class="image">'
  } else if (currentQuestion === 2) {
    document.querySelector('.app-image').innerHTML = '<img src="img/isha-1.jpg" alt="mountain" class="image">'
  } else if (currentQuestion === 3) {
    document.querySelector('.app-image').innerHTML = '<img src="img/caitlyn.jpg" alt="mountain" class="image">'
  } else if (currentQuestion === 4) {
    document.querySelector('.app-image').innerHTML = '<img src="img/firelight-hideout.jpg" alt="mountain" class="image">'
  } else if (currentQuestion === 5) {
    document.querySelector('.app-image').innerHTML = '<img src="img/silco-and-jinx.jpg" alt="mountain" class="image">'
  } else if (currentQuestion === 6) {
    document.querySelector('.app-image').innerHTML = '<img src="img/viktor-3.jpg" alt="mountain" class="image">'
  } else if (currentQuestion === 7) {
    document.querySelector('.app-image').innerHTML = '<img src="img/jinx-and-ekko-6.jpg" alt="mountain" class="image">'
  } else if (currentQuestion === 8) {
    document.querySelector('.app-image').innerHTML = '<img src="img/sevika-and-jinx.jpg" alt="mountain" class="image">'
  } else if (currentQuestion === 9) {
    document.querySelector('.app-image').innerHTML = '<img src="img/jinx-vs-vi.jpg" alt="mountain" class="image">'
  } else if (currentQuestion === 10) {
    document.querySelector('.app-image').innerHTML = '<img src="img/jinx-and-ekko-4.jpg" alt="mountain" class="image">'
  } else if (currentQuestion === 11) {
    document.querySelector('.app-image').innerHTML = '<img src="img/ekko.jpg" alt="mountain" class="image">'
  } else if (currentQuestion === 12) {
    document.querySelector('.app-image').innerHTML = '<img src="img/powder.jpg" alt="mountain" class="image">'
  } else if (currentQuestion === 13) {
    document.querySelector('.app-image').innerHTML = '<img src="img/jinx-3.jpg" alt="mountain" class="image">'
  } else if (currentQuestion === 14) {
    document.querySelector('.app-image').innerHTML = '<img src="img/viktor.jpg" alt="mountain" class="image">'
  }
}

document.querySelector('.js-submit-button').addEventListener('click', () => {
  console.log('i');
  loadContent('result');
});