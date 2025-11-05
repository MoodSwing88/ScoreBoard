const scoreHome = document.getElementById("scoreHome")
const scoreGuest = document.getElementById("scoreGuest")
let pointsHome = 0
let pointsGuest = 0


function leader() {
    scoreHome.innerText = pointsHome;
    scoreGuest.innerText = pointsGuest;

    scoreHome.classList.remove("glow");
    scoreGuest.classList.remove("glow");
    
    if (pointsHome > pointsGuest) {
        scoreHome.classList.add("glow");
    } else if (pointsGuest > pointsHome) {
        scoreGuest.classList.add("glow");
    }
}


function add1Home() {
    pointsHome += 1
    scoreHome.textContent = pointsHome
    leader()
}

function add2Home() {
    pointsHome += 2
    scoreHome.textContent = pointsHome
    leader()
}

function add3Home() {
    pointsHome += 3
    scoreHome.textContent = pointsHome
    leader()
}

function add1Guest() {
    pointsGuest += 1
    scoreGuest.textContent = pointsGuest
    leader()
}

function add2Guest() {
    pointsGuest += 2
    scoreGuest.textContent = pointsGuest
    leader()
}

function add3Guest() {
    pointsGuest += 3
    scoreGuest.textContent = pointsGuest
    leader()
}

function newGame() {
    pointsHome = 0
    pointsGuest = 0
    scoreHome.textContent = pointsHome
    scoreGuest.textContent = pointsGuest
    scoreHome.classList.remove("glow");
    scoreGuest.classList.remove("glow");
}