/* "To iterate" means "to do something repeatedly". Usually, you're going to do things repeatedly if you have a collection of (similar) things, 
as in the case of an array*/

//Old style loops
/* Je hebt drie items nodig. De variabele, de voorwaarde en de incrementor. 
Incrementor zorgt ervoor dat de herhaling niet tot in het oneindige doorgaat. 
Het breekt de loop. De opdracht! */

const colorList = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < colorList.length) {
  console.log(colorList[i]);
  i++;
}

document.write (I am at the end of my list);

for (let i = 0; i < colorList.length; i++) {
  console.log(colorList[i]);
}

document.write (I am at the end of my list);

/*
Difference for loop/while loop versus an array method.
A loop (example a for loop) simply executes code some number of times until a condition is met. 
An array simply holds a number of values. Oftentimes when writing programs you'll want to do something 
with a bunch of data contained in an array.*/

// Array.prototype.forEach() executes a provided function once for each array element.

/*The forEach() method provides several advantages over the traditional for loop e.g. you can execute it in parallel by just using a parallel Stream instead of a regular stream. 
Since you are operating on stream, it also allows you to filter and map elements.*/

// The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), 
including inherited enumerable properties.

// The number of lines depends om the length of the array - 1. 0 is the first place in the index.


