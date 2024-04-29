let setting;
let iloscGraczy;
let choice;

let infoOGraczach = [
    ["player1", 1500],
    ["player2", 1500],
    ["player3", 1500],
    ["player4", 1500],
    ["player5", 1500]
];


function choice1(n) {
    document.querySelector("#gamesettings").style.display = "none";
    if (n === 1) {
        document.querySelector("#gamesettings1").style.display = "flex";
        setting = "#gracze";
    } else {
        document.querySelector("#gamesettings2").style.display = "flex";
        setting = "#boty";
    }
    choice = n;
}

document.addEventListener('keydown', choice2)

function choice2(e) {
    iloscGraczy = document.querySelector(setting).value;
    if (e.key === "Enter" && iloscGraczy <= 5) {
        document.querySelector("#gamesettings" + choice).style.display = "none";
        document.querySelector(".mainsquare").style.display = "block";
        for (let i = 1; i<=iloscGraczy; i++) {
            document.getElementById("player" + i).style.display = "block";
        }
        document.removeEventListener("keydown", choice2);
    }
}

function dice() {
    let iloscRuchow = Math.floor(Math.random() * 6) + 1;
}

function difNumbers(m) {

    document.getElementById("moves").innerHTML = "";
}