// Code for the Rules of the Game Button
const modal = document.querySelector(".modal");
const openrogModal = document.querySelector(".rulesofgamebtn");
const closerogModal = document.querySelector(".close-button");

const winnerModal = document.getElementById('winner-modal');
const continueGameBtn = document.getElementById('continue-game-btn');
const newGameBtn = document.getElementById('new-game-btn');
const congratsMsg = document.getElementById('congratsMsg');

openrogModal.addEventListener("click", () => {
  modal.showModal();
});

closerogModal.addEventListener("click", () => {
  modal.close();
});


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
  gameHistory: [],
  replaceHistoryName: document.getElementById("score-history-team1"),
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
  gameHistory: [],
  replaceHistoryName: document.getElementById("score-history-team2"),
};

let team1Serialized = JSON.stringify(team1);

localStorage.setItem("team1", team1Serialized);

let team1Deserialized = JSON.parse(localStorage.getItem("team1"));

//  console.log(team1Deserialized)

//          Code for setting the Team Name

team1savebtn.addEventListener("click", () => {
  addName(team1);
  clearTeamName(team1);
});

team2savebtn.addEventListener("click", () => {
  addName(team2);
  clearTeamName(team2);
});

function addName(team) {
  team.nameDiv.innerHTML = team.nameInput.value;
  team.replaceHistoryName.innerHTML = `${team.nameInput.value}'s Team`;
}

function clearTeamName(team) {
  team.nameInput.value = "";
  // you could use (team.nameInput.disabled = true) inside the clearTeamName func only if
  // you create an edit button for the team names or game is reset. Do in future
}

// Saving team names and score when enter is pressed
team1.nameInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    team1savebtn.click();
  }
});

team2.nameInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    team2savebtn.click();
  }
});

team1.scoreInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    team1.scoreButton.click();
  }
});

team2.scoreInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    team2.scoreButton.click();
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
      return score >= 150;
      // if(score >= 150) {
        //     return true
        // }
        // return false
      }
      
      //          Code for Adding the Score
      team1.scoreDiv.innerHTML = team1.currentScore;
      team2.scoreDiv.innerHTML = team2.currentScore;
      
      team1.scoreButton.addEventListener("click", () => {
        logicalFuncOrder(team1);
        // emptyScore(team1)
        // handleGame(team1)
        // clearScoreInput(team1)
      });
      
      team2.scoreButton.addEventListener("click", () => {
        logicalFuncOrder(team2);
        // emptyScore(team2)
        // handleGame(team2)
        // clearScoreInput(team2)
      });
      
      function logicalFuncOrder(team) {
        var x = team.scoreInput.value;
        if (x === "") {
          team.scoreInput.value = "";
          return alert("Please provide a number.");
        }
        handleGame(team);
        clearScoreInput(team);
        
        //do not forget in the future to check for isNaN like .1
      }
      
      function emptyScore(team) {
        var x = team.scoreInput.value;
        if (x === "") {
          team.scoreInput.value = "";
          return alert("Please provide a number.");
        } else {
          handleGame(team);
          clearScoreInput(team);
        }
      }
      
      //to test if a value X is NaN is an expression of the form X !== X. The result will be true if and only if X is NaN.
      
      
      function handleGame(team) {
        if(validateScore(team.scoreInput.value)) {
          
          team.currentScore += parseInt(team.scoreInput.value);
          
          team.scoreDiv.innerHTML = team.currentScore;
          storeScore(team);
          roundWinnerFunc(team);
          let win = hasWon(team.currentScore);
          if (win) {
            winnerAlert(team.nameDiv.innerHTML);
          }
        }
      }
      
      // function to disble the inputs of team and score or use a modal to either start a new game or reset the entire game
      // we can do a modal that shows the congrats msg as well as the 2 options at the bottom of the modal box for newGame or reset
      
      
      function storeScore(team) {
        team.scoreHistory.push(parseInt(team.scoreInput.value));
      }
      
      
      
      function validateScore(score) {
        // if (!score) {
          //   return 0;
          // }
          let scoreInt = parseInt(score);
          // if (0 < scoreInt < 150) {
            //   return scoreInt;
            // }
            if (isNaN(scoreInt)) {
              alert("Please provide a number");
              return false;
            }
            return true;
          }
          
          function clearScoreInput(team) {
            team.scoreInput.value = "";
          }
          
          function winnerAlert(teamname) {
            
            congratsMsg.innerHTML =`Congratulations ${teamname}, Your team Won!!`;
            
            winnerModal.showModal()
          }
          
          function editButton(teamscore) {}
          
          // this const must be above the resetBtn event listener if not the console throws an error(cannot access)
          const resetButton = document.getElementById("reset-game-btn");
          
          resetButton.addEventListener("click", () => {
            resetGame(team1);
            resetGame(team2);
          });
          
          function resetGame(team) {
            main = document.getElementById("score-history-subcontainer");
            team.nameDiv.innerHTML = "";
            team.scoreDiv.innerHTML = 0;
            team.currentScore = 0;
            main.innerHTML = "";
            team.scoreHistory = [];
            team1.historyDiv.innerHTML = 'Team 1';
            team2.historyDiv.innerHTML = 'Team 2'; 
          }
          
          function roundWinnerFunc(winningTeam, loser) {
            main = document.getElementById("score-history-subcontainer");
            newTableRow = main.insertRow(-1);
            let winnerScore = winningTeam.scoreInput.value;
            if (winningTeam == team1) {
              cellData = `
              <tr class='history-container'>
              <td class='round-score-styling'>${winnerScore}</td>
              <td class='round-score-styling'>0</td>
              </tr>
              `;
              team2.scoreHistory.push(0);
              // <td>Edit</td>
            }
            if (winningTeam == team2) {
              cellData = `
              <tr class='history-container'>
              <td class='round-score-styling'>0</td>
              <td class='round-score-styling'>${winnerScore}</td>
              </tr>
              `;
              team1.scoreHistory.push(0);
              // <td>Edit</td> removed but put back in once edit function is created
            }
            newTableRow.innerHTML = cellData;
          }
          
          continueGameBtn.addEventListener('click', (team) => {
            main = document.getElementById("score-history-subcontainer");
            team1.scoreDiv.innerHTML = 0
            team2.scoreDiv.innerHTML = 0
            team1.currentScore = 0
            team2.currentScore = 0
            team1.gameHistory.push(team1.scoreHistory)
            team2.gameHistory.push(team2.scoreHistory)
            console.log(team1.gameHistory)
            console.log(team2.gameHistory)
            main.innerHTML = ""
            winnerModal.close();
          })

          newGameBtn.addEventListener('click', () => {
            resetGame(team1);
            resetGame(team2)
            winnerModal.close();
          }) 
      

 







