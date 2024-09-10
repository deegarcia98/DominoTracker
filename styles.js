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

function winnerTeam1() {
    // alert to pop up with name of winning team displayed!
        if(currentScore1 >= 150) {
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
    disableButton();
    addScoreTeam1();
    clearScoreInput();
});


function addScoreTeam1() {
    let score = parseInt(scoreInput1.value);
    currentScore1 += score; // currentScore1 = currentScore1 + score;
    score1.innerHTML = currentScore1;
    winnerTeam1();
    console.log(currentScore1)
};

addScoreBtn2.addEventListener('click', () => {
    addScoreTeam2();
    clearScoreInput();
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


function disableButton() {
    if (scoreInput1.value.length > 0) {
        addScoreBtn1.disabled;
    } else {
        !addScoreBtn1.disabled;
    }
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







