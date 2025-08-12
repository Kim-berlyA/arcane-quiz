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

      <button class="option js-option js-option-1">Do something unexpected and see what happens.</button>
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
          <div class="result-title js-result-title">Jinx — Unpredictable and Creative</div>
          <div class="result-text js-result-text">
            You are unpredictable and creative, thriving in the chaos of life and turning challenges into opportunities to express yourself. Your ideas come fast and free, and you often act on impulse or instinct rather than overthinking, which makes you exciting and sometimes surprising to those around you. While your spontaneity can sometimes cause trouble, it also shows your fearless and bold nature. For the people you trust deeply, your loyalty is fierce, even if you express it in ways that others might find unusual or hard to read
          </div>
    `
    loadScriptOnce('./scripts/result.js');
  }
}

document.querySelector('.js-start-btn').addEventListener('click', () => {
  loadContent('quiz');
});