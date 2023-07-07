// deposit the money
// number of lines to bet on
//collect the bet money
// spin the slot machine
//if won declare it
// give the user wining or lose take the money
// play again

const PromptSync = require("prompt-sync");

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

let balance = deposit();
const numberOfLines = GetNumberOfLines();

console.log(balance, numberOfLines);
console.log("hello");
