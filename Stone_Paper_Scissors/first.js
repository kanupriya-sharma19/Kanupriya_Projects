let userscore = 0;
let compscore = 0;

const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#comscore");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencomp = () => {
  const options = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return options[random];
};

const drawGame = () => {
  msg.innerText = "Game was draw,play again";
  msg.style.backgroundColor = "black";
};

const showWinner = (userwin, userchoice, compChoice) => {
  if (userwin) {
    userscore++;
    userScorePara.innerText = userscore;
    msg.innerText = `You win! your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compScorePara.innerHTML = compscore;
    msg.innerText = `You lose! ${compChoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userchoice) => {
  const compChoice = gencomp();
  if (userchoice === compChoice) drawGame();
  else {
    let userwin = true;
    if (userchoice === "rock") {//paper,scissors
      userwin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compChoice === "scissors" ? false : true;
    } else {//user-rock
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
