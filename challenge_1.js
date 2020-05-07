/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */


//Math.floor(Math.random() * (6 - 1 + 1)) + 1;

function problem (lower,upper){ 
  const result = Math.floor(Math.random() * (upper - lower + 1)) + 1;
  return result; 
} 


// Call the function and pass it different values

console.log(problem(1,2)); 
