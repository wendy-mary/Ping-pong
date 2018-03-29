
var arr = [];
function ping(init) {
 for(var i=1; i<=init; i++){

  if ((i % 3 === 0 && i % 5 === 0)) {
    arr.push('pingpong');
  } else if (i % 5 === 0) {
    arr.push('pong');
  } else if (i % 3 === 0) {
    arr.push('ping');
  } else {
    arr.push(i);
  }
}

};

$(document).ready(function() {
  $('#sub').click(function(event) {
  event.preventDefault();
    var userNumber = $('input#num').val();
    ping(userNumber);
    // console.log(arr);
    // arr.forEach(fuction (c){
    //
    // });
arr.forEach(function(c){
  $("#list").append($("<li>").html(c));
});


  });
});
