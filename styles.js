// Code for the Rules of the Game Button
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.rulesofgamebtn');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});
// window.localStorage.setItem('firstTeamName', 'secondTeamName');

team1 = {
    nameInput: document.getElementById('team1input'),
    scoreDiv: document.getElementById('score1'),
    scoreInput: document.getElementById('score-input1'),
    nameDiv: document.getElementById('team1name'),
    scoreButton: document.getElementById('add-score-btn1'),
    currentScore: 0,
    scoreHistory: [],
}

team2 = {
    nameInput: document.getElementById('team2input'),
    scoreDiv: document.getElementById('score2'),
    scoreInput: document.getElementById('score-input2'),
    nameDiv: document.getElementById('team2name'),
    scoreButton: document.getElementById('add-score-btn2'),
    currentScore: 0,
    scoreHistory: [],
}

// Score History 


//          Code for setting the Team Name 

team1savebtn.addEventListener('click', () => {
//   const nameDiv = document.getElementById('team1name');
// nameDiv1.innerHTML = firstTeamName.value;
// clearTeamName(firstTeamName);
    addName(team1)
})

team2savebtn.addEventListener('click', () => {
//   const nameDiv = document.getElementById('team2name');
// nameDiv2.innerHTML = secondTeamName.value;
// clearTeamName(secondTeamName);
    addName(team2)
})

function addName(team) {
    team.nameDiv.innerHTML = team.nameInput.value
}

function clearTeamName(teamname) {
    teamname.value = ''
}

function hasWon(score) {
    return score >= 150
    // if(score >= 150) {
    //     return true
    // } 
    // return false
}

//          Code for Adding the Score       
team1.scoreDiv.innerHTML = team1.currentScore;
team2.scoreDiv.innerHTML = team2.currentScore;

team1.scoreButton.addEventListener('click', () => {
    handleGame(team1)
    //clearScoreInput(scoreInput1);
})

team2.scoreButton.addEventListener('click', () => {
    handleGame(team2)
    //clearScoreInput(scoreInput2);
})

// handles the score, innerHTML of total score and if wins congrats message
function handleGame(team) {
    //  we need to take score from scoreInput and need to add to current score
    team.currentScore += validateScore(team.scoreInput.value)
    //  update score element with currentScore
    team.scoreDiv.innerHTML = team.currentScore
    //  than winner alert

    let win = hasWon(team.currentScore);
    if(win) {
        winnerAlert(team.nameDiv.innerHTML)
    }
}


function validateScore(score) {
    if (!score) {
        return 0
    }
    let scoreInt = parseInt(score)
    if(0 < scoreInt < 150) {
        return scoreInt
    }
    
};


function clearScoreInput(team) {
    team.value = "";
};

function winnerAlert(teamname) {
    alert(`Congratulations ${teamname}, You are the Winner.`)
}

function editButton(teamscore) {}

const resetButton = document.getElementById('reset-game-btn')


resetButton.addEventListener('click', () => {
    resetGame(nameDiv1, nameDiv2, score1, score2)
})


function resetGame(resetfirstname, resetsecondname, resetfirstscore, resetsecondscore) {
    resetfirstname.innerHTML = "";
    resetsecondname.innerHTML = "";
    resetfirstscore.innerHTML = 0;
    resetsecondscore.innerHTML = 0;
}

const scoreHistory1 = document.getElementById('score-history-team1')
const scoreHistory2 = document.getElementById('score-history-team2')



function addToRounds() {

}


