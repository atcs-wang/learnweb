
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
            
    } 

    //Get a NEW choice value before the while loop repeats
    choice = prompt("Pick another (whole) number up to 3...");
}

//After the while terminates (condition is false), code continues
console.log("End of script");
