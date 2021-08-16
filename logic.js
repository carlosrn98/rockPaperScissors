const buttons = document.querySelectorAll("button");
let selection;
let input = "";

buttons.forEach( (button) =>{
  button.addEventListener('click', () =>{
    input = button.id;
    selection = cpu();
    document.getElementById(input).style.background = 'red';
    document.getElementById('cpu').textContent = selection;

    setTimeout(function(){
      if(rules(input, selection) === 0){
        console.log("That's a tie!");
      }
      else if(rules(input, selection) === 2){
        console.log("you win!");
        let score_player = parseInt( document.getElementById('score-player').textContent ) + 1;
        document.getElementById('score-player').textContent = score_player.toString();
        console.log(score_player);

      }
      else{
        console.log("you lose!");
        let score_cpu = parseInt( document.getElementById('score-cpu').textContent ) + 1 ;
        console.log(score_cpu);
        document.getElementById('score-cpu').textContent = score_cpu.toString();

      }
      document.getElementById(input).style.background = 'white';
    }, 1000);

  });
});


/*********FUNCTIONS*/
function inputFn(){
  let inp;
  do{
    inp = prompt("Rock, paper or scissors").toString().toLowerCase();
  }while( (inp !== 'rock') && (inp !=='scissors') && (inp !== 'paper') )
  return inp;
}

function cpu(){
  let n = Math.floor(Math.random() * 30);
  if(n<10){
    return "rock";
  }
  else if(n>=10 && n<20){
    return "paper";
  }
  else{
    return "scissors";
  }
}

function rules(p1, p2){
  if(p1 === p2){
    return 0;
  }
  if( (p1 === 'paper' && p2 === 'rock')
  || (p1 === 'rock' && p2 === 'scissors')
  || (p1 === 'scissors' && p2 === 'paper')
) {
    return 2;
  }
  return 1;
}
