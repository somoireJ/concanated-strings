let phrase = "This is my string and it will do several tasks";

let phraseArray = phrase.split(" "); 
phraseArray.sort(); 
phraseArray.reverse(); 
let everySecondWord = phraseArray.slice(0, phraseArray.length, 2); 
let concatenatedString = everySecondWord.join("+"); 
console.log(concatenatedString.toUpperCase());

/*line 6 is taking the array "phraseArray" and using the slice() method to create a new array which contains every second word of the original array. The parameters of the slice() method are 0 (the start index of the array), phraseArray.length (the end index of the array), and 2 (the step size, which will skip every other element). The resulting array will contain every second word of the original phraseArray.
The slice() method is used to select a part of an array. It returns a new array which contains the elements from the start index (inclusive) to the end index (exclusive). The method also takes an optional step parameter which can be used to specify how many elements to skip between each element in the resulting array. It can be used to create a new array which contains a subset of the elements of the original array.*/