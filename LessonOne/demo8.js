// var groceryList = ["Egg", "Milk", "Rice", "Meat", "Bread", "Pulses", "Fruits", "Chana"];
// for(var i = 0; i < groceryList.length; i++){
   
// }
// console.log(groceryList[0]);
// console.log(groceryList[3]);
// console.log(groceryList[5]);

//   Question: 12
// var superMan = {
//     name: "Super Man",
//     power: "flight",
//     costumeColor: "blue",
//     strength: 10000,
//     stealth:0

// }
// var batman = {
//     name: "Bat Man",
//     power: "Martial arts",
//     costumeColor: "black",
//     strength: 100,
//     stealth:100
// }
// console.log(superMan.strength);
// console.log(superMan.costumeColor)
// console.log(batman['costumeColor'],batman['strength']);

//Question : 13

var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What is your name? ");
console.log("Welcome " , userName, " to the neog camp.");


function play(question, answer){
    var userAns = readlineSync.question(question);
    if(userAns === answer){
        console.log("Correct");
        score +=1;
    }else{
        console.log("wrong");
        score -= 1;
    }

    console.log("Current Score: ", score);
    console.log("------------")
}

var questions = [{
    question : "Where do you live? ",
    answer : "Mathura"
},
{
    question : "Want to continue this course. ",
    answer : "Yes"
}];

for(var i = 0; i<questions.length; i++){
    var currentQues = questions[i];
    play(currentQues.question, currentQues.answer);
}
console.log("Total score of the game: ", score)

