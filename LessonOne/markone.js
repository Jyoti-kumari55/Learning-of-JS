var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What is your name? ");
console.log("Welcome " , userName, " to the neog camp Quiz game.");
console.log("------------------------------------------------------ \n");
console.log("-----------------------Let's start your Game" ,userName, "------------------------------- \n");



// Quiz array of Objects
var cliQuiz = [
   
    {
        question:"1. What is my favorite super hero name? ",
        correctAns: "Iron Man"

    },
    {
        question:"2. What is the name of Iron man in movie? ",
        correctAns: "Tonny Stark"

    },
    {
        question:"3. How many part of iron man? ",
        correctAns: "3"

    },

    {
        question:"4. When Iron man 1 was released? ",
        correctAns: "2008"

    },

    {
        question:"5. What is the costume color of Iron man? ",
        correctAns: "Red"

    },
    {
        question:"6. What is your second favorite super hero name? ",
        correctAns: "Thor"

    },
    
    {
        question:"7. What's the weapon of Thor? ",
        correctAns: "Hammer"

    },

    {
        question:"8. Can Thor beat others avengers? ",
        correctAns: "Absolutely"

    }
];

// Data for hogh scores
var highScore = [
    {
        name: "Amit",
        marks: 32
    },
    {
        name:"Sumit",
        marks:38
    },
    {
        name: "Praveen",
        marks: 23
    }
];

function playQuiz(question, correctAns){
    var userAns = readlineSync.question(question);
    if(userAns.toUpperCase() === correctAns.toUpperCase()){
     console.log("\nCorrect answer\n");
     score += 5;

     console.log("\nWOOAAHHH, Right Answer (+5) \nScore :", score);
     console.log("------------------------------------------------------ \n");
    }else{

    //Decrementing the score on every wrong answer.
     score = score - 2;

     //Printing message and current score after losing  the point
     console.log("OOOOOPS, Wrong Answer (-2) \nScore :", score);
     console.log('-----------------\n')

     console.log("Correct answer of above question is: ",correctAns, "\n")

    }
    console.log('Current Score: ', score);
    console.log("------------------------------------------------------ \n");
};

for(var i = 0; i < cliQuiz.length; i++){
    playQuiz(cliQuiz[i].question, cliQuiz[i].correctAns);
}
console.log('YAY! You SCORED: ', score)
console.log('-------------------')
console.log("Check out who got the high score....");
console.log("------------------------------------------------------ \n");

for(var i = 0; i < highScore.length; i++){
    console.log(highScore[i].name + ": " + highScore[i].marks)

}
console.log("------------------------------------------------------ \n");
console.log("If you have scored better than the current high scorers then send me a screenshot of your score, so that I can add you to the high scorers list.");
console.log('Thank you for playing!');
console.log("------------------------------------------------------ \n");
console.log("------------------------------------------------------ \n");

  
        
         