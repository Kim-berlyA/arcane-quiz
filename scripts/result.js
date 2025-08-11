import { characters } from "./questions.js";

function getTopCharacter() {
  let topCharacter = characters[0];

  characters.forEach(character => {
    if (character.score > topCharacter.score) {
      topCharacter = character;
    }
  });
  
  document.querySelector('.js-result-title').innerHTML = topCharacter.descriptionTitle;

  document.querySelector('.js-result-text').innerHTML = topCharacter.description;

  document.querySelector('.js-result-image-container').innerHTML = topCharacter.image;
}

getTopCharacter();