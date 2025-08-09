export function loadContent() {
  let appHTML = `
    <div class="app">
      <div class="app-content">
        <div class="app-img">
          <img src="img/jinx-2.jpg" alt="arcane picture" class="image-carousel">
        </div>

        <div class="quiz">
          <div class="questions">
            <h1 class="question js-question">Question</h1>
          </div>

          <hr />

          <div class="options">
            <button class="btn js-option-1">Answer 1</button>
            <button class="btn js-option-2">Answer 2</button>
            <button class="btn js-option-3">Answer 3</button>
            <button class="btn js-option-4">Answer 4</button>
          </div>

          <div class="navigation">
            <button id="previous-btn" class="quiz-btn js-previous-button hidden">Previous</button>
            <button class="quiz-btn js-next-button">Next</button>
            <button class="quiz-btn js-submit-button hidden">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <script src="buttonFunctions.js"></script> 
    `;
  document.querySelector('.container').innerHTML = appHTML;
  console.log(appHTML);
}