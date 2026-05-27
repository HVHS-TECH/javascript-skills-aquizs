/****************************
Name of task: Task 15
****************************/
console.log("Running t01_introduction.js")
console.log("testing the stuf")

//Variables


/*************************
Main Code
 *************************/
  function getNumber(){
    const NUMBER_FIELD = document.getElementById("numberField");
    let count = Number(NUMBER_FIELD.value);
    let lyrics = "";

for (let i=count; i>=1; i--){
  if (i===1) {
    lyrics += "1 bottle of coke on the wall, 1 bottle of coke.<br>";
    lyrics += "If one of those bottles should happen to fall, no more bottles of coke on the wall.<br><br>";
  }

else {
  lyrics += i + " bottles of coke on the wall, " + i + " bottles of coke.<br>";
  lyrics += "If one of those bottles should happen to fall, " + (i - 1);

  if (i - 1 === 1) {
    lyrics +=" bottle";
  } else {
    lyrics += "bottles";
  }

lyrics += " of coke on the wall<br>";

 }
}
OUTPUT.innerHTML = lyrics;
}

 const OUTPUT = document.getElementById("JavaScriptOutput");


/**************************
 Functions
 **************************/