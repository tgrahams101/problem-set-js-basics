/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE
/* I googled "how do I fetch last letter in a string, which brought me to this page
http://stackoverflow.com/questions/3884632/how-to-get-the-last-character-of-a-string
and from there it sparked some leads as to how I should proceed*/


NEW AND UPDATED (THE WORD INPUTED MUST HAVE NO SPACES OR PUNCTUATION. FURTHERMORE,
THE SEQUENCE OF UPPERCASE/LOWERCASE MUST MATCH FROM BOTH DIRECTIONS)

function isPalindrome(word){
     var theword= word;
     var thelastletterindex=theword.length-1;
     var divisibility=theword.length % 2;
     var midpoint=0;
     var palicheck=0;
      if (divisibility===0){
        midpoint=theword.length/2;
      }
      else{
        var adjustlength=theword.length-1;
        midpoint=adjustlength/2;
      }

 for (n=0;n<midpoint; n++){

    if (theword.charAt(0+n)===theword.charAt(thelastletterindex-n)){

     }
   else{
         palicheck=5;
     }
   }

  if (palicheck===5){
    console.log("It is not a palindrome");
    return false;
  }
  else{
    console.log("Yes! Congrats, you've caught a palindrome");
    return true;

  }

}


OLD CODE: (DOES NOT WORK..HERE ONLY FOR REFERENCE.)


function isPalindrome(word){
   var theword= word;
   var lastletterindex=theword.length-1;
   var divisibility=theword.length % 2;
   var midpoint=0;
   var palicheck=0;
    if (divisibility=0){
      midpoint=theword.length/2;
    }
    else{
      var adjustlength=theword.length-1;
      midpoint=adjustlength/2;
    }

    for (n=0;n<midpoint; n++){

  if (theword.charAt(0+n)===theword.charAt(thelastletterindex-n){

   }
 else{
       palicheck=5;
}
if (palicheck=5){
  console.log("It is not a palindrome");
  return false;
}
else{
  console.log("Yes! Congrats, you've caught a palindrome");
  return true;

}
}
