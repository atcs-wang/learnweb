/* Create new HTML elements and add them to the DOM */

console.log("Script is running!");

let wantJoke = confirm("Wanna hear a joke?"); // confirm returns a Boolean type
console.log("Value of wantJoke: " + wantJoke);

// Get a reference to an element in the DOM
let div = document.querySelector("#interactive-area");

//If / else statements: controls flow of program, given boolean
if (wantJoke) { // if wantJoke is true, following "block" (code within curly brackets) runs 
    console.log("You hit OK!")

    // Create new elements, and add them as children of the parent
    let firstParagraph = document.createElement("p");
    firstParagraph.textContent = "How do you comfort a JavaScript bug?";
    div.appendChild(firstParagraph);

    let secondParagraph = document.createElement("p");
    secondParagraph.textContent = "You console it!";
    div.appendChild(secondParagraph); //adds to end of parent

    let horizontalLine = document.createElement("hr");
    //To insert in between children:
    div.insertBefore(horizontalLine, secondParagraph);

} else { // otherwise, run this block (wantJoke is false)
    console.log("You hit Cancel or pressed Escape!");

    // Directly edit the HTML inside of an element, which is
    // parsed and used to update the DOM
    div.innerHTML = "<p>Oh. <em>Never mind then.</em></p>";
}
//After if/else, code continues
console.log("End of script");