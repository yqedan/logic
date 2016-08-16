var sentence = "";
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
function isPalindrome(str){
  var arrOfPal = str.split("");
  var reversePal = arrOfPal.slice().reverse().join("");
  if(str === reversePal) {
     return "This is a palindrome!";
  } else {
    return "This isn't a palindrome!";
  }
}
function isCounting(start, limit, count) {
  var increment = [];
  if(!(start&&limit&&count)){
    return "Please enter in all fields";
  }
  else if(count > limit) {
    return "Please make counting number smaller than limiting number!";
  }
  else if (limit < 0 || count < 1) {
    return "Only enter positive numbers for limit! Count cannot be 0 or negative!";
  }
  else{
    for(var index=start; index<=limit; index+=count) {
      increment.push(index);
    }
    return increment;
  }
}
function encoder(sen){
  var arrOfVowels = ["a","e","i","o","u"];
  var arrOfChar = sen.split("");
  for (var i = 0; i < arrOfChar.length; i++) {
    for (var j = 0; j < arrOfVowels.length; j++) {
      if(arrOfChar[i] === arrOfVowels[j]) {
        arrOfChar[i] = "-";
      }
    }
  }
  return arrOfChar.join("");
}
function answerChecker(answer, sentence) {
  if(answer === sentence) {
    return "You guessed right!";
  }
  else {
    return "Guess again!";
  }
}
function primeFinder(prime) {
  var primeArr = [];
  var primeArrNum = [];
  for (var i = 0; i <= prime; i++) {
      primeArr.push(i);
  }
  primeArr[0] = 0;
  primeArr[1] = 0;
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
  return primeArrNum;
}
$(document).ready(function() {
  // Counting by numbers
  $("form#counting").submit(function(event){
    var start = parseInt($("#start").val());
    var limit = parseInt($("#limit").val());
    var count = parseInt($("#count").val());
    alert(isCounting(start,limit,count));
    event.preventDefault();
  });
  //Git rid of your vowels
  $("form#wordPuzzle").submit(function(event){
    $("#wordPuzzle").slideUp();
    $(".wordPuzzleAnswer").fadeIn();
    sentence = $("#sentence").val().toLowerCase();
    $("#newSentence").text(encoder(sentence));
    event.preventDefault();
  });
  $("form.wordPuzzleAnswer").submit(function(event){
    var answer = $("#answer").val().toLowerCase();
      alert(answerChecker(answer, sentence));
    event.preventDefault();
  });
  //factorial recursion
  $("#recursion").click(function(){
    var factorial = parseInt($("#factorial").val());
    var number = factorialFunRecursion(factorial);
    alert(number);
  });
  //factorial looping
  $("#looping").click(function(){
    var factorial = parseInt($("#factorial").val());
    var number = factorialFun(factorial);
    alert(number);
  });
  //Palindrome
  $("form#palindromeForm").submit(function(event){
    var palindrome = $("#palindrome").val();
    alert(isPalindrome(palindrome));
    event.preventDefault();
  });
  //Prime number generator
  $("form#primeForm").submit(function(event){
      var prime = parseInt($("#prime").val());
      alert(primeFinder(prime));
      event.preventDefault();
  });
});
