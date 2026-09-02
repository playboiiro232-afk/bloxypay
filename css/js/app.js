function browseGames() {
    document.querySelector(".games").scrollIntoView({
        behavior: "smooth"
    });
}

function selectGame(game) {
    alert("You selected " + game + "!");
}
