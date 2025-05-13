const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

let reset = document.querySelector(".reset");

let compScore = 0;
let userScore = 0;
//loop for selecting each choices and adding event listener
choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  console.log("user choice=", userChoice);

  const comChoice = genCompChoice(); // generate computer choice
  console.log("computer choice", comChoice);

  //conditional statements for logic
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

// functions
//  Getting computer choice using random function
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
// function for game draw
const drawGame = () => {
  msg.innerHTML = "It's a draw ! Play again";
  msg.style.backgroundColor = "#081b31";
};
// function for show Winner

const showWinner = (userWin, userChoice, comChoice) => {
  if (userWin === true) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerHTML = `You Win ! Your ${userChoice} beats ${comChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerHTML = `You loose ! ${comChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// reset game button
reset.addEventListener("click", () => {
  compScorePara.innerText = 0;
  userScorePara.innerText = 0;
  compScore = 0;
  userScore = 0;
});
