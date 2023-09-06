        // var readline = require('readline');
        // const rl = readline.createInterface({
        //     input: process.stdin,
        //     output: process.stdout
        // });
        // rl.question('Please enter your name: ', (name) => {
        //     console.log("You entered: " +name);
        //     rl.close()
        // });

var readlineSync = require("readline-sync");
var userName = readlineSync.question("May i know your name: ");
//console.log("Hi " + userName + "!!");
console.log(`Hi  ${userName} !!`);
var message = "Welcome to the Neog Camp!" + userName;
console.log(message)



  
