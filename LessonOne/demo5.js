  //QUESTION 5
  
//   var readlineSync = require("readline-sync");
//     var userAge = readlineSync.question("Are you older than 25 years?");
//     console.log("You entered", userAge);
//     if(userAge === "yes"){
//         console.log("You are right!!")
//     }else{
//         console.log("You are wrong!!");
//     }


    //QUESTION 6// 
    var readlineSync = require("readline-sync");
    var score = 0;
    // var userHometown = readlineSync.question("Is your hometown is Bokaro ?");
    // console.log("You entered", userHometown);
    // if(userHometown === "yes"){
    //     console.log("You are right!!")
    //     score += 1;
    //     console.log("Your score is " , score);

    // }
    // else{
    //     console.log("You are wrong!!")
    //     score-=1;
    //     console.log("Your score is ", score);
    // };

    //Other method of question 6
    questions()
    
    function questions(){
        userHometown = readlineSync.question("Is your hometown is Bokaro ?");
        if(userHometown === "yes"){
            console.log("You are right!!")
            score += 1;
            console.log("Your score is " , score);
            continueQuestion()
        }
        else{
            console.log("You are wrong!!")
            score-=1;
            console.log("Your score is ", score);
        };
    }

    function continueQuestion(){
        var repeat = readlineSync.question("do you want to continue ?");
        if(repeat==='yes'){
            questions()
        }
    }