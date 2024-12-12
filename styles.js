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
  gameHiistory: [],
  replaceHistoryName: document.getElementById("score-history-team1")
};

 let team1Serialized = JSON.stringify(team1)

localStorage.setItem('team1', team1Serialized)

 let team1Deserialized = JSON.parse(localStorage.getItem("team1"))

//  console.log(team1Deserialized)

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
  gameHiistory: [],
  replaceHistoryName: document.getElementById("score-history-team2")
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
  team.replaceHistoryName.innerHTML = `${team.nameInput.value}'s Team`
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
  logicalFuncOrder(team1)
  // emptyScore(team1)
  // handleGame(team1)
  // clearScoreInput(team1)

});

function logicalFuncOrder(team) {
  var x = team.scoreInput.value
  if(x === '') {
    team.scoreInput.value = ''
    return alert('Please provide score')
  } else {
    handleGame(team1)
    clearScoreInput(team1)
  }
  //do not forget in the future to check for isNaN like .1
}

team2.scoreButton.addEventListener("click", () => {
  emptyScore(team2)
  handleGame(team2)
  clearScoreInput(team2)
});
// console.log(team2.scoreHistory)

// handles the score, innerHTML of total score and if wins congrats message
function handleGame(team) {
  team.currentScore += validateScore(team.scoreInput.value)
  team.scoreDiv.innerHTML = team.currentScore
  storeScore(team);
  roundWinnerFunc(team)
  let win = hasWon(team.currentScore)
  if (win) {
    winnerAlert(team.nameDiv.innerHTML)
  }
}

// function to disble the inputs of team and score or use a modal to either start a new game or reset the entire game
// we can do a modal that shows the congrats msg as well as the 2 options at the bottom of the modal box for newGame or reset

// Score History
function showHistory(team) {
  for (let i = 0; i < team.scoreHistory.length; i++) {
    team.historyDiv.innerHTML = team.scoreHistory
    // console.log(team1.scoreHistory[i])
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
  main = document.getElementById('score-history-subcontainer')
  team.nameDiv.innerHTML = ""
  team.scoreDiv.innerHTML = 0
  team.currentScore = 0
  main.innerHTML =  ''
  team.scoreHistory = []
}


function roundWinnerFunc(winningTeam, loser) {
  main = document.getElementById('score-history-subcontainer')
  newTableRow = main.insertRow(-1)
  let winnerScore = validateScore(winningTeam.scoreInput.value)
  if(winningTeam == team1) 
    {
      cellData =  `
      <tr class='history-container'>
      <td class='round-score-styling'>${winnerScore}</td>
      <td class='round-score-styling'>${loser}</td>
      </tr>
      `
      // <td>Edit</td>
    }
    if(winningTeam == team2) 
      {
        cellData =  `
        <tr class='history-container'>
        <td class='round-score-styling'>0</td>
        <td class='round-score-styling'>${winnerScore}</td>
        </tr>
        `
        // <td>Edit</td> removed but put back in once edit function is created
      }
      newTableRow.innerHTML = cellData
      console.log(team1.scoreHistory)
      console.log(team2.scoreHistory)
}


function continueGame() {
  //this function should show after a team has won to select to reset
  //or to continue with current teams and keep displaying old history
}


function emptyScore(team) {

  if(team.scoreInput.value === '') {
   return true
  } else {
    return false
  }
}

function storeData() {}

function losingTeam() {
  // this function should make the team that lost the round receive a 0 in the scoreHistory
  // how ..... that is a good question
}