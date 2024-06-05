let j, z, l, pacman, fruit, myInterval, ghost, nextPosition;
let d = "ArrowRight"
let i = 1;
let k = [100];
let points = 0;
let speed = 250;
let ghostnumber = 1;

function mapCreation() {
    drawPacman();
    drawFruit();
    drawGhost();
}

function drawGhost() {
    for (let m = 0; m < k.length; m++) {
        ghost = document.getElementById("div" + k[m]);
        ghost.style.backgroundImage = "url('ghost" + (m + 1) + ".png')";
    }
}

function clearGhosts() {
    for (let m = 0; m < k.length; m++) {
        ghost = document.getElementById("div" + k[m]);
        ghost.style.backgroundImage = "";
    }
}

function addGhost() {
    if (document.getElementById("div100").style.backgroundImage === "") {
        k.push(100);
        ghostnumber++;
        drawGhost();
    }
    else {
        addGhost();
    }
}

function drawPacman() {
    pacman = document.getElementById("div" + i);
    pacman.style.backgroundImage = "url('pacman.gif')";
}

function drawFruit() {
    j = Math.floor(Math.random() * 100) + 2;
    fruit = document.getElementById("div" + j);
    fruit.style.backgroundImage = "url('cherry.png')";
}

document.addEventListener("keydown", function (e){
    d = e.key;
});

function movement() {
    pacman.style.transform = "rotate(0deg)";
    pacman.style.backgroundImage = "";
    if (d === "ArrowUp" || d ==="w" && i>10) {
        i-=10;
        drawPacman();
        pacman.style.transform = "rotate(270deg)";
    }else if (d === "ArrowUp" || d ==="w" && i<=10) {
        i+=90;
        drawPacman();
        pacman.style.transform = "rotate(270deg)";
    }

    if (d === "ArrowDown" || d ==="s" && i<90) {
        i+=10;
        drawPacman();
        pacman.style.transform = "rotate(90deg)";
    }else if (d === "ArrowDown" || d ==="s" && i>=90) {
        i-=90;
        drawPacman();
        pacman.style.transform = "rotate(90deg)";
    }

    if (d === "ArrowLeft" || d ==="a" && i%10!==1) {
        i--;
        drawPacman();
        pacman.style.transform = "rotate(180deg)";
    }else if (d === "ArrowLeft" || d ==="a" && i%10===1) {
        i+=9;
        drawPacman();
        pacman.style.transform = "rotate(180deg)";
    }

    if (d === "ArrowRight" || d ==="d" && i%10!==0) {
        i++;
        drawPacman();
        pacman.style.transform = "rotate(0deg)";
    }else if (d === "ArrowRight" || d ==="d" && i%10===0) {
        i-=9;
        drawPacman();
        pacman.style.transform = "rotate(0deg)";
    }

    if (i === j) {
        drawFruit();
        points++;
        document.getElementById("points").innerHTML = "Points: " + points.toString().padStart(4, "0");

        if (points === 5) {
            addGhost()
        }else if (points === 15) {
            addGhost()
        }else if (points === 30) {
            addGhost()
        }

        if (speed>200) {
            speed-=2;
        }else {
            speed--;
        }
        clearInterval(myInterval);
        myInterval = setInterval(movement, speed);
    }

    if (k.includes(i)) {
        location.reload();
    }

    ghostMovement();
}myInterval = setInterval(movement, speed);

function ghostMovement() {
    clearGhosts();

    for (l=0;l<k.length;l++) {

        do {
            z = Math.floor(Math.random() * 4);
            nextPosition = k[l];
            if (z===0 && k[l]>10) {
                nextPosition-=10;
            }else if (z===1 && k[l]<90) {
                nextPosition+=10;
            }else if (z===2 && k[l]%10!==0) {
                nextPosition++;
            }else if (z===3 && k[l]%10!==1) {
                nextPosition--;
            }
        }while (nextPosition === j);

        k[l] = nextPosition;
    }

    drawGhost();
}
