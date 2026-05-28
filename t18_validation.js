/****************************
Name of task: Task 17
****************************/

//Variables
const OUTPUT = document.getElementById("outputField");


/*************************
Main Code
 *************************/
 function getList(){
const SHOPPING_FORM = document.getElementById("shoppingForm");
if (typeof(SHOPPING_FORM.value) >= -999999999999){
    OUTPUT.innerHTML = "no numbers<br>";
}
 if (SHOPPING_FORM.checkValidity(String) === false)  {
    OUTPUT.innerHTML = "no numbers<br>";
 } else {
       const LIST_FIELD = document.getElementById("listField");
    let list = LIST_FIELD.value;
let shoppingArray = ["laptop",
     "adams pc", 
     "leos running shoes", 
     "abhik"];
shoppingArray.push(list)
OUTPUT.innerHTML = "<p>Your cart: "+shoppingArray+"</p>"
 }
}
/**************************
 Functions
 **************************/

 