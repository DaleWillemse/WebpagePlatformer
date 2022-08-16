var player = document.getElementById("player");
var obstacle = document.getElementById("obstacle");

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
