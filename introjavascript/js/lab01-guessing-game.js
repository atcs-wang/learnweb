/*
The Math object is a built-in object in JS
Math.random() returns a random Number in the range [0, 1) 
Math.floor() rounds down a Number to an integer
*/

// This code produces a random number in the range [1,10]:
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`randomNumber: ${randomNumber}`);

/* 
TODO: Write a guessing game program which repeatedly prompts the user
to guess the randomNumber. 

The game ends once the user guesses correctly. Let the user 
know that they guessed correctly, and how many guesses it took them!

Whenever the user doesn't guess correctly, let them know if the 
guess was too high or low. Then, prompt them to guess again,
with the default value being what they just guessed.

If the user hits Cancel/Escape, gave an empty input, or the guess
is not a number, let them know they failed to enter a valid guess. 
Don't count it towards the guess count.
*/
