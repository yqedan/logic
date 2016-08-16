var sentence = "";
var arrOfVowels = ["a","e","i","o","u"];
var arrOfPrimes = [2, 3, 5, 7];
function countBy(i,j,k){
  var increment = [];
  for(var index=i; index<=j; index+=k) {
    increment.push(index);
  }
  return increment;
}
function factorialFun(fac){
  var num = 1;
  for (var i = 1; i <= fac; i++) {
    num *= i;
  }
  return num;
}

function factorialFunRecursion(fac){
  if(fac > 1)
    return fac * factorialFunRecursion(fac - 1);
  else if(fac == 0)
    return 1;
  else
    return fac;
}

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
  $("form.factorialForm").submit(function(event){
    var factorial = parseInt($("#factorial").val());
    //var number = factorialFun(factorial);
    var number = factorialFunRecursion(factorial);
    alert(number);
    event.preventDefault();
  });
  $("form#palindromeForm").submit(function(event){
    var palindrome = $("#palindrome").val();
    var arrOfPal = palindrome.split("");
    var reversePal = arrOfPal.slice().reverse().join("");
    if(palindrome === reversePal) {
      alert("This is a palindrome!");
    } else {
      alert("This isn't a palindrome!");
    }
    event.preventDefault();
  });
  $("form#primeForm").submit(function(event){
      var prime = parseInt($("#prime").val());
      var primeArr = [];
      var primeArrNum = [];
      for (var i = 0; i <= prime; i++) {
          primeArr.push(i);
      }
      primeArr[0] = 0;
      primeArr[1] = 0;
      //debugger;
      for (var i = 2; i <= prime; i++) {
          for (var j = 2; i*j <= prime; j++) {
            primeArr[i*j] = 0;
          }
      }
      primeArr.forEach(function(element) {
        if(element !== 0) {
          primeArrNum.push(element);
        }
      });
      alert(primeArrNum);
      event.preventDefault();
  });
});
