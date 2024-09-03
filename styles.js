const modal = document.querySelector('.modal');
const openModal = document.querySelector('.rulesofgamebtn');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

const firstTeamName = document.getElementById('team1input');

const secondTeamName = document.getElementById('team2input');

// window.localStorage.setItem('firstTeamName', 'secondTeamName');

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



const saveTeamName = () => {

};

//<button id="add-score-btn1">Add Score</button>
const addScoreBtn1 = document.getElementById('add-score-btn1');

addScoreBtn1.addEventListener('click', () => {
        addScoreTeam1();
})

function addScoreTeam1() {
    
    
};

function newScoreTeam1() {
    const newTd1 = document.createElement('td');
    newTd1.setAttribute('id', 'round-score1')
    newTd1.value = `${}`
}



//cosnt newTd2 = document.createElement('td')





function addScoreTeam2() {
    
};

let log = console.log;

