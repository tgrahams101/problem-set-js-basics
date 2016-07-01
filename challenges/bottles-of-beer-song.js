/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

// YOUR CODE HERE
var x = 5;

while (x >= 1) {
     var y = x-1;
     console.log (
       x + " bottles of beer on the wall, \n" +
       x + " bottles of beer!\n" +
       "Take one down and pass it around,\n" +
       y + " bottles of beer on the wall...\n\n "
       )
       x = x-1
     }

BONUS

var x = 5;

while (x >= 1) {
  var y = x-1;

  if (x==2) {
    console.log (
    x + " bottles of beer on the wall, \n" +
    x + " bottles of beer!\n" +
    "Take one down and pass it around,\n" +
    y + " bottle of beer on the wall...\n\n "
     )}

    else if(x==1) {
    console.log(
    x + " bottle of beer on the wall, \n" +
    x + " bottle of beer!\n" +
    "Take one down and pass it around,\n" +
    "No more bottles of beer on the wall...\n\n "
    )}

      else {
      console.log (
      x + " bottles of beer on the wall, \n" +
      x + " bottles of beer!\n" +
      "Take one down and pass it around,\n" +
      y + " bottles of beer on the wall...\n\n "
      )}
      x = x-1;
  };
