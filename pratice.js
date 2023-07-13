// deposit the money
// number of lines to bet on
//collect the bet money
// spin the slot machine
//if won declare it
// give the user wining or lose take the money
// play again

// require function use to use prompt-sync
const Prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositNumber = Prompt("Enter the number:");
    const IsNumberDeposit = parseFloat(depositNumber);

    if (isNaN(IsNumberDeposit) || IsNumberDeposit <= 0) {
      console.log("invalid Deposit Amount, try again.");
    } else {
      return IsNumberDeposit;
    }
  }
};

const GetNumberOfLines = () => {
  while (true) {
    const lines = Prompt("Enter number of lines:");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Enter valid line you want to choose.");
    } else {
      return numberOfLines;
    }
  }
};

const mybet = (balance, lines) => {
  while (true) {
    const bet = Prompt("enter the bet per lines:");
    const NumberBet = parseFloat(bet);

    if (isNaN(NumberBet) || NumberBet <= 0 || NumberBet > balance / lines) {
      console.log("wrong number");
    } else {
      return NumberBet;
    }
  }
};

let balance = deposit();
const numberOfLines = GetNumberOfLines();
const bet = mybet(balance, numberOfLines);

console.log(balance, numberOfLines, bet);
