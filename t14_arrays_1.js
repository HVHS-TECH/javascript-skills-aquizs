/****************************
Name of task: Task 14
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



/**************************
 Functions
 **************************/

 function getName(){
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<h1>Your name is "+userName+"</h1>";
 }

  function getAge(){
    const AGE_FIELD = document.getElementById("ageField");
    let age = AGE_FIELD.value;
    OUTPUT.innerHTML = "<h1>Your age "+age+"</h1>";
 }
 
function getMoneyInput(){
    const POCKETMONEY_FIELD = document.getElementById("moneyInput");
    let pocketMoney = Number(POCKETMONEY_FIELD.value);
    calculateChange(pocketMoney,4);
}

function calculateChange (_money, _price){
    let change = _money - _price;
 if (_money >= _price){
    OUTPUT.innerHTML = ("A chocolate bar costs $" + _price +". Your change is $" + change + "</h1>")
 } else {
    OUTPUT.innerHTML = ("A chocolate bar costs $4. You CANT afford a chocolate bar")
 }
}

function getScale(){
    const CHOOSEFIELD_FIELD = document.getElementById("getScale")
let chocolateArray = ["chocolate is buns", "chocolate is okay", "chocolate is pretty good", "chocolate is the best, yummy"]
let choice = CHOOSE_FIELD.value;
OUTPUT.innerHTML = chocolateArray;
}


 const OUTPUT = document.getElementById("JavaScriptOutput");


function start (){

OUTPUT.innerHTML = "<h2>This is now saying Hi Liyan</h2>";
OUTPUT.innerHTML += "<p>67</h2>";
OUTPUT.innerHTML += "<p>Hi " + username + "</p>";
OUTPUT.innerHTML += "<p>As of " + year + " you will be " + age + " years old</p>";
OUTPUT.innerHTML += "<p>In 10 years you will be " + (age + 10) + " years old</p>";
OUTPUT.innerHTML += "<p>You will have 500 dollars</h2>";
OUTPUT.innerHTML += "<p>You spend half of your money, now you have "+ pocketMoney/2 + "</p>";
OUTPUT.innerHTML += "<p>Then you get $3, now you have " + (pocketMoney+3) + "</p>";

OUTPUT.innerHTML += "<h2> <br>Welcome to the shop</br> </h2>";

displayProduct ("Chocolate bar","$4")
displayProduct ("Chips", "$4")
displayProduct ("Drink", "$4")
}

function displayWelcome (_name){
    OUTPUT.innerHTML += "<h2> <br>Welcome to the shop</br> </h2>";
}

function displayProduct (_name, _price){
    OUTPUT.innerHTML += "<br>"+ _name + ": " + _price + "</br>";
}