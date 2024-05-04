#!  /usr/bin/env node
import inquirer from 'inquirer';
const answers = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "enter your sentence for count:"
});
const words = answers.sentence.trim().split("");
console.log(words);
console.log(`the words count in sentence is : ${words.length}`);
