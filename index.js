
var readlineSync = require('readline-sync');
var score =0;
const chalk= require("chalk");
const log= console.log;


var userName = readlineSync.question("What's your name? ");
log(chalk.bgBlue.bold("*Hello "+ chalk.yellow(userName) + " Welcome to a quiz about me!*\n"))


console.log(chalk.yellow.underline("Answer the below questions and you will get a score at the end : \n"))


// Defining a function "play" with quiz logic
function play (question, answer)
{
  var userAns= readlineSync.question(question);
    if(userAns==answer)
    {
      console.log(chalk.green("\n Right! \n"))
      score = score + 1;
     
    }
    else
    {
      console.log(chalk.red("\n Wrong! \n"))
    }
  console.log(chalk.blue.bold("Your current score is : " + score))
   console.log("-------------------")
  return chalk.black.bgCyan("\n Thank you for taking this quiz.") + chalk.bgYellow( "\n Your Total score is : "+ score);
}



// Defining a data structure for the function "play"
var questions =[
{
  question : "What is my First Name? ",
  answer : "syed"
},
{
  question : "How old am I? ",
  answer : "21"

},
{
  question : "What is my favourite food? ",
  answer : "pasta"

},
{
  question : "Do I like Tea or Coffee? ",
  answer : "coffee"

}
];



//Loop to call the "play" function
for( var i=0; i<questions.length; i++)
{
currentQues=questions[i];
play(currentQues.question, currentQues.answer);

}
