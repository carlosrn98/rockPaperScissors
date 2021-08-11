//let input = prompt("Rock, paper or scissors").toString().toLowerCase();

let input = inputFn();
let selection = cpu();

console.log(input, selection);

if(rules(input, selection) === 0){
  console.log("That's a tie!");
}
else if(rules(input, selection) === 2){
  console.log("you win!");
}
else{
  console.log("you lose!");
}


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
