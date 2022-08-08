var player = document.getElementById("player");
var obstacle = document.getElementById("obstacle");

function HitDetected(){
    
}

function JumpPressed(){
    if (player.classList != "animate"){
        player.classList.add("animate");
    }
    setTimeout(function(){
        player.classList.remove("animate");
    },700);
        
}