import { questions } from "./questions.js";

function createTextToDisplayQuestion(questionObject) {
  const choices = Object.entries(questionObject.choices)
    .map(([letter, choice]) => `${letter}) ${choice}`)
    .join("\n");
  const textToDisplay = `#${questionObject.number} ${questionObject.question}\n\n${choices}\n\nPlease enter either A, B, C or D.\n`;
  return textToDisplay;
}

function getSelectedChoiceFromUser(questionText) {
  while (true) {
    const rawChoice = prompt(questionText);
    const standardised = rawChoice?.toUpperCase();
    if (
      "A" === standardised ||
      "B" === standardised ||
      "C" === standardised ||
      "D" === standardised
    ) {
      return standardised;
    } else if (undefined === standardised) {
      return null;
    }
    alert("Invalid selection, please enter either A, B, C or D.");
  }
}

function playGame() {
  let userHasCancelled = !confirm(
    "The quiz is about to begin. Are you sure you want to play?"
  );
  if (userHasCancelled) {
    return alert("You've cancelled the quiz, no questions will be shown.");
  }

  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const text = createTextToDisplayQuestion(question);
    const userChoice = getSelectedChoiceFromUser(text);

    const userHasCancelled = null === userChoice;
    if (userHasCancelled) {
      return alert(
        "You've cancelled the quiz, no more questions will be shown."
      );
    }

    const userHasAnsweredIncorrectly = userChoice !== question.correctChoice;
    if (userHasAnsweredIncorrectly) {
      const correctChoice = question.correctChoice;
      const correctChoiceText = question.choices[correctChoice];
      alert(
        `Incorrect, you lose! The correct answer was ${question.correctChoice} ${correctChoiceText}. Your score is ${score}.`
      );
      return;
    } else {
      score++;
      alert(`Correct! Your score is now ${score}!`);
    }
  }

  alert(
    `You've reached the end of the quiz, your score was ${score}. Please play again!`
  );
}

playGame();
