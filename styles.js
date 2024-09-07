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



team1savebtn.addEventListener('click', () => {
    const nameDiv = document.getElementById('team1name');
    nameDiv.innerHTML = firstTeamName.value;
    clearTeam1();
})

function clearTeam1() {
    firstTeamName.value = "";
}



team2savebtn.addEventListener('click', () => {
    const nameDiv = document.getElementById('team2name');
    nameDiv.innerHTML = secondTeamName.value;
    clearTeam2();
})

function clearTeam2() {
    secondTeamName.value = "";
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




//          Code for Adding the Score       

const scoreInput1 = document.getElementById('score-input1');
const scoreInput2 = document.getElementById('score-input2');

const addScoreBtn1 = document.getElementById('add-score-btn1');
const addScoreBtn2 = document.getElementById('add-score-btn2');

const roundScore1 = document.getElementById('round-score1');
const roundScore2 = document.getElementById('round-score2');



let currentScore1 = 0;
let currentScore2 = 0;

//  roundScore1.innerHTML = scoreOfTeam1;
//  roundScore2.innerHTML = scoreOfTeam2;

const tr = document.getElementById('scoreboard-tr')


addScoreBtn1.addEventListener('click', () => {
    addScoreTeam1();
})

function addScoreTeam1() {
    let score1 = scoreInput1.value;
    let score2 = scoreInput2.value;

    const template = `
    <td id='round-score1' class='score'>${score1}</td>
    <td id='round-score2' class='score'>${score2}</td>
`
tr.innerHTML = template;
clearScoreInput();
}

addScoreBtn2.addEventListener('click', () => {
    addScoreBtn2();
})

function addScoreTeam2() {
    let sum = parseInt(scoreOfTeam2 + scoreInput2.value);
    roundScore2.innerHTML = sum;
    
};

function clearScoreInput() {
    scoreInput1.value = "";
    scoreInput2.value = "";
}



/* I need to make it so that when the Team1Btn is pressed the score is added,
but the score of team 2 is not changed or equals 0. 


*/









