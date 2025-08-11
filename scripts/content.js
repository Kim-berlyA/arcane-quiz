function loadScriptOnce(url) {
  if (!document.querySelector(`script[src="${url}"]`)) {
    let newScript = document.createElement('script');
    newScript.src = url;
    newScript.type = 'module';
    document.body.appendChild(newScript);
  }
}

export async function loadContent(page) {
  if (page === 'quiz') {
    document.querySelector('.app').innerHTML = `
      <div class="app-image">
        <img src="img/jinx-2.jpg" alt="arcane picture" class="image">
      </div>

      <h1 class="question js-question">When you're faced with a problem, you...</h1>

      <div class="divider">&nbsp;</div>

      <button class="option js-option js-option-1">"Do something unexpected and see what happens.</button>
      <button class="option js-option js-option-2">Tackle it head-on, no hesitation.</button>
      <button class="option js-option js-option-3">Look at the facts and find the cleanest solution.</button>
      <button class="option js-option js-option-4">Take a moment, rewind, and think it through.</button>

      <div class="navigation">
        <button id="previous-btn" class="quiz-btn js-previous-button hidden">Previous</button>
        <button class="quiz-btn js-next-button">Next</button>
        <button class="quiz-btn js-submit-button hidden">Submit</button>
      </div>
    `
    loadScriptOnce('./scripts/script.js');
    const module = await import('./script.js');
    module.optionClickListener();

  } else if (page === 'result') {
    document.querySelector('.app').innerHTML = 
     ` 
        <div class="result-container">
          <div class="result-image-container js-result-image-container">
            <img src="img/aVi.jpg" alt="character portrait" class="result-image">
          </div>
          <div class="result-title js-result-title"> </div>
          <div class="result-text js-result-text">
            Strategic and composed, you tend to approach important decisions with care and precision. You prefer to weigh your options fully before acting, and your calm presence often reassures those around you. While this carefulness might slow you down sometimes, it guarantees that when you do move forward, you do so with clarity and purpose.
          </div>
    `
    loadScriptOnce('./scripts/result.js');
  }
}

document.querySelector('.js-start-btn').addEventListener('click', () => {
  loadContent('quiz');
});