function countBy(i,j,k){
  var increment = [];
  for(var index=i; index<=j; index+=k) {
    increment.push(index);
  }
  return increment;
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
    alert("im here!");
  });
});
