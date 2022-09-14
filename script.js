var player = document.getElementById("player");
var obstacleOne = document.getElementById("obstacleOne");
var obstacleTwo = document.getElementById("obstacleTwo");
var score = document.getElementById("score");
var points = 0;

// score counter
setInterval(() => {
    points++;
    score.innerHTML = points;
}, 1000)

// player movement
document.addEventListener("keypress", e => {
    if (e.keyCode == 32 || e.keyCode == 119) {
        if (!player.classList.contains("animate")) {
            player.classList.add("animate");
            setTimeout(() => {
                player.classList.remove("animate");
            }, 900)
        }
    }
});

document.onkeydown = function (e) {
    if (e.keyCode == 68) {
        player.style.left = `${player.offsetLeft + 30}px`;
    }
    else if (e.keyCode == 65) {
        player.style.left = `${player.offsetLeft - 30}px`;
    }
}

// collision detection
setInterval(() => {
    let obstacleOnePos = obstacleOne.getBoundingClientRect();
    let obstacleTwoPos = obstacleTwo.getBoundingClientRect();
    let randomHeight = getRandomInt(5);
    let playerPos = player.getBoundingClientRect();
    if (playerPos.top < obstacleOnePos.top + obstacleOnePos.height &&
        playerPos.top + playerPos.height > obstacleOnePos.top &&
        playerPos.left < obstacleOnePos.left + obstacleOnePos.width &&
        playerPos.left + playerPos.width > obstacleOnePos.left) {
        //alert(`Game Over. \nScore: ${points}`);
        //location.reload();
        points = 0;
    }
    if (playerPos.top < obstacleTwoPos.top + obstacleTwoPos.height &&
        playerPos.top + playerPos.height > obstacleTwoPos.top &&
        playerPos.left < obstacleTwoPos.left + obstacleTwoPos.width &&
        playerPos.left + playerPos.width > obstacleTwoPos.left) {
        //alert(`Game Over. \nScore: ${points}`);
        //location.reload();
        points = 0;

    }
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
}, 50);

function getRandomInt(max) {
    return (Math.floor(Math.random() * max));
}
