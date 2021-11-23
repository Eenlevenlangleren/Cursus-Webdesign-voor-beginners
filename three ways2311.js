// Calling the function is the same at all three ways of writing code.


//Function declarations
function calculation (number1, number2) {
sum = number1*number1 + number2*number2;
sum*sum = resultingValue;
return: resultingValue;
}
   
   const number1 = 10;
   const number2 = 20;
     
   calculation(); 


// Function expressions
const calculation = function (number1, number2) {
 sum = number1*number1 + number2*number2;
 sum*sum = resultingValue;
return: resultingValue;
};

const number1 = 10;
const number2 = 20;
  
  
calculation(); 

// Arrow functions also function expressions
const calculation =  (number1, number2) => {
    sum = number1*number1 + number2*number2;
    sum*sum = resultingValue;
   return: resultingValue;
   };
   
   const number1 = 10;
   const number2 = 20;
     
     
   calculation(); 

   /* you can skip the curly braces and return keyword.
   1 statement in the body of the function
   we want the evaluated value of that statement to be the value the function returns.*/