const phrases = ["Data Analyst!", "Developer!", "Machine learning Explorer!"];
let currentPhraseIndex = 0;
let currentCharacterIndex = 0;
const typingSpeed = 100;
const pauseTime = 200;

function typeEffect() {
  const dynamicTextElement = document.getElementById("dynamic-text");
  dynamicTextElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharacterIndex);

  if (currentCharacterIndex < phrases[currentPhraseIndex].length) {
    currentCharacterIndex++;
    setTimeout(typeEffect, typingSpeed);
  } else {
    setTimeout(() => {
      currentCharacterIndex = 0;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, pauseTime);
    }, pauseTime);
  }
}

typeEffect();

