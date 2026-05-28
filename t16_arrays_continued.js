/****************************
Name of task: Task 16
****************************/

//Variables
const OUTPUT = document.getElementById("outputField");


/*************************
Main Code
 *************************/
 function getList(){
    const LIST_FIELD = document.getElementById("listField");
    let list = LIST_FIELD.value;
let shoppingArray = ["laptop",
     "adams pc", 
     "leos running shoes", 
     "abhik"];
shoppingArray.push(list)
OUTPUT.innerHTML = "<p>Your cart: "+shoppingArray+"</p>"
 }

/**************************
 Functions
 **************************/

 