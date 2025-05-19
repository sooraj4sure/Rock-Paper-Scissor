const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compChoiceText = document.querySelector("#comp-choice");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

let reset = document.querySelector(".reset");

let compScore = 0;
let userScore = 0;

// Loop through each choice and add event listener
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  console.log("User choice =", userChoice);

  const comChoice = genCompChoice(); // generate computer choice
  console.log("Computer choice =", comChoice);

  // Show computer's choice on the page
  compChoiceText.innerText = `Computer chose: ${comChoice}`;

  // Game logic
  if (comChoice === userChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = comChoice === "scissor" ? false : true;
    } else {
      userWin = comChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, comChoice);
  }
};

// Generate computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Game draw function
const drawGame = () => {
  msg.innerHTML = "It's a draw! Play again.";
  msg.style.backgroundColor = "#081b31";
};

// Show winner function
const showWinner = (userWin, userChoice, comChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerHTML = `You Win! Your ${userChoice} beats ${comChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerHTML = `You lose! ${comChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Reset game
reset.addEventListener("click", () => {
  compScorePara.innerText = 0;
  userScorePara.innerText = 0;
  compScore = 0;
  userScore = 0;
  msg.innerHTML = "Start The Game";
  msg.style.backgroundColor = "#081b31";
  compChoiceText.innerText = "Computer chose: -";
});
