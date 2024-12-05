// Code for the Rules of the Game Button
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".rulesofgamebtn");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");
  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings");
  //add the text node to the newly created div
  newDiv.appendChild(newContent);
  // add the newly created element and its content into the Dom
  // const currentDiv = document.getElementById("score-history-team1");
  // document.insertBefore(newDiv, currentDiv);
}

// window.localStorage.setItem('firstTeamName', 'secondTeamName');

team1 = {
  nameInput: document.getElementById("team1input"),
  saveBtn: document.getElementById("team1savebtn"),
  scoreDiv: document.getElementById("score1"),
  scoreInput: document.getElementById("score-input1"),
  nameDiv: document.getElementById("team1name"),
  scoreButton: document.getElementById("add-score-btn1"),
  currentScore: 0,
  historyDiv: document.getElementById("score-history-team1"),
  scoreHistory: [],
};

team2 = {
  nameInput: document.getElementById("team2input"),
  saveBtn: document.getElementById("teamsavebtn"),
  scoreDiv: document.getElementById("score2"),
  scoreInput: document.getElementById("score-input2"),
  nameDiv: document.getElementById("team2name"),
  scoreButton: document.getElementById("add-score-btn2"),
  currentScore: 0,
  historyDiv: document.getElementById("score-history-team2"),
  scoreHistory: [],
};

//          Code for setting the Team Name

team1savebtn.addEventListener("click", () => {
  addName(team1)
  clearTeamName(team1)
});

team2savebtn.addEventListener("click", () => {
  addName(team2)
  clearTeamName(team2)
});

function addName(team) {
  team.nameDiv.innerHTML = team.nameInput.value
}

function clearTeamName(team) {
  team.nameInput.value = ""
  // you could use (team.nameInput.disabled = true) inside the clearTeamName func only if
  // you create an edit button for the team names or game is reset. Do in future
}


// Saving team names and score when enter is pressed
team1.nameInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    team1savebtn.click()
  }
});

team2.nameInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    team2savebtn.click()
  }
});

team1.scoreInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault()
    validateScore()
    team1.scoreButton.click()
  }
});

team2.scoreInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault()
    validateScore()
    team2.scoreButton.click()
  }
});

// function validateNameInput(team) {
//   var x = team.nameInput;
//   if (x === "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }

function hasWon(score) {
  return score >= 150
  // if(score >= 150) {
  //     return true
  // }
  // return false
}

//          Code for Adding the Score
team1.scoreDiv.innerHTML = team1.currentScore
team2.scoreDiv.innerHTML = team2.currentScore

team1.scoreButton.addEventListener("click", () => {
  emptyScore(team1)
  handleGame(team1)
  clearScoreInput(team1)
});

team2.scoreButton.addEventListener("click", () => {
  emptyScore(team2)
  handleGame(team2)
  clearScoreInput(team2)
});

// handles the score, innerHTML of total score and if wins congrats message
function handleGame(team) {
  team.currentScore += validateScore(team.scoreInput.value)
  team.scoreDiv.innerHTML = team.currentScore
  storeScore(team);
  winnerFunc(team)
  let win = hasWon(team.currentScore)
  if (win) {
    winnerAlert(team.nameDiv.innerHTML)
  }
}

// Score History

function showHistory(team) {
  for (let i = 0; i < team.scoreHistory.length; i++) {
    team.historyDiv.innerHTML = team.scoreHistory
    console.log(team1.scoreHistory[i])
  }
}

function storeScore(team) {
  team.scoreHistory.push(validateScore(team.scoreInput.value))
}

function validateScore(score) {
  if (!score) {
    return 0;
  }
  let scoreInt = parseInt(score)
  if (0 < scoreInt < 150) {
    return scoreInt;
  }
}

function clearScoreInput(team) {
  team.scoreInput.value = ""
}

function winnerAlert(teamname) {
  alert(`Congratulations ${teamname}, You are the Winner.`)
}

function editButton(teamscore) {}

const resetButton = document.getElementById("reset-game-btn")

resetButton.addEventListener("click", () => {
  resetGame(team1)
  resetGame(team2)
});

function resetGame(team) {
  main = document.getElementById('score-history-container')
  team.nameDiv.innerHTML = ""
  team.scoreDiv.innerHTML = 0
  team.currentScore = 0
  main.innerHTML = ''
  team.scoreHistory = []
}


function winnerFunc(winningTeam){
  main = document.getElementById('score-history-container')
  newTableRow = main.insertRow(-1)
  let validScore = validateScore(winningTeam.scoreInput.value)
  if(winningTeam == team1) 
    {
      cellData =  `<tr>
      <td class='roundScoreFont'>${validScore}</td>
      <td class='roundScoreFont'>0</td>
      <td class="edit-score-btn">Edit</td>
      </tr>`
    }
  if(winningTeam == team2) 
    {
      cellData =  `<tr>
      <td class='roundScoreFont'>0</td>
      <td class='roundScoreFont'>${validScore}</td>
      <td class="edit-score-btn">Edit</td>
      </tr>`
    }
  newTableRow.innerHTML = cellData
}




function emptyScore(team) {
  // this function is to show an alert when the player 
  //presses the add score button and there is nothing in the input field
  if(team.scoreInput.value === '') {
   return alert('Please provide Score')
  }
}

