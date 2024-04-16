#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    { name: "userGussingGame",
        type: "number",
        message: "gussed a number between 1-10",
    }
]);
if (answer.userGussingGame === randomNumber) {
    console.log("congtratulation! you gussed true number");
}
else {
    console.log("you gussed wrong number");
}
