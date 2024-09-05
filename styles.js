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

/* think of using OOP to store the data for each team such as 

const user1 = {
name: "Will",
score: 3,
increment: function() {
user1.score++}
}

Think of how you can apply this to your code.

for more ideas/help         https://www.youtube.com/watch?v=aAAS9cEuFYI
*/

const team1 = {
    name: 'firstTeamName',
    score: 0,
    
};

const team2 = {
    name: 'secondTeamName',
    score: 'team2score',

};




//          Code for Adding the Score       https://www.youtube.com/watch?v=zWIyJdJW6t8

const team1Score = document.getElementById('score-input1');
const team2Score = document.getElementById('score-input2');

const addScoreBtn1 = document.getElementById('add-score-btn1');
const addScoreBtn2 = document.getElementById('add-score-btn2');

const tr = document.getElementById('scoreboard-tr')

addScoreBtn1.addEventListener('click', () => {
        addScoreTeam1();
})


const roundScore1 = document.getElementById('round-score1');


function addScoreTeam1() {
    let score1 = team1Score.value;
    let score2 = '0'

    const template = `
    <td id='round-score1' class='score'>${score1}</td>
    <td id='round-score2' class='score'>${score2}</td>
`
tr.innerHTML = template;

}

addScoreBtn2.addEventListener('click', () => {
    addScoreTeam2();
})

function addScoreTeam2() {
    roundscore1 = team1Score;
    let score2 = team2.score;

    
};

console.log(addScoreTeam2)

//cosnt newTd2 = document.createElement('td')









