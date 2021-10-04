console.log("Script is running!");

let wantJoke = confirm("Wanna hear a joke?"); // confirm returns a Boolean type
console.log("Value of wantJoke: " + wantJoke);

//If / else statements: controls flow of program, given boolean
if (wantJoke) { // if wantJoke is true, following "block" (code within curly brackets) runs 
    console.log("You hit OK!")
    alert("How do you comfort a JavaScript bug?");
    alert("You console it!");
} else { // otherwise, run this block (wantJoke is false)
    console.log("You hit Cancel or pressed Escape!");
    alert("Oh. Never mind then.");
}
//After if/else, code continues
console.log("End of script");