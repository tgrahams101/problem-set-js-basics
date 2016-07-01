/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE


function isPrime(number) {
  var primeness=0;
  for (i=2; i<number; i++){
    factortest = number % i;
    if (factortest==0){
      primeness=1;
    }

  }
  if (primeness==1){
        console.log("This number is not prime!")
  }
  else {
        console.log("Congrats ma'am THIS NUMBER IS PRIME!")
  }

}

Problem 2

 var array =[];

function isPrime(number) {
  var primeness=0;
  for (i=2; i<number; i++){
    factortest = number % i;
    if (factortest==0){
      primeness=1;
    }

  }
  if (primeness==1){
        return false;
  }
  else {
        return true;
  }

}


 function primes(max) {

      for (i=1; i<=max; i++){
        if (isPrime(i)){
          array.push(i);
        }
      }

 };
