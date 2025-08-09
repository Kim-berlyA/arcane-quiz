function loadScriptOnce(url) {
  if (!document.querySelector(`script[src="${url}"]`)) {
    let newScript = document.createElement('script');
    newScript.src = url;
    newScript.type = 'module';
    document.body.appendChild(newScript);
    console.log(newScript);
  }
}

export function loadContent(page) {
  if (page === 'quiz') {
    document.querySelector('.app').innerHTML = `
      <div class="app-image">
        <img src="img/jinx-2.jpg" alt="arcane picture" class="image">
      </div>

      <h1 class="question js-question">Question</h1>

      <div class="divider">&nbsp;</div>

      <button class="option js-option-1">Answer 1</button>
      <button class="option js-option-2">Answer 2</button>
      <button class="option js-option-3">Answer 3</button>
      <button class="option js-option-4">Answer 4</button>

      <div class="navigation">
        <button id="previous-btn" class="quiz-btn js-previous-button hidden">Previous</button>
        <button class="quiz-btn js-next-button">Next</button>
        <button class="quiz-btn js-submit-button hidden">Submit</button>
      </div>
    `
    loadScriptOnce('./scripts/script.js');

  } else if (page === 'result') {
    document.querySelector('.app').innerHTML = 
     ` 
        <div class="result-container">
          <img src="img/91168c12776f6358cd7b85a6c1d34246.jpg" alt="" class="result-image">
          <p class="result-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, debitis libero facilis quaerat repellendus nihil eaque ab, impedit quis deserunt excepturi minus ut amet id, saepe earum eum inventore aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium incidunt dolorem aspernatur voluptatem animi, neque dolorum perspiciatis ipsum reiciendis tempore est eaque cum odio placeat illum iusto omnis provident.
          </p>
    `

  } else if (page === 'home') {
    document.querySelector('.app').innerHTML = `
      <div class="container">  
        <div class="intro">
          <h1 class="intro-heading">Which Arcane Character matches Your Personality?</h1>
        </div>
        <div class="start-btn-cont">
          <button class="start-btn quiz-btn js-start-btn">Start Quiz</button>
        </div>

        <div class="divider">&nbsp;</div>

        <div class="note-container">
          <h2 class="note-heading">Note</h2>
          <div class="notes">
            <li class="note-list">This personality quiz is not scientific, it is intended purely for fun</li>
            <li class="note-list">You can use the arrow keys to move to the next or previous question</li>
            <li class="note-list">Follow me on X(formerly twitter): <a href="https://x.com/LaTechGirly?t=iJrQEX1-05k0LjYKF8wy4g" class="twitter-link">@laTechGirly</a></li>
            <li class="note-list">Enjoy!</li>
          </div>
        </div>
      </div>
    `
  }
}

document.querySelector('.js-start-btn').addEventListener('click', () => {
  console.log('i');
  loadContent('quiz');
});