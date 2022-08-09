var player = document.getElementById("player");
var obstacle = document.getElementById("obstacle");

var obstacleHit = setInterval(function(){
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleLeft < 151 && obstacleLeft > 0 && playerTop >= 400){
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        alert("You lost");
    }
},10);

function HitDetected(){
    
}

function JumpPressed(){
    if (player.classList != "animate"){
        player.classList.add("animate");
        
        setTimeout(function(){
            player.classList.remove("animate");
        },700);
    }
        
}