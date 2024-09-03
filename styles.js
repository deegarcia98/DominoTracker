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
    const team1 = document.getElementById('team1input').value;
    const nameDiv = document.getElementById('team1name');
    nameDiv.innerHTML = team1;
    clearTeam1();
})

function clearTeam1() {
    firstTeamName.value = "";
}



team2savebtn.addEventListener('click', () => {
    const team2 = document.getElementById('team2input').value;
    const nameDiv = document.getElementById('team2name');
    nameDiv.innerHTML = team2;
    clearTeam2();
})

function clearTeam2() {
    secondTeamName.value = "";
}



//          Code for Adding the Score

const team1Score = document.getElementById('team1score');
const team2Score = document.getElementById('team2score');

const addScoreBtn1 = document.getElementById('add-score-btn1');
const addScoreBtn2 = document.getElementById('add-score-btn2');

const tr = document.getElementById('scoreboard-tr')

addScoreBtn1.addEventListener('click', () => {
        newScoreTeam1();
})



function newScoreTeam1() {
    let score1 = team1Score.value;
    let score2 = '0'


    const template = `
<td>${score1}</td>
<td>${score2}</td>
`
tr.innerHTML += template;

}





//cosnt newTd2 = document.createElement('td')





function addScoreTeam2() {
    
};



