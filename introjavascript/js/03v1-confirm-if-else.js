console.log("Script is running!");

let wantJoke = confirm("Wanna hear a joke?"); // confirm returns a Boolean type
console.log("Value of wantJoke: " + wantJoke);

//If statement: controls flow of program, given boolean
if (wantJoke) { // if wantJoke is true, following "block" (code within curly brackets) runs 
    console.log("You hit OK!")
    alert("How do you comfort a JavaScript bug?");
    alert("You console it!");
} 

//After if, code continues
console.log("End of script");