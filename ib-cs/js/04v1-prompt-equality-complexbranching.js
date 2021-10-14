console.log("Script is running!");

//The prompt function (usually) returns a String
let userName = prompt("What... is your name?");
console.log("userName: " + userName);
//If the user hits Cancel or presses Escape, 
// it returns a special value called null, which is an Object type
console.log("userName type:", typeof userName);

//The == operator checks (loose) equality, and returns a boolean
if (userName == null){
    console.log("You hit Cancel or pressed Escape!");
    alert("You prefer anonymity, I see.")
} else {
    alert(`Greetings, so-called "${userName}".`);
}

console.log("End of script");