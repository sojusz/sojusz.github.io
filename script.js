let playersQuantity;
let sum = 0;
let currentPlayerIndex = 0;

const pawnsColors = ["Czerwony", "Zielony", "Pomaranczowy", "Zolty", "Niebieski"];

const Cards = [
    "Przejdź na pole 'Start' (Zbierz 200 zł)",
    "Błąd banku na twoją korzyść – Zbierz 200 zł",
    "Opłata za wizytę u lekarza – Zapłać 50 zł",
    "Sprzedaż akcji przynosi ci 50 zł",
    "Wyjście z więzienia za darmo – Kartę tę można zachować do użycia lub sprzedaży",
    "Idziesz do więzienia – Idziesz bezpośrednio do więzienia – Nie przechodź przez pole 'Start', nie zbieraj 200 zł",
    "Noc Wielkiej Opery – Zbierz 50 zł od każdego gracza za bilety na noc premiery",
    "Fundusz wakacyjny dojrzał – Odbierz 100 zł",
    "Zwrot podatku dochodowego – Zbierz 20 zł",
    "Twoje urodziny - Zbierz 10 zł od każdego gracza",
    "Polisa na życie sie skonczyla – Odbierz 100 zł",
    "Opłaty szpitalne – Zapłać 100 zł",
    "Opłaty szkolne – Zapłać 50 zł",
    "Otrzymujesz 25 zł za konsultację",
    "Zdobyłeś drugą nagrodę w konkursie piękności – Zbierz 10 zł",
    "Odziedziczasz 100 zł",
    "Twój fundusz świąteczny dojrzał – Odbierz 100 zł"
];

// pole 1 nic nie oznacza pole 2 oznacza ze mozna kupic pole a 21 to koleje
const placesOnMap = [["Start", 0, 1, ""], ["Mediterranean Avenue", 60, 2, "brown", 0], ["Community Chest", 0, 1, ""],
    ["Baltic Avenue", 60, 2, "brown", 0], ["Income Tax", 200, 1, ""], ["Reading Railroad", 200, 2, "railroad"],
    ["Oriental Avenue", 100, 2, "lightbue", 0], ["Chance", 0, 1, ""], ["Vermont Avenue", 100, 2, "lightblue", 0],
    ["Connecticut Avenue", 120, 2, "lightbue", 0], ["Jail", 0, 1, ""], ["St. Charles Place", 140, 2, "pink", 0],
    ["Electric Company", 150, 2, "needs"], ["States Avenue", 140, 2, "pink", 0], ["Virginia Avenue", 160, 2, "pink", 0],
    ["Pennsylvania Railroad", 200, 2, "railroad"], ["St. James Place", 180, 2, "orange", 0], ["Community Chest", 0, 1, ""],
    ["Tennessee Avenue", 180, 2, "orange", 0], ["New York Avenue", 200, 2, "orange", 0], ["Parking", 0, 1, ""], ["Kentucky Avenue", 220, 2, "red", 0],
    ["Chance", 0, 1, ""], ["Indiana Avenue", 220, 2, "red", 0], ["Illinois Avenue", 240, 2, "red", 0], ["B & O Railroad", 200, 2, "railroad"],
    ["Atlantic Avenue", 260, 2, "yellow", 0], ["Ventnor Avenue", 260, 2, "yellow", 0], ["Water Works", 150, 2, "needs"],
    ["Marvin Gardens", 280, 2, "yellow", 0], ["Go To Jail", 0, 1, ""], ["Pacific Avenue", 300, 2, "green", 0],
    ["North Carolina Avenue", 300, 2, "green", 0], ["Community Chest", 0, 1, ""], ["Pennsylvania Avenue", 320, 2, "green", 0],
    ["Short Line", 200, 2, "railroad"], ["Chance", 0, 1, ""], ["Park Place", 350, 2, "blue", 0], ["Luxury Tax", 100, 1, ""],
    ["Boardwalk", 400, 2, "blue", 0]];

const totalPropertiesByColor = {
    "brown": 2,
    "lightblue": 3,
    "pink": 3,
    "orange": 3,
    "red": 3,
    "yellow": 3,
    "green": 3,
    "blue": 2,
    "needs": 2
};

class Player {
    constructor() {
        this.money = 0;
        this.hauseLocation = [];
        this.location = 1;
        this.jail = 0;
        this.active = true;
    }

    addMoney(amount) {
        this.money += amount;
    }

    addJailTime() {
        this.jail++;
    }

    subtractJailTime() {
        this.jail--;
    }

    getJailTime() {
        return this.jail;
    }

    subtractMoney(amount) {
        this.money -= amount;
    }

    addHause(location) {
        this.hauseLocation.push(location);
    }

    move(quantity) {
        this.location = (this.location + quantity) % placesOnMap.length;
    }

    getMoney() {
        return this.money;
    }

    getHause() {
        return this.hauseLocation;
    }

    setLocation(amount) {
        this.location = amount;
    }

    getLocation() {
        return this.location;
    }

    setActive(status) {
        this.active = status;
    }

    isActive() {
        return this.active;
    }
}

const players = [];

document.addEventListener('keydown', choice)

function choice(e) {
    playersQuantity = document.querySelector("#players").value;
    if (e.key === "Enter" && playersQuantity <= 5 && playersQuantity>1) {
        document.querySelector("#gamesetting").style.display = "none";
        document.querySelector("#buy").style.display = "block";
        document.querySelector("#dice").style.display = "block";
        document.querySelector("#turn").style.display = "block";
        for (let i=1;i<=playersQuantity;i++) {
            document.getElementById("player" + i).style.display = "block";
        }
        document.removeEventListener("keydown", choice);
        for(let j=1;j<=playersQuantity;j++) {
            const player = new Player(`Player ${j + 1}`);
            player.addMoney(1500);
            players.push(player);
        }
        updateDisplay();
    }
}

function updateDisplay() {
    const player = players[currentPlayerIndex];
    document.querySelector("#whichPlayer").innerText = `Gracz ${currentPlayerIndex + 1} (${pawnsColors[currentPlayerIndex]})`;
    document.querySelector("#exactPlace").innerText = "Jestes na polu: " + placesOnMap[(player.getLocation()-1)][0];
    document.querySelector("#money").innerText = "Pieniadze: " + player.getMoney();
    document.querySelector("#houses").innerText = "Kupione lokacje:\n" + player.getHause().join(", ");
}

function movePlayer() {
    let movesQuantity = Math.floor(Math.random() * 6) + 1;
    //Math.floor(Math.random() * 6) + 1;
    document.querySelector("#dice").disabled = true;
    let player = players[currentPlayerIndex];
    if (player.getJailTime()>0) {
        player.subtractJailTime();
        (currentPlayerIndex++)%players.length;
        player = players[currentPlayerIndex];
        updateDisplay();
    }
    const pawn = document.getElementById("player" + (currentPlayerIndex + 1));
    pawn.style.transition = "transform 0.5s";
    let currentPosition = player.getLocation();
    let targetPosition = (currentPosition + movesQuantity) % 40;
    if (currentPosition>targetPosition) {
        player.addMoney(200);
        pawnMoving(currentPosition, 0);
        setTimeout(() => pawnMoving(0, targetPosition), ((40-currentPosition)*2)*500);
    }else {
        pawnMoving(currentPosition, targetPosition);
    }
    player.move(movesQuantity);
    payTaxes(movesQuantity);
    if (player.getLocation() === 31) {
        setTimeout(() => goToJail(), (movesQuantity)*450);
    }
    cardsRolling(movesQuantity);
    checkForElimination();
    win();
}

function pawnMoving(currentPosition, targetPosition) {
    const pawn = document.getElementById("player" + (currentPlayerIndex + 1));

    for (let i = currentPosition; i < targetPosition; i++) {
        setTimeout(() => {
            if (i >= 1 && i <= 10) {
                pawn.style.transform = `translate(${((i)* -4.1)}vw, 0vw)`;
            } else if (i >= 11 && i <= 20) {
                pawn.style.transform = `translate(-41vw, ${(i-10)* -4.1}vw)`;
            } else if (i >= 21 && i <= 30) {
                pawn.style.transform = `translate(${((-30+i)*4.1)}vw, -41vw)`;
            } else if (i >= 31 && i <= 40) {
                pawn.style.transform = `translate(0vw, ${((-40+i)*4.1)}vw)`;
            }
        }, (i - currentPosition) * 500);
    }setTimeout(updateDisplay, (targetPosition - currentPosition) * 500);
}

function buy() {
    const player = players[currentPlayerIndex];
    if (placesOnMap[player.getLocation()-1][2] === 2 || placesOnMap[player.getLocation()-1][2] === 21) {
        player.subtractMoney(placesOnMap[player.getLocation()-1][1]);
        player.addHause(placesOnMap[player.getLocation()-1][0]);
        placesOnMap[player.getLocation()-1][2] = 1;
        updateDisplay();
    }else {
        window.alert("Nie mozesz kupic tego pola!");
    }
}

function payTaxes(amount) {
    const player = players[currentPlayerIndex];
    if (player.getLocation() === 5 || player.getLocation() === 39) {
        player.subtractMoney(placesOnMap[player.getLocation()-1][1]);
        setTimeout(() => document.querySelector("#notifications").innerText = `Pobrano ${placesOnMap[player.getLocation()-1][1]}M za podatek`, amount*500);
        setTimeout(() => document.querySelector("#notifications").innerText = "", amount*2000);
    }
    for (let i=0;i<players.length;i++) {
        if (players[i].getHause().includes(placesOnMap[player.getLocation()-1][0]) && i!==currentPlayerIndex) {
            if (checkFullSet(players[i], placesOnMap[player.getLocation()-1][3])) {
                player.subtractMoney((placesOnMap[player.getLocation()-1][1]*2));
                players[i].addMoney((placesOnMap[player.getLocation()-1][1]*2));
                setTimeout(() => document.querySelector("#notifications").innerText = `Pobrano ${(placesOnMap[player.getLocation()-1][1]*2)}M za wejscie na posesje`, amount*500);
            }else {
                player.subtractMoney(placesOnMap[player.getLocation()-1][1]);
                players[i].addMoney(placesOnMap[player.getLocation()-1][1]);
                setTimeout(() => document.querySelector("#notifications").innerText = `Pobrano ${placesOnMap[player.getLocation()-1][1]}M za wejscie na posesje`, amount*500);
            }
            setTimeout(() => document.querySelector("#notifications").innerText = "", amount*2000);
        }
    }
}

function cardsRolling(amount) {
    let player = players[currentPlayerIndex];
    if (placesOnMap[player.getLocation()-1][0] === "Community Chest" || placesOnMap[player.getLocation()-1][0] === "Chance") {
        let whichCard = Math.floor(Math.random() * Cards.length);
        setTimeout(() => document.querySelector("#notifications").innerText = Cards[whichCard], amount*500);
        setTimeout(() => document.querySelector("#notifications").innerText = "", amount*2000);

        if(whichCard === 0) {
            pawnMoving(player.getLocation, 0);
        }else if(whichCard === 1) {
            player.addMoney(200);
        }else if(whichCard === 2) {
            player.subtractMoney(50);
        }else if(whichCard === 3) {
            player.addMoney(50);
        }else if(whichCard === 4) {
            player.subtractJailTime();
        }else if(whichCard === 5) {
            goToJail();
        }else if(whichCard === 6) {
            for(let i=0;i<players.length;i++) {
                players[i].subtractMoney(50);
            }
        }else if(whichCard === 7) {
            player.addMoney(100);
        }else if(whichCard === 8) {
            player.addMoney(20);
        }else if(whichCard === 9) {
            for(let i=0;i<players.length;i++) {
                if(i!==currentPlayerIndex) {
                    players[i].subtractMoney(10);
                    sum += 10;
                }
            }
            player.addMoney(sum);
        }else if(whichCard === 10) {
            player.addMoney(100);
        }else if(whichCard === 11) {
            player.subtractMoney(100);
        }else if(whichCard === 12) {
            player.subtractMoney(50);
        }else if(whichCard === 13) {
            player.addMoney(25);
        }else if(whichCard === 14) {
            player.addMoney(10);
        }else if(whichCard === 15) {
            player.add(100);
        }else if(whichCard === 16) {
            player.add(100);
        }
    }
}

function goToJail() {
    const player = players[currentPlayerIndex];
    if (player.getJailTime() === 0) {
        player.addJailTime();
        document.querySelector("#notifications").innerText = "Zostales zatrzymany i idziesz do wiezienia!";
        setTimeout(() => document.querySelector("#notifications").innerText = "", 8000);
        let currentPosition = player.getLocation();
        const pawn = document.getElementById("player" + (currentPlayerIndex + 1));
        pawn.style.transition = "transform 0.1s";
        let targetPosition = 11;
        player.setLocation(targetPosition);
        if (currentPosition>targetPosition) {
            pawnMoving(currentPosition, 0);
            pawn.style.transform = `translate(${-44}vw, 0vw)`;
        }else {
            pawnMoving(currentPosition, targetPosition);
        }
    }
    else if (player.getJailTime()<0) {
        player.addJailTime();
        document.querySelector("#notifications").innerText = "Zostales zatrzymany ale uzyles swojej przepustki wiec nie idziesz do wiezienia";
        setTimeout(() => document.querySelector("#notifications").innerText = "", 8000);
    }
}

function endTurn() {
    document.querySelector("#dice").disabled = false;
    currentPlayerIndex = (currentPlayerIndex + 1) % playersQuantity;
    updateDisplay();
}

function checkFullSet(player, color) {
    let playerProperties = player.getHause().filter(location => {
        let property = placesOnMap.find(place => place[0] === location);
        return property && property[3] === color;
    }).length;

    return playerProperties === totalPropertiesByColor[color];
}

function nextPlayer() {
    do {
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    } while (!players[currentPlayerIndex].isActive());
}

function checkForElimination() {
    const player = players[currentPlayerIndex];
    if (player.getMoney() < 0 && player.getHause().length === 0) {
        document.querySelector("#dice").disabled = false;
        player.setActive(false);
        document.querySelector("#notifications").innerText = `Gracz ${currentPlayerIndex + 1} (${pawnsColors[currentPlayerIndex]}) został wyeliminowany z gry!`;
        setTimeout(() => document.querySelector("#notifications").innerText = "", 5000);
        document.getElementById("player" + (currentPlayerIndex + 1)).style.display = "none";
        nextPlayer();
        updateDisplay();
        if (players.filter(player => player.isActive()).length === 1) {
            win();
        }
    }
}

function win() {
    if (players.filter(player => player.isActive()).length === 1) {
        const winner = players.find(player => player.isActive());
        const winnerIndex = players.indexOf(winner);
        window.alert(`Gracz ${winnerIndex + 1} (${pawnsColors[winnerIndex]}) wygrywa grę!`);
        location.reload();
    }
}
