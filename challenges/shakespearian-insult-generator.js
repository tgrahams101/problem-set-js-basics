/*
  Shakesperian Insult Generator

  You saucy, fly-bitten, minnow, you! Randomly generate some zingers using the supplied list of words!

  Bonuses:
  - Encapsulate your logic in a `generateInsult` function
  - Randomly generate 1 word, 2 word, and n word insults.
  - Generate any number of insults, depending on a user supplied integer. (e.g. generateInsults(3) )
  - Allow the user to supply a proper name as an input. ("Why Justin, you villainous toad-spotted strumpet!").
  - Create a browser interface, using some combination of `prompt`, `alert`, and/or DOM manipulation.

*/

/* At first I put the three "var firstindex=getrandom()" outside the for loops in which
they are used to specify the index number of array to be called, but then I
saw that I was getting the same words from each array throughout!!! So I realized
I had to put the var firstindex=getrandom assignments inside the forloops
so that there is a new index assignment through each run of each array group
 in every loop! */
 
/*for numbers that are not multiples of 3, the last one or two words are only from
the first word array */

var first_word = ["yeasty", "weedy", "wayward", "warped", "villainous", "venomed", "vain", "unmuzzled", "tottering", "surly", "spongy", "spleeny", "saucy", "ruttish", "roguish", "reeky", "rank", "qualling", "puny", "puking", "pribbling", "paunchy", "mewling", "mangled", "mammering", "lumpish", "loggerheaded", "jarring", "infectious", "impertinent", "gorbellied", "goatish", "gleeking", "frothy", "froward", "fobbing", "fawning", "errant", "droning", "dissembling", "dankish", "currish", "craven", "clouted", "cockered", "churlish", "bootless", "beslubbering", "bawdy", "artless"];
var second_word = ["weather-bitten", "unchin-snouted", "toad-spotted", "tickle-brained", "tardy-gaited", "swag-bellied", "spur-galled", "sheep-biting", "shard-borne", "rump-fed", "rude-growing", "rough-hewn", "reeling-ripe", "pox-marked", "pottle-deep", "plume-plucked", "onion-eyed", "motley-minded", "milk-livered", "knotty-pated", "ill-nurtured", "ill-breeding", "idle-headed", "hell-hated", "hedge-born", "hasty-witted", "half-faced", "guts-griping", "full-gorged", "fool-born", "folly-fallen", "fly-bitten", "flap-mouthed", "fen-sucked", "fat-kidneyed", "elf-skinned", "earth-vexing", "dread-bolted", "doghearted", "dizzy-eyed", "dismal-dreaming", "crook-pated", "common-kissing", "clay-brained", "clapper-clawed", "boil-brained", "beetle-headed", "beef-witted", "bat-fowling", "base-court"];
var third_word = ["wagtail", "whey-face", "vassal", "varlet", "strumpet", "skainsmate", "scut", "ratsbane", "pumpion", "puttock", "pignut", "pigeon-egg", "nut-hook", "mumble-news", "moldwarp", "miscreant", "minnow", "measle", "mammet", "malt-worm", "maggot-pie", "lout", "lewdster", "joithead", "hugger-mugger", "horn-beast", "hedge-pig", "harpy", "haggard", "gudgeon", "giglet", "fustilarian", "foot-licker", "flirt-gill", "flax-wench", "flap-dragon", "dewberry", "death-token", "codpiece", "coxcomb", "clotpole", "clack-dish", "canker-blossom", "bum-bailey", "bugbear", "boar-pig", "bladder", "barnacle", "baggage", "apple-john"];


function generateInsult(num){
  var username = window.prompt("Tell me your name");
  var listofinsults=[];
  var lastIndexInFirst= first_word.length-1;
  var lastIndexInSecond= second_word.length-1;
  var lastIndexInThird= third_word.length-1;

  function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  }



  if(num==1){
    listofinsults.push(first_word[firstindex]);
  }
  else if(num==2){
   listofinsults.push(first_word[firstindex]);
   listofinsults.push(second_word[secondindex]);
  }

  else if (num>2){
     var divided=num/3;
     var remainder=num % 3;
     var count = Math.floor(divided);
      for(i=0; i<count; i++) {
        var firstindex= getRandomInt(0,lastIndexInFirst);
        var secondindex = getRandomInt(0,lastIndexInSecond);
        var thirdindex  = getRandomInt(0,lastIndexInThird);
          listofinsults.push(first_word[firstindex]);
          listofinsults.push(second_word[secondindex]);
          listofinsults.push(third_word[thirdindex]);
      }
      if (remainder >0){
        for (i=0;i<remainder; i++) {
          var firstindex= getRandomInt(0,lastIndexInFirst);
           listofinsults.push(first_word[firstindex]);
        }
       }
  }
  console.log("Why " + username +", you " + listofinsults + ".");

}
