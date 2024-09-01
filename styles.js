const modal = document.querySelector('.modal');
const openModal = document.querySelector('.rulesofgamebtn');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

const firstTeamName = document.getElementById('team1name').value;

const secondTeamName = document.getElementById('team2name').value;

let team1 = {firstTeamName};

let team2 = {secondTeamName};

window.localStorage.setItem('team1', 'team2');

console.log(team1)
