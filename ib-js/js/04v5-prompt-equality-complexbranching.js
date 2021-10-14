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

//The prompt function takes an OPTIONAL second argument, a default input value.
let defaultQuest = "To seek the Holy Grail.";
let quest = prompt("What... is your quest?", defaultQuest);
console.log("quest: " + quest);

//Nested if/else can handle more complex branching.

//The != operator checks (loose) inequality
if (quest != null) {
    let message = "I see, I see.";
    if (quest == defaultQuest) {
        console.log("The default input was used.");
        message = message + "\nA noble quest indeed!"; //add to the message
    } else if (quest == "") {
        message += "\nYou have little ambition." // x += y is a shortcut for x = x + y
    }
    alert(message);
} else {
    console.log("You hit Cancel or pressed Escape!");
    if (userName != null) {
        alert("Fine, your business is your own.");                
    } else {
        alert("You are a very secretive one...")
    }
}

console.log("End of script");