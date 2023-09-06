var readlineSync = require('readline-sync')
var chalk = require('chalk')

var score = 0;
console.log(chalk.bgCyan.blueBright.bold.italic("Let's check how much you know about your Avengers or favourite Super heroes.."));
console.log(chalk.red("\n************************\n"));

var userName = readlineSync.question("What is your name? ");
console.log(chalk.green("Welcome ",userName));
console.log("Let's start the quiz\n");



//Array of questions
var marvelQuestions = [
    {
        marvalType: "normal",
        questionNo: 1,
        question: chalk.green("What is the name of Thor's hammer? "),
        options: ["Vanir", "Mjolnir","Aesir","Norn"],
        answer: 3       
    },

    {
        marvalType: "normal",
        questionNo: 2,
        question: chalk.green("What is Captain America's shield made of? "),
        options: ["Adamantium", "Vibranium","Promethium","Carbonadium"],
        answer: 2       
    },

    {
        marvalType: "normal",
        questionNo: 3,
        question: chalk.green("The Flerkens are a race of extremely dangerous aliens that resembles what? "),
        options: ["Cats", "Ducks","Reptils","Raccoons"],
        answer: 1       
    },

    {
        marvalType: "normal",
        questionNo: 4,
        question: chalk.green("Before becoming Vision, what is the name of Iron Man's A.I. butler? "),
        options: ["H.O.M.E.R.", "J.A.R.V.I.S","A.L.F.R.E.D.","M.A.R.V.I.N."],
        answer: 2      
    },

    {
        marvalType: "normal",
        questionNo: 5,
        question: chalk.green("What is the real name of the Black Panther? "),
        options: ["T'Challa", "M'Baku","N'Jadaka","N'Jabu"],
        answer: 1      
    },

    {
        marvalType: "normal",
        questionNo: 6,
        question: chalk.green("What fake name does Natasha use when she first meets Tony? "),
        options: ["Natalie Rushman", "Natalie Romanoff","Nicole Rohan","Naya Rabe"],
        answer: 1      
    },

    {
        marvalType: "normal",
        questionNo: 7,
        question: chalk.green("What does Thor want another of when he's in the diner? "),
        options: ["A slice of pie", "A pint of beer","A stack of pancakes","A cup of coffee"],
        answer: 4      
    },

    {
        marvalType: "normal",
        questionNo: 8,
        question: chalk.green(" Who is killed by Loki in the Avengers? "),
        options: ["Marie Hill", "Nick Fury","Agent Coulson","Doctor Erik Selvig"],
        answer: 3     
    },


    {
        marvalType: "End Game",
        questionNo: 1,
        question: chalk.green("Before Thanos, which other character tries to get his hands on all the Infinity Stones? "),
        options: ["Taneleer tivan/The Collector", "Loki", "Hela", "Nakia"],
        answer: 1
    },
    {
        marvalType: "End Game",
        questionNo: 2,
        question: chalk.green("In which MCU film does Thanos make his first apperance? "),
        options: ["Guardians of the Galaxy ", "The Avengers", "Thor", "Iron Man"],
        answer: 2
    },
    {
        marvalType: "End Game",
        questionNo: 3,
        question: chalk.green("Right before Thanos reaches Wakanda in Infinity War, which stone does he collect? "),
        options: ["Space Stone", "Mind Stone", "Time Stone", "Soul Stone"],
        answer: 3
    },

    {
        marvalType: "End Game",
        questionNo: 4,
        question: chalk.green("What Guardians of the Galaxy characters were left after the snap? "),
        options: ["Drax and Mantis", "Nebula and Rocket", "Peter and Gamora", "Rocket and Groot"],
        answer: 2
    },

    {
        marvalType: "End Game",
        questionNo: 5,
        question: chalk.green("What is Thor's new weapon called? "),
        options: ["Stormbreaker", "Destroyer", "The Reckoning", "Red Skull"],
        answer: 1
    },

    {
        marvalType: "End Game",
        questionNo: 6,
        question: chalk.green("Which Avenger form does Loki briefly take in Thor, The Dark World? "),
        options: ["Hulk", "Captain America", "Iron Man", "Spider Man"],
        answer: 3
    } 
];

for (var  i = 0; i < marvelQuestions.length; i++){
    if(marvelQuestions[i].marvalType === "normal" && marvelQuestions[i].questionNo === 1){
        console.log(chalk.white.bold.cyan("We will be starting with Normal type..."));
        console.log(chalk.white.bold.cyan("Here you go..\n"));
    }

    if(marvelQuestions[i].marvalType === "End Game" && marvelQuestions[i].questionNo === 1){
        console.log(chalk.white.bold.cyan("We will be starting with End game ..."));
        console.log(chalk.white.bold.cyan("Here you go..\n"));
    }
    play(
        marvelQuestions[i].marvalType,
        marvelQuestions[i].questionNo,
        marvelQuestions[i].question,
        marvelQuestions[i].options,
        marvelQuestions[i].answer
    )

    if(marvelQuestions[i].marvalType === "normal" && marvelQuestions[i].questionNo === 8){
        console.log(chalk.white.bold.cyan("We are now done with type 1."))
        console.log(chalk.bgWhite.bold.magenta("Your score after normal type: ", score, "\n"));
        if(score <= 10 ){
            console.log("Score is not up to the mark..")
        }else{
        console.log("Congratulations! You scored good score..")
    }
}

    if(marvelQuestions[i].marvalType === "End Game" && marvelQuestions[i].questionNo === 6){
        console.log("Come to the End Of Quiz \n");
        console.log(chalk.bgWhite.bold.black("Final score of Avengers Quiz: ", score, "\n"));
    }
}

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

function displayScore(){
    console.log("Your current Score: ", score);
}

function play(marvalType, questionNo, question, options, answer){
    console.log("Question No.: ", questionNo);
    var userAnswer = readlineSync.keyInSelect(options, question, {
        cancel: "I dont't know ¯|_(ツ)_/¯",
    })

    if(userAnswer + 1 === answer){
        console.log(chalk.bgWhite.bold.black("Awesome right answer, Seems like you really know about Avengers."));
        if(marvalType === "normal"){
            score += 2
        }
        if(marvalType === "End Game"){
            score += 5;
        }
        displayScore()
        console.log("\n");
    }
    else{
        console.log(chalk.bold.red("Ooops!! Correct answer is ", options[answer - 1]))
        console.log(chalk.bold.red("And you call yourself fan of Avengers..."))

        if(marvalType === "normal"){
            score -= 1
        }
        if(marvalType === "End Game"){
            score -= 3
        }
        displayScore()
        console.log("\n");
    }
}


console.log("Chcek out the high scores: ");
for(var i = 0; i < highScore.length; i++){
    console.log(highScore[i].name + ": ", + highScore[i].marks)
}
console.log("****************************************");

if(score > 30){
    console.log(chalk.bgGreenBright.bold.black("CONGRATS!! You score high score"));
    console.log("****************************************");

    console.log(chalk.bgGreenBright.bold.black("If you have scored better than the current high scorers then send me a screenshot of your score, so that I can add you to the high scorers list.\n"));
    console.log("Thank you for playing!");
}