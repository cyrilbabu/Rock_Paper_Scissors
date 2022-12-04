
var n = Math.floor(Math.random()*3);
var computerOptions = ["rock","paper","scissors"];


$(".button").click(function(){
  $("#instruction").remove();
  $("section").removeClass("temp");
});


function flashing(){
  setInterval(function() {
  setTimeout(function() {
  $('.computer1').addClass("flashing");
  }, 0);
  setTimeout(function() {
  $('.computer1').removeClass("flashing");
  $('.computer2').addClass("flashing");
  }, 500);
  setTimeout(function() {
  $('.computer2').removeClass("flashing");
  $('.computer3').addClass("flashing");
  }, 1000);
  setTimeout(function() {
  $('.computer3').removeClass("flashing");
  }, 1500);
  }, 2000);
};



function computerOptionsSecliction(){
  for(var i=0;i<3;i++){
    if (computerOptions[n] !== computerOptions[i]){
        $("#computer_"+computerOptions[i]).fadeOut();
    };
  };
  $("#computerText").text(computerOptions[n].toUpperCase());
};


$(".user").click(function(){
  var userSelecterImage = $(this).attr("id");
  computerOptionsSecliction();
  for(var i=0;i<3;i++){
    if (userSelecterImage !== computerOptions[i]){
        $(".user_"+computerOptions[i]).fadeOut();
    };
  };
  $("#userText").text(userSelecterImage.toUpperCase());


  if(computerOptions[n]===userSelecterImage){
    $("h1").text("DRAW 😒");
  }
  else if (computerOptions[n]==="rock" && userSelecterImage==="paper" || computerOptions[n]==="paper" && userSelecterImage==="scissors" || computerOptions[n]==="scissors" && userSelecterImage==="rock") {
    $("h1").text("YOU WON 🥰");
  }
  else{
    $("h1").text("YOU LOSS 🥺");
  }

  $("#"+userSelecterImage).removeClass("user");

  window.setTimeout( function() {
    window.location.reload();
  }, 3000);



});
