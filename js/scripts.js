var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock'); });
pickPaper.addEventListener('click', function() { playerPick('paper'); });
pickScissors.addEventListener('click', function() { playerPick('scissors'); });


//declarations of variables
var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

console.log(player.name);
console.log(player.score);


var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');
    finalEnd = document.getElementById('finalEnd');

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
        finalEnd.style.display = 'none';
      break;
    case 'ended':
        newGameElem.style.display = 'block';
        newGameBtn.innerText = 'Jeszcze raz';
//        finalEnd.style.display = 'block';
    case 'notStarted':
        finalEnd.style.display = 'none';
    default:

        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}

setGameElements();


var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints();
  }
  console.log(player.name);
  console.log(player.score);
}


//computere choose
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

//result calculation
function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

  if (playerPick == computerPick) {
      winnerIs = 'noone'; // remis
  } else if (
      (computerPick == 'rock' &&  playerPick == 'scissors') ||
      (computerPick == 'scissors' &&  playerPick == 'paper') ||
      (computerPick == 'paper' &&  playerPick == 'rock')) {

      winnerIs = 'computer';
  }

  if (winnerIs == 'player') {
      playerResultElem.innerHTML = "Win!";
      player.score++;
  } else if (winnerIs == 'computer') {
      computerResultElem.innerHTML = "Win!";
      computer.score++;
  }

setGamePoints();

//console.log(player.score);
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;

    finalResult();
}


function finalResult () {
  if (computer.score == '10') {
    gameState = 'ended';
    setGameElements();
    finalEnd.innerHTML = 'The Winner is Computer!';
    finalEnd.style.display = 'block';
  } else if (player.score == '10') {
    gameState = 'ended';
    setGameElements();
    finalEnd.innerHTML = 'The WINNER is ' + player.name +'!';
    finalEnd.style.display = 'block';
  }

  console.log(gameState);
  console.log(player.score);
}
