let characters = [
  {name: "Jinx", score: 0},
  {name: "Vi", score: 0},
  {name: "Viktor", score: 0},
  {name: "Jayce", score: 0},
  {name: "Caitlyn", score: 0},
  {name: "Ekko", score: 0}
]

const questions = [
{
  question : "When you're faced with a problem, you...",
  options : [
    {text: "Do something unexpected and see what happens.", characters: ["Jinx"]},
    {text: "Tackle it head-on, no hesitation.", characters: ["Vi"]},
    {text: "Look at the facts and find the cleanest solution.", characters: ["Caitlyn"]},
    {text: "Take a moment, rewind, and think it through.", characters: ["Ekko"]}
  ]
},
{
  question : "Your ideal day involves...",
  options : [
    {text: "Building something that could change everything.", characters: ["Jayce"]},
    {text: "Exploring the city and helping where you can.", characters: ["Ekko"]},
    {text: "A bit of chaos, just to keep things interesting.", characters: ["Jinx"]},
    {text: "Quietly observing and planning your next move.", characters: ["Viktor"]}
  ]
},
{
  question : "Pick the quote that speaks to you most:",
  options : [
    {text: "Precision beats power.", characters: ["Caitlyn"]},
    {text: "If it breaks, make it better.", characters: ["Jayce"]},
    {text: "Nothing ever goes according to plan—perfect.", characters: ["Jinx"]},
    {text: "The future belongs to those who evolve.", characters: ["Viktor"]}
  ]
},
{
  question : "How do you react to authority?",
  options : [
    {text: "It\'s a tool—use it or bend it.", characters: ["Viktor"]},
    {text: "You respect it, but won\'t be controlled by it.", characters: ["Vi"]},
    {text: "You question it and challenge it often.", characters: ["Ekko"]},
    {text: "You are it.", characters: ["Jayce"]}
  ]
},
{
  question : "Which setting feels most like home?",
  options : [
    {text: "A quiet lab, humming with energy.", characters: ["Viktor"]},
    {text: "The busy streets full of people and stories.", characters: ["Ekko"]},
    {text: "A rooftop overlooking the city at night.", characters: ["Caitlyn"]},
    {text: "An abandoned warehouse with your own personal touch.", characters: ["Jinx"]}
  ]
},
{
  question : "What\'s your vibe in a group?",
  options : [
    {text: "The one who keeps everyone moving forward.", characters: ["Jayce"]},
    {text: "The wildcard—never predictable.", characters: ["Jinx"]},
    {text: "The silent observer, always calculating.", characters: ["Viktor"]},
    {text: "The one who throws the first punch when needed.", characters: ["Vi"]}
  ]
},
{
  question : "Choose your favorite kind of power:",
  options : [
    {text: "The kind that reshapes reality.", characters: ["Viktor"]},
    {text: "The strength to protect others.", characters: ["Vi"]},
    {text: "The influence to change minds.", characters: ["Caitlyn"]},
    {text: "The spark that inspires progress.", characters: ["Ekko"]}
  ]
},
{
  question : "When you fail at something important, you...",
  options : [
    {text: "Laugh it off and try again, differently.", characters: ["Jinx"]},
    {text: "Review every step until you understand it.", characters: ["Caitlyn"]},
    {text: "Get up and power through.", characters: ["Vi"]},
    {text: "Retreat, reflect, then come back stronger.", characters: ["Ekko"]}
  ]
},
{
  question : "What do others often misunderstand about you?",
  options : [
    {text: "They think you don\'t care—when you really do.", characters: ["Viktor"]},
    {text: "They assume you\'re all about control.", characters: ["Caitlyn"]},
    {text: "They miss your softer side.", characters: ["Vi"]},
    {text: "They think you're reckless, but you're calculated.", characters: ["Jinx"]}
  ]
},
{
  question : "In conflict, what's your role?",
  options : [
    {text: "The strategist who sees all the angles.", characters: ["Caitlyn"]},
    {text: "The shield standing between danger and your people.", characters: ["Vi"]},
    {text: "The disruptor who flips the script", characters: ["Jinx"]},
    {text: "The thinker who builds the solution.", characters: ["Jayce"]}
  ]
},
{
  question : "How do you define freedom?",
  options : [
    {text: "Living without limits, no matter the cost.", characters: ["Jinx"]},
    {text: "The ability to pursue your ideas fully.", characters: ["Jayce"]},
    {text: "Justice without compromise.", characters: ["Caitlyn"]},
    {text: "Carving your own path, even if it's messy.", characters: ["Ekko"]}
  ]
},
{
  question : "What draws people to you?",
  options : [
    {text: "Your intensity and drive.", characters: ["Viktor"]},
    {text: "Your wild charm.", characters: ["Jinx"]},
    {text: "Your clear logic and calm presence.", characters: ["Caitlyn"]},
    {text: "Your energy and belief in a better future.", characters: ["Ekko"]}
  ]
},
{
  question : "Which metaphor fits you best?",
  options : [
    {text: "A lightning bolt that strikes and disappears.", characters: ["Jayce"]},
    {text: "A loaded question no one wants to answer.", characters: ["Jinx"]},
    {text: "A ticking clock counting toward something big.", characters: ["Ekko"]},
    {text: "A locked door only a few can open.", characters: ["Viktor"]}
  ]
},
{
  question : "What do you value most in yourself?",
  options : [
    {text: "Your strength to face things others can\'t.", characters: ["Vi"]},
    {text: "Your creativity and love of building.", characters: ["Jayce"]},
    {text: "Your independence and unpredictability.", characters: ["Jinx"]},
    {text: "Your insight and vision for what\'s ahead.", characters: ["Viktor"]}
  ]
},
{
  question : "If you had a secret, you\'d…",
  options : [
    {text: "Encode it into a design no one notices.", characters: ["Viktor"]},
    {text: "Tell no one, ever.", characters: ["Caitlyn"]},
    {text: "Drop hints just to see who\'s paying attention.", characters: ["Jinx"]},
    {text: "Only share it with someone who\'s earned your trust.", characters: ["Vi"]}
  ]
}
]

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
if (currentQuestion === 0) {
  document.querySelector('.js-previous-button').classList.add('hidden');
}
if (currentQuestion === questions.length-1) {
  document.querySelector('.js-next-button').classList.add('hidden');
}
if (currentQuestion > 0) {
  document.querySelector('.js-previous-button').classList.remove('hidden');
  }
if (currentQuestion < questions.length-1) {
document.querySelector('.js-next-button').classList.remove('hidden');
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
  document.querySelector('.app-img').innerHTML = '<img src="img/jinx-2.jpg" alt="mountain" class="image-carousel">'
} else if (currentQuestion === 1) {
  document.querySelector('.app-img').innerHTML = '<img src="img/viktor-and-jayce.jpg" alt="mountain" class="image-carousel">'
} else if (currentQuestion === 2) {
  document.querySelector('.app-img').innerHTML = '<img src="img/isha-1.jpg" alt="mountain" class="image-carousel">'
} else if (currentQuestion === 3) {
  document.querySelector('.app-img').innerHTML = '<img src="img/caitlyn.jpg" alt="mountain" class="image-carousel">'
} else if (currentQuestion === 4) {
  document.querySelector('.app-img').innerHTML = '<img src="img/firelight-hideout.jpg" alt="mountain" class="image-carousel">'
} else if (currentQuestion === 5) {
  document.querySelector('.app-img').innerHTML = '<img src="img/silco-and-jinx.jpg" alt="mountain" class="image-carousel">'
} else if (currentQuestion === 6) {
  document.querySelector('.app-img').innerHTML = '<img src="img/viktor-3.jpg" alt="mountain" class="image-carousel">'
} else if (currentQuestion === 7) {
  document.querySelector('.app-img').innerHTML = '<img src="img/jinx-and-ekko-6.jpg" alt="mountain" class="image-carousel">'
} else if (currentQuestion === 8) {
  document.querySelector('.app-img').innerHTML = '<img src="img/sevika-and-jinx.jpg" alt="mountain" class="image-carousel">'
} else if (currentQuestion === 9) {
  document.querySelector('.app-img').innerHTML = '<img src="img/jinx-vs-vi.jpg" alt="mountain" class="image-carousel">'
} else if (currentQuestion === 10) {
  document.querySelector('.app-img').innerHTML = '<img src="img/jinx-and-ekko-4.jpg" alt="mountain" class="image-carousel">'
} else if (currentQuestion === 11) {
  document.querySelector('.app-img').innerHTML = '<img src="img/ekko.jpg" alt="mountain" class="image-carousel">'
} else if (currentQuestion === 12) {
  document.querySelector('.app-img').innerHTML = '<img src="img/powder.jpg" alt="mountain" class="image-carousel">'
} else if (currentQuestion === 13) {
  document.querySelector('.app-img').innerHTML = '<img src="img/jinx-3.jpg" alt="mountain" class="image-carousel">'
} else if (currentQuestion === 14) {
  document.querySelector('.app-img').innerHTML = '<img src="img/viktor.jpg" alt="mountain" class="image-carousel">'
}
}