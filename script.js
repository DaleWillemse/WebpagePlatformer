var player = document.getElementById("player");
var obstacle = document.getElementById("obstacle");
var scoreCounter = document.getElementById("score");
var score = 0;

var obstacleHit = setInterval(function () {
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleLeft < 151 && obstacleLeft > 0 && playerTop >= 400) {
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        alert("You lost");
    }
    else{
        score++;
        scoreCounter.textContent(score)
    }
}, 10);

document.addEventListener("keypress", function (event) {
    if (event.keyCode == 32) {
        if (player.classList != "animate") {
            player.classList.add("animate");

            setTimeout(function () {
                player.classList.remove("animate");
            }, 700);
        }
    }
});
