#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

function intro(){
    console.log(chalk.bold.yellow(("\n\n--------------WELCOME TO TYPESCRIPT QUIZ-----------------\n\n")));
}
intro();

let totalMarks = 0;

const ask =  await inquirer.prompt({
    name:"ask",
    type:"confirm",
    message:"Do you want to take the Quiz?",
    
})
if(ask.ask === true){
    console.log(chalk.italic.greenBright("\n\nWelcome to the TypeScript Quiz! This quiz consists of 5 multiple-choice questions based on TypeScript, with each question carrying equal marks.\n\n"));



    const start = await inquirer.prompt({
        name:"start",
        type:"checkbox",
        message:"Start the Quiz!!",
        choices:["Start"]       
    });

 const m1 = await inquirer.prompt({
    name:"mcqs1",
    type:"list",
    message:"1} What is TypeScript?",
    choices:["a) A type of coffee","b) A programming language similar to JavaScript","c) A tool for making websites look nice","d) A type of bird"]
 });

  if(m1.mcqs1 === "b) A programming language similar to JavaScript"){
    totalMarks += 1;
  };

 const m2 = await inquirer.prompt({
    name:"mcqs2",
    type:"list",
    message:"2) Is TypeScript a superset or subset of JavaScript?",
    choices:["a) Superset","b) Subset"]
 });

 if(m2.mcqs2 === "a) Superset"){
    totalMarks += 1;
  };

 const m3 = await inquirer.prompt({
    name:"mcqs3",
    type:"list",
    message:"3) What file extension is used for TypeScript files??",
    choices:["a) .js","b) .html","c) .ts","d) .css"]
 });

 if(m3.mcqs3 === "c) .ts"){
    totalMarks += 1;
  };

 const m4 = await inquirer.prompt({
    name:"mcqs4",
    type:"list",
    message:"4) Which TypeScript data type represents a true or false value?",
    choices:["a) number"," b) string","c) boolean","d) array"]
 });

 if(m4.mcqs4 === "c) boolean"){
    totalMarks += 1;
  };

 const m5 = await inquirer.prompt({
    name:"mcqs5",
    type:"list",
    message:"5) How do you compile TypeScript code into JavaScript? ",
    choices:["a) Run the command 'tsc'","b) Run the command 'npm start'","c) Run the command 'ng build'","d) Run the command 'webpack'"]
 });

 if(m5.mcqs5 === "a) Run the command 'tsc'"){
    totalMarks += 1;
  };
 
  console.log(chalk.bold.green(`\n\nYour Total marks are ${totalMarks}`));
if (totalMarks <= 1) {
    console.log(chalk.red.bold("Practice Typescript More!!"));
} else if (totalMarks <= 3) {
    console.log(chalk.bold.blue("Explore Typescript More!!"));
} else if (totalMarks === 4) { 
    console.log(chalk.bold.blueBright("Keep it up!!"));
} else if (totalMarks === 5) { 
    console.log(chalk.bold.greenBright("Congratulations, you are Amazing in Typescript!!"));
} else {
    console.log(chalk.bold.red("Practice and Take the Quiz Again!!"));
}
}else{
    console.log(chalk.blue("\n\nStart learning typescript!!\n\n"));
}
