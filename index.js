let phrase = "This is my string and it will do several tasks";

let phraseArray = phrase.split(" "); 
phraseArray.sort(); 
phraseArray.reverse(); 
let everySecondWord = phraseArray.slice(0, phraseArray.length, 2); 
let concatenatedString = everySecondWord.join("+"); 
console.log(concatenatedString.toUpperCase());