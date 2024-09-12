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

//          Code for setting the Team Name 

const firstTeamName = document.getElementById('team1input');
const secondTeamName = document.getElementById('team2input');

const nameDiv1 = document.getElementById('team1name');
const nameDiv2 = document.getElementById('team2name');



console.log(nameDiv1)


team1savebtn.addEventListener('click', () => {
 //   const nameDiv = document.getElementById('team1name');
    nameDiv1.innerHTML = firstTeamName.value;
    clearTeam1();
})

team2savebtn.addEventListener('click', () => {
 //   const nameDiv = document.getElementById('team2name');
    nameDiv2.innerHTML = secondTeamName.value;
    clearTeam2();
})

function clearTeam1() {
    firstTeamName.value = "";
}

function clearTeam2() {
    secondTeamName.value = "";
}

function winnerTeam1(score) {
    // alert to pop up with name of winning team displayed!
        if(score >= 150) {
            alert(`Congratulations ${nameDiv1.innerHTML} , You are the WINNER`)
        }
//  I learned here that instead of using nameDiv1.value to display the wining teams name,
//  I used nameDiv1.innerHTML to pull out the information from the HTML itself
    };
    
    function winnerTeam2() {
    // alert to pop up with name of winning team displayed!
        if(currentScore2 >= 150) {
            alert(`Congratualations ${nameDiv2.innerHTML}, You are the WINNER`)
        }
    };

function hasWon(score) {
    return score >= 150
    // if(score >= 150) {
    //     return true
    // } 
    // return false
}


//          Code for Adding the Score       

const scoreInput1 = document.getElementById('score-input1');
const scoreInput2 = document.getElementById('score-input2');

const addScoreBtn1 = document.getElementById('add-score-btn1');
const addScoreBtn2 = document.getElementById('add-score-btn2');

const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');


let currentScore1 = 0;
let currentScore2 = 0;

score1.innerHTML = currentScore1;
score2.innerHTML = currentScore2;


addScoreBtn1.addEventListener('click', () => {
    let inputScore = validateScore(scoreInput1.value);
    let currentScore = parseInt(score1.innerHTML)
    let newScore = addScore(currentScore, inputScore) // currentScore = currentScore1, inputScore = inputScore
    updateElement(score1, newScore)
    let win = hasWon(newScore);
    if(win) {
        winnerAlert(nameDiv1.innerHTML)
    };
    clearScoreInput();
    // revceive the score, then ensure the score is a number in between 0-150
    // then add the score to the team
    // check score if Winner
});

addScoreBtn2.addEventListener('click', () => {
    let inputscore = validateScore(scoreInput2.value)
    let currentScore = parseInt(score2.innerHTML)
    let newScore = addScore(currentScore, inputscore) // currentScore = currentScore1, inputScore = inputScore
    updateElement(score2, newScore)
    let win = hasWon(newScore);
    if(win) {
        winnerAlert(nameDiv2.innerHTML)
    };
    clearScoreInput();
});

function winnerAlert(teamname) {
    alert(`Congratulations ${teamname}, You are the Winner.`)
}



//function to replace the the repetition of adding score to each team 
function addScore(currentScore, inputScore) {
    currentScore += inputScore
    return currentScore
}

function validateScore(score) {
    let scoreInt = parseInt(score)
    if(0 < scoreInt < 150) {
        return scoreInt
    }
};

function updateElement(htmlElement, value) {
    htmlElement.innerHTML = value 
}

function clearScoreInput() {
    scoreInput1.value = "";
    scoreInput2.value = "";
};


function isNan() {

}






// const team1 = {
//     name: firstTeamName,
//     score: 0,
    
// };

//  const team2 = {
//     name: secondTeamName.value,
//     score: 0,
//  };

//  console.log(secondTeamName.value)

/* think of using OOP to store the data for each team such as 

function userCreator(name, score) {
const newUser = {};
newUser.name = name;
newUser.score = score;
newUser.increment = function () {
    newUser.score++
    }
    return newUser;
}

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5)
user1.increment()


Think of how you can apply this to your code.

for more ideas/help         https://www.youtube.com/watch?v=aAAS9cEuFYI
*/

// function addScoreTeam1(score) {
//     currentScore1 += score; // currentScore1 = currentScore1 + score;
//     score1.innerHTML = currentScore1
//     return currentScore1;
// };

// function addScoreTeam2() {
// let score = parseInt(scoreInput2.value);
// currentScore2 += score; // currentScore2 = currentScore2 + score;
// score2.innerHTML = currentScore2;
// winnerTeam2();
// };





