const modal = document.querySelector('.modal');
const openModal = document.querySelector('.rulesofgamebtn');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

const firstTeamName = document.getElementById('team1input').value;

const secondTeamName = document.getElementById('team2input').value;

window.localStorage.setItem('firstTeamName', 'secondTeamName');

team1savebtn.addEventListener('click', () => {})

team2savebtn.addEventListener('click', () => {})

const saveTeamName = () => {

};

function addScore() {};


