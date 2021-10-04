
console.log("Script is running!");

let choice = prompt("Pick a (whole) number up to 3...");

//The while statement works similar to an if - if condition is true, run code block. 
//After the block, it repeats: checks the condition again, and if true, repeats the code...  

while (choice != null) { // repeat as long as not Cancel / Escape
    console.log("choice = " + choice);

    // The == and != operators do "loose" equality/inequality, not "strict"
    // Loose means auto conversion between certain types, and also have some unique cases 
    if (choice == 1) {//choice can be 1, "1", or even " 1", "1 ", etc...

        let color = prompt("What... is your favorite color?");
        //Convert to lowercase and trim surrounding whitespace before comparisons.
        color = color.toLowerCase();
        color = color.trim();
        //If only one line of code follow an if/else, no need for brackets
        if (color == "blue")
            alert("Very well.");
        else if (color == "yellow")
            alert("Despicable.");
        else
            alert("Acceptable.");

    } else if (choice == 2) { //choice can be 2, "2", etc...

        //Convert to lowercase and trim surrounding whitespace before comparisons.
        let capital = prompt("What... is the capital of Assyria?").toLowerCase().trim(); //chained methods
        if (capital == "ashur" || capital == "assur") // || is the logical OR operator.
            alert("Correct!");
        else
            alert("Wrong!");

    } else if (choice == 3) {  //choice can be 3, "3", etc...

        let velocity = prompt("What...is the air-speed velocity of an unladen swallow? (mph)");
        // >, <, >=, and <= are also "loose" comparisons; 
        // They auto convert stromgs to numbers, if other operand is a number
        // If the string isn't convertable to number, all ops return false.
        let response = "Just kidding. I didn't really expect you to answer that.";
        if (velocity >= 20 && velocity <= 25) {
            response += " How do know so much about swallows?";
        }
        alert(response);

    } 

    //Get a NEW choice value before the while loop repeats
    choice = prompt("Pick another (whole) number up to 3...");
}

//After the while terminates (condition is false), code continues
console.log("End of script");
