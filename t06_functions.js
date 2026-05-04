/****************************
Name of task: Task 3
****************************/

//Variables

let username = "Liyan";
let age = 15;
let pocketMoney = 500;
let year = 2026;

/*************************
Main Code
 *************************/
console.log("67")
console.log("Hi " +username)
console.log("As of " + year + " you are " + age +" years old")
console.log("In 10 years you will be " ,+ age+10 +" years old")
console.log("You have " +pocketMoney + " dollars")
console.log("You spend half of your money, now you have" ,+ pocketMoney/2)
console.log("Then you get $3, now you have" ,+ pocketMoney+3)

const OUTPUT = document.getElementById("JavaScriptOutput");
OUTPUT.innerHTML = "<h2>This is now saying Hi Liyan</h2>";
OUTPUT.innerHTML += "<p>67</h2>";
OUTPUT.innerHTML += "<p>Hi " + username + "</p>";
OUTPUT.innerHTML += "<p>As of " + year + " you will be " + age + " years old</p>";
OUTPUT.innerHTML += "<p>In 10 years you will be " + (age + 10) + " years old</p>";
OUTPUT.innerHTML += "<p>You will have 500 dollars</h2>";
OUTPUT.innerHTML += "<p>You spend half of your money, now you have "+ pocketMoney/2 + "</p>";
OUTPUT.innerHTML += "<p>Then you get $3, now you have " + (pocketMoney+3) + "</p>";

writeLine()


/**************************
 Functions
 **************************/
function writeLine (){
    OUTPUT.innerHTML += "<p>Less code matters</p>";
}