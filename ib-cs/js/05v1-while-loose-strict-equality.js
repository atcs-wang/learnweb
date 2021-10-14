
console.log("Script is running!");

let choice = prompt("Pick a (whole) number up to 3...");

//The while statement works similar to an if - if condition is true, run code block. 
//After the block, it repeats: checks the condition again, and if true, repeats the code...  

while (choice != null) { // repeat as long as not Cancel / Escape
    console.log("choice = " + choice);
    alert("You chose " + choice);
    //Get a NEW choice value before the while loop repeats
    choice = prompt("Pick another (whole) number up to 3...");
}

//After the while terminates (condition is false), code continues
console.log("End of script");
