const rulesOfGameBtn = document.getElementById("rulesofgame");

rulesOfGameBtn.addEventListener("click", rulesMsg);

function rulesMsg() {
    alert("Once the winning team is determined (by placing last domino or lowest score), the losing team (and only the losing team) counts the value of their remaining fichas. This total is awarded to the winning team's score. The first team to reach 150 points wins the game.")
};


const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-modal-close]");
const overlay = document.getElementById("overlay");

console.log(openModalButtons);

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


