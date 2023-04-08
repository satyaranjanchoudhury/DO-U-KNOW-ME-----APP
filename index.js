var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("MAY I HAVE YOUR NAME ? ");

console.log("WELCOME " + userName + " TO-HOW WELL DO YOU KNOW ME ?");

var highScores = [
   {
    name: "SATYA",
    score: 11,
  },
  {
    name: "ALINA",
    score: 10,
  }
  ]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("YOU ARE RIGHT!");
    score = score + 1;
  } else {
    console.log("YOU ARE WRONG");
     }

  console.log("Current Score: ", score);
  console.log("-----------------")
}

// array of objects
var questions = [
  {
    question: "Where do I live? ",
    answer: "PARADEEP",
  },
  {
    question: "what i love to eat in non-veg? ",
    answer: "chicken",
  },
  {
    question: "what is my favourite sport? ",
    answer: "cricket",
  },
  {
    question: "What is my favorite superhero? ",
    answer: "batman",
  },
  {
    question: "what is my favourite movie? ",
    answer: "swadesh",
  },
  {
    question: "what is my birth month? ",
    answer: "may",
  }
]

// loop
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log("YAY! You SCORED: ", score);
console.log("-------------------")

console.log("Check out the high scorers - ");
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + ": " + highScores[i].score);
}
console.log("-------------------")

console.log("If you have scored better than the current high scorers then send me a screenshot of your score, so that I can add you to the high scorers list.")
console.log("Thank you for playing!")