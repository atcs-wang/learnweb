console.log("Script is running!");

//The prompt function (usually) returns a String
let userName = prompt("What... is your name?");
console.log("userName: " + userName);
//If the user hits Cancel or presses Escape, 
// it returns a special value called null, which is an Object type
console.log("userName type:", typeof userName);

//The == operator checks (loose) equality, and returns a boolean
//Use chained if-else to cascade through multiple options
if (userName == null){
    console.log("You hit Cancel or pressed Escape!");
    alert("You prefer anonymity, I see.")
} else if (userName == ""){
    alert("You don't have a name? Odd.");
} else {
    alert(`Greetings, so-called "${userName}".`);
}

console.log("End of script");