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
    let team1 = document.getElementById('team1input').value;
    let nameDiv = document.getElementById('team1name');
    nameDiv.innerHTML = team1;

})

team2savebtn.addEventListener('click', () => {
    let team2 = document.getElementById('team2input').value;
    let nameDiv = document.getElementById('team2name');
    nameDiv.innerHTML = team2;

    if(team2 === '') {
        alert('Please enter in a Team Name')
    }
})

const saveTeamName = () => {

};

function addScore() {};


