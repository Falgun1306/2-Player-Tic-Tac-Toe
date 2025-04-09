let track = new Array(9);
var turn = false;
var cnt = 0;
var P1,P2,ties;
P1=P2=ties=0;

$(document).ready(function(){
  $('.col').on('click',function(){
      handleClick(this.id);
      winner(track);
      cnt++;
  })
})

function result(player){
    if(player === "O"){
      P1++;
      $('.p-1-points').text(P1);
      setTimeout(resetGame(player),200);
    } else if(player === "X"){
      P2++;
      $('.p-2-points').text(P2);
      setTimeout(resetGame(player),200);
    } else if(player === "TIE" || cnt===9){
      ties++;
      $('.tie-points').text(ties);
      setTimeout(resetGame(player),200);
    }
    $('.reset').on('click',function(){
        resetGame(player);
    })
}

function winner(track){
   if(track[0]===track[1] && track[1]===track[2]){ //1st row
     result(track[0]);
   } else if(track[3]===track[4] && track[4]===track[5]){ //2nd row
     result(track[3]);
   } else if(track[6]===track[7] && track[7]===track[8]){ //3rd row
    result(track[6]);
   } else if(track[0]===track[3] && track[3]===track[6]){ //1st column
    result(track[0]);
   } else if(track[1]===track[4] && track[4]===track[7]){ //2nd column
    result(track[1]);
   } else if(track[2]===track[5] && track[5]===track[8]){ //3rd column
    result(track[2]);
   } else if(track[0]===track[4] && track[4]===track[8]){ //left side tilted
    result(track[0]);
   } else if(track[2]===track[4] && track[4]===track[6]){// right side tilted
    result(track[2]);
   } else if(cnt === 9){
      result("TIE");
   }
}

function handleClick(index){
  var check = $('#' + index).text();
      if(check === ""){
        if(!turn){
          track[index] = 'O';
          $('#' + index).text('O');
          console.log(track);
          turn = true;
          $('.turn-p').text("X");
          $('#' + index).addClass("logo-o");
        } else{
         track[index] = 'X';
         $('#' + index).text('X');
         console.log(track);
         turn = false;
         $('.turn-p').text("O");
         $('#' + index).addClass("logo-x");
        } 
      } else{
        alert("NO CHEATING");
      }
}

function resetGame(winner){
    track = [];
    $('.col').removeClass("logo-x");
    $('.col').removeClass("logo-o");
    if(winner === 'O'){
      turn = false;
      $('.turn-p').text("O");
    } else{
        turn = true;
        $('.turn-p').text("X"); 
    }
    cnt = 0;
    $('.col').text('');
}


