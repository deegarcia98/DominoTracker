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

const confirmModal = document.getElementById('confirm-reset-dialog')
const confirmYesBtn = document.getElementById('confirm-yes-btn')
const confirmNoBtn = document.getElementById('confirm-no-btn')



 let team1Obj = {
  nameInput: document.getElementById("team1input"),
  saveBtn: document.getElementById("team1savebtn"),
  scoreDiv: document.getElementById("score1"),
  scoreInput: document.getElementById("score-input1"),
  nameDiv: document.getElementById("team1name"),
  scoreButton: document.getElementById("add-score-btn1"),
  currentScore: 0,
  historyDiv: document.getElementById("score-history-team1"),
  replaceHistoryName: document.getElementById("score-history-team1"),
  scoreHistory: [],
  gameHistory: [],
  name: localStorage.getItem("team1Name"),
  // name: localStorage.getItem("team1Name"),
};

 let team2Obj = {
  nameInput: document.getElementById("team2input"),
  saveBtn: document.getElementById("teamsavebtn"),
  scoreDiv: document.getElementById("score2"),
  scoreInput: document.getElementById("score-input2"),
  nameDiv: document.getElementById("team2name"),
  scoreButton: document.getElementById("add-score-btn2"),
  currentScore: 0,
  historyDiv: document.getElementById("score-history-team2"),
  replaceHistoryName: document.getElementById("score-history-team2"),
  scoreHistory: [],
  gameHistory: [],
  name: localStorage.getItem("team2Name")
};
team1Obj.nameDiv.innerHTML = team1Obj.name
team2Obj.nameDiv.innerHTML = team2Obj.name

team1Obj.replaceHistoryName.innerHTML = `${team1Obj.name}'s Team`
team2Obj.replaceHistoryName.innerHTML = `${team2Obj.name}'s Team`


function referenceLocalStorage(){
  team1Obj.name = team.nameInput.value
  localStorage.setItem("team1Name", team.nameInput.value)
  team.nameDiv.innerHTML = team1Obj.name
  // team.nameDiv.innerHTML = localStorage.getItem(team1ObjDeserialized.nameDiv)
  team.replaceHistoryName.innerHTML = `${team1Obj.name}'s Team`
}



//          Code for setting the Team Name

team1savebtn.addEventListener("click", () => {
  localStorage.setItem("team1Name", team1Obj.nameInput.value)
  addName(team1Obj)
  clearTeamName(team1Obj);
});

team2savebtn.addEventListener("click", () => {
  localStorage.setItem("team2Name", team2Obj.nameInput.value)
  // team2Obj.nameDiv.innerHTML = team2Obj.name
  // team2Obj.replaceHistoryName.innerHTML = `${team2Obj.name}'s Team`
  addName(team2Obj);
  clearTeamName(team2Obj);
});

function addName(team) {
  team.name = team.nameInput.value
  team.nameDiv.innerHTML = team.name
  team.replaceHistoryName.innerHTML = `${team.name}'s Team`
  // team.nameDiv.innerHTML = team.name;
  // team.replaceHistoryName.innerHTML = `${localStorage.getItem(teamname.name)}'s Team`;
}

function clearTeamName(team) {
  team.nameInput.value = "";
  // you could use (team.nameInput.disabled = true) inside the clearTeamName func only if
  // you create an edit button for the team names or game is reset. Do in future
}

// Saving team names and score when enter is pressed
team1Obj.nameInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    team1savebtn.click();
  }
});

team2Obj.nameInput.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    team2savebtn.click();
  }
});

team1Obj.scoreInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    team1Obj.scoreButton.click();
  }
});

team2Obj.scoreInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    team2Obj.scoreButton.click();
  }
});

    
    function hasWon(score) {
      return score >= 150;
      // if(score >= 150) {
        //     return true
        // }
        // return false
      }
      
      //          Code for Adding the Score
      team1Obj.scoreDiv.innerHTML = team1Obj.currentScore;
      team2Obj.scoreDiv.innerHTML = team2Obj.currentScore;
      
      team1Obj.scoreButton.addEventListener("click", () => {
        logicalFuncOrder(team1Obj);
        // emptyScore(team1)
        // handleGame(team1)
        // clearScoreInput(team1)
      });
      
      team2Obj.scoreButton.addEventListener("click", () => {
        logicalFuncOrder(team2Obj);
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
            console.log(team1Deserialized)
            console.log("team 2", team2Obj.gameHistory)
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
            team1Obj.gameHistory.push(team1Obj.scoreHistory)
            team2Obj.gameHistory.push(team2Obj.scoreHistory)
            localStorage.setItem(team1Obj.gameHistory)
            console.log( localStorage.getItem('team1Parsed') )
            
            winnerModal.showModal()
            congratsMsg.innerHTML =`Congratulations ${teamname}, Your team Won!!`;
            
            
          }
          
          function editButton(teamscore) {}
          
          // this const must be above the resetBtn event listener if not the console throws an error(cannot access)
          const resetButton = document.getElementById("reset-game-btn");
          
          resetButton.addEventListener("click", () => {
            confirmModal.showModal()
          })

          confirmNoBtn.addEventListener("click", () => {
            confirmModal.close()
          })


          confirmYesBtn.addEventListener("click", () => {
            resetGame(team1Obj);
            resetGame(team2Obj);
            confirmModal.close()
          });


          
          function resetGame(team) {
            main = document.getElementById("score-history-subcontainer");
            team.nameDiv.innerHTML = "";
            team.scoreDiv.innerHTML = 0;
            team.currentScore = 0;
            main.innerHTML = "";
            team.scoreHistory = [];
            team1Obj.historyDiv.innerHTML = 'Team 1';
            team2Obj.historyDiv.innerHTML = 'Team 2'; 
          }
          
          function roundWinnerFunc(winningTeam) {
            main = document.getElementById("score-history-subcontainer");
            newTableRow = main.insertRow(-1);
            let winnerScore = winningTeam.scoreInput.value;
            if (winningTeam == team1Obj) {
              cellData = `
              <tr class='history-container'>
              <td class='round-score-styling'>${winnerScore}</td>
              <td class='round-score-styling'>0</td>
              </tr>
              `;
              team2Obj.scoreHistory.push(0);
              // <td>Edit</td>
            }
            if (winningTeam == team2Obj) {
              cellData = `
              <tr class='history-container'>
              <td class='round-score-styling'>0</td>
              <td class='round-score-styling'>${winnerScore}</td>
              </tr>
              `;
              team1Obj.scoreHistory.push(0);
              // <td>Edit</td> removed but put back in once edit function is created
            }
            newTableRow.innerHTML = cellData;
          }
          
          continueGameBtn.addEventListener('click', () => {
            main = document.getElementById("score-history-subcontainer");
            team1Obj.scoreDiv.innerHTML = 0
            team2Obj.scoreDiv.innerHTML = 0
            team1Obj.currentScore = 0
            team2Obj.currentScore = 0
            // maybe instead of pushing this information once continue is pressed continue should print the game history
            // team1.gameHistory.push(team1.scoreHistory)
            // team2.gameHistory.push(team2.scoreHistory)
            main.innerHTML = ""
            winnerModal.close();
          })

          newGameBtn.addEventListener('click', () => {
            resetGame(team1Obj);
            resetGame(team2Obj)
            winnerModal.close();
          }) 
      

 







