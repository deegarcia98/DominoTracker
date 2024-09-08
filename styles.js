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

const team1Name = firstTeamName.value;
const team2Name = document.getElementById('team2name');



console.log(team1Name)


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
    addScoreTeam1();
});


function addScoreTeam1() {
    let score = parseInt(scoreInput1.value);
    currentScore1 += score; // currentScore1 = currentScore1 + score;
    score1.innerHTML = currentScore1;
    clearScoreInput();
    winnerTeam1();
    clickFunction();
    console.log(currentScore1)
};



addScoreBtn2.addEventListener('click', () => {
    addScoreTeam2();
});


function addScoreTeam2() {
    let score = parseInt(scoreInput2.value);
    currentScore2 += score; // currentScore2 = currentScore2 + score;
    score2.innerHTML = currentScore2;
    clearScoreInput();
    winnerTeam2();
};


function clearScoreInput() {
    scoreInput1.value = "";
    scoreInput2.value = "";
};

function winnerTeam1() {
// alert to pop up with name of winning team displayed!
    if(currentScore1 >= 150) {
        alert(`Congratulations ${team1Name.value}, You are the WINNER`)
    }
};

function winnerTeam2() {
// alert to pop up with name of winning team displayed!
    if(currentScore2 >= 150) {

}
};


function clickFunction(evt) {
    let input = scoreInput1.value.trim();
    if(!input.length) return false;
    return true;
}




/* I need to make it so that when the Team1Btn is pressed the score is added,
but the score of team 2 is not changed or equals 0. 


*/

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







