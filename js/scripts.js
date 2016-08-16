var sentence = "";
function countBy(i,j,k){
  var increment = [];
  for(var index=i; index<=j; index+=k) {
    increment.push(index);
  }
  return increment;
}
var arrOfVowels = ["a","e","i","o","u"];

$(document).ready(function() {
  $("form#counting").submit(function(event){
    var increment = [];
    var start = parseInt($("#start").val());
    var limit = parseInt($("#limit").val());
    var count = parseInt($("#count").val());
    if(!(start&&limit&&count)){
      alert("Please enter in all fields");
    }
    else if(count > limit) {
      alert("Please make counting number smaller than limiting number!");
    }
    else if (limit < 0 || count < 1) {
      alert("Only enter positive numbers for limit! Count cannot be 0 or negative!");
    }
    else{
      increment = countBy(start, limit, count);
      alert(increment);
    }
    event.preventDefault();
  });
  $("form#wordPuzzle").submit(function(event){
    $("#wordPuzzle").slideUp();
    $(".wordPuzzleAnswer").fadeIn();
    sentence = $("#sentence").val().toLowerCase();
    var sentenceEncoded = "";
    var arrOfChar = sentence.split("");
    for (var i = 0; i < arrOfChar.length; i++) {
      for (var j = 0; j < arrOfVowels.length; j++) {
        if(arrOfChar[i] === arrOfVowels[j]) {
          arrOfChar[i] = "-";
        }
      }
    }
    sentenceEncoded = arrOfChar.join("");
    $("#newSentence").text(sentenceEncoded);
    event.preventDefault();
  });
  $("form.wordPuzzleAnswer").submit(function(event){
    var answer = $("#answer").val().toLowerCase();
    if(answer === sentence) {
      alert("You guessed right!");
    }
    else {
      alert("Guess again!");
    }
    event.preventDefault();
  });
});
