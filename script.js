var player = document.getElementById("player");
var obstacleOne = document.getElementById("obstacleOne");
var obstacleTwo = document.getElementById("obstacleTwo");
var score = document.getElementById("score");
var points = 0;

document.addEventListener("keypress", e => {
    if (e.keyCode == 32) {
        if (!player.classList.contains("animate")) {
            player.classList.add("animate");
            setTimeout(() => {
                player.classList.remove("animate");
            }, 900)
        }
    }
});

setInterval(() => {
    let obstacleOnePos = obstacleOne.getBoundingClientRect();
    let obstacleTwoPos = obstacleTwo.getBoundingClientRect();
    let randomHeight = getRandomInt(5);

    if (parseInt(obstacleOnePos.left) <= 0) {
        switch (randomHeight) {
            case 1:
                obstacleOne.style.top = "250px";
                break;
            case 2:
                obstacleOne.style.top = "345px";
                break;
            default:
                obstacleOne.style.top = "445px;"
                break;
        }
    }
    if (parseInt(obstacleTwoPos.left) <= 0) {
        switch (randomHeight) {
            case 1:
                obstacleTwo.style.top = "345px";
                break;
            case 2:
                obstacleTwo.style.top = "250px";
                break;
            default:
                obstacleTwo.style.top = "445px";
                break;
        }
    }

}, 100)

setInterval(() => {
    points++;
    score.innerHTML = points;
}, 1000)

function getRandomInt(max) {
    return (Math.floor(Math.random() * max));
}