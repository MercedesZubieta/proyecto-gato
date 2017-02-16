// Validate form
function required(){
  var nameOne = document.forms["form"]["input-one"].value;
  var nameTwo = document.forms["form"]["input-two"].value;
  var btnStart = document.getElementById("start-game");
  if (nameOne.length != 0 && nameTwo.length != 0){
    btnStart.href = "game.html";
  }else {
    alert("Por favor, llena el campo de nombre.");
  }
}

// DATOS
$(document).ready(function(){
  $('#start-game').click(function(){
    var playerO = document.getElementById("player-one").value;
    var playerT = document.getElementById("player-two").value;
    localStorage.setItem("jugador-A", playerO);
    localStorage.setItem("jugador-B", playerT);
  });
  document.getElementById("player-a").innerHTML = localStorage.getItem("jugador-A");
  document.getElementById("player-b").innerHTML = localStorage.getItem("jugador-B");
});

// Game
var square = document.getElementsByClassName("square");
var x = "<span class='x'>X</span>";
var o = "<span class='o'>O</span>";
var f = false;
var contador = 0;
var contador1 = 0;
var contador2=0;
for(i = 0; i < square.length; i++){
  square[i].onclick = function(e){
    if(e.target.innerHTML === '' && !f){
      if(contador%2==0){
          e.target.innerHTML = x;
          contador++;
          contador1++;
          $('#jugadorA').text(contador1);
      }else{
          e.target.innerHTML = o;
          contador++;
          contador2++
          $('#jugadorB').text(contador2);
      }
      var jugador1 = localStorage.getItem("jugador-A");
      var jugador2 = localStorage.getItem("jugador-B");
      if($("#one").children().hasClass("o") && $("#two").children().hasClass("o") && $("#three").children().hasClass("o") || $("#four").children().hasClass("o") && $("#five").children().hasClass("o") && $("#six").children().hasClass("o") || $("#seven").children().hasClass("o") && $("#eight").children().hasClass("o") && $("#nine").children().hasClass("o") || $("#one").children().hasClass("o") && $("#four").children().hasClass("o") && $("#seven").children().hasClass("o") || $("#two").children().hasClass("o") && $("#five").children().hasClass("o") && $("#eight").children().hasClass("o") || $("#three").children().hasClass("o") && $("#six").children().hasClass("o") && $("#nine").children().hasClass("o") || $("#one").children().hasClass("o") && $("#five").children().hasClass("o") && $("#nine").children().hasClass("o") || $("#three").children().hasClass("o") && $("#five").children().hasClass("o") && $("#seven").children().hasClass("o")){
        $('#box-resultado').removeClass("hidden");
        localStorage.setItem("ganador",jugador2);
        document.getElementById("name-win").innerHTML = localStorage.getItem("ganador");
      }else if($("#one").children().hasClass("x") && $("#two").children().hasClass("x") && $("#three").children().hasClass("x") || $("#four").children().hasClass("x") && $("#five").children().hasClass("x") && $("#six").children().hasClass("x") || $("#seven").children().hasClass("x") && $("#eight").children().hasClass("x") && $("#nine").children().hasClass("x") || $("#one").children().hasClass("x") && $("#four").children().hasClass("x") && $("#seven").children().hasClass("x") || $("#two").children().hasClass("x") && $("#five").children().hasClass("x") && $("#eight").children().hasClass("x") || $("#three").children().hasClass("x") && $("#six").children().hasClass("x") && $("#nine").children().hasClass("x") || $("#one").children().hasClass("x") && $("#five").children().hasClass("x") && $("#nine").children().hasClass("x") || $("#three").children().hasClass("x") && $("#five").children().hasClass("x") && $("#seven").children().hasClass("x")){
        $('#box-resultado').removeClass("hidden");
        localStorage.setItem("ganador",jugador1);
        document.getElementById("name-win").innerHTML = localStorage.getItem("ganador");
      }
    }
  }
}

// HISTORIAL
$("historial.html").ready(function(){
  document.getElementById("name-a").innerHTML = localStorage.getItem("jugador-A");
  document.getElementById("name-b").innerHTML = localStorage.getItem("jugador-B");
  document.getElementById("name-win").innerHTML = localStorage.getItem("ganador");

})
