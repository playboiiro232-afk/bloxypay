function browseGames() {
    document.getElementById("games").scrollIntoView({
        behavior: "smooth"
    });
}

function browseProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}

function selectGame(game) {
    alert("You selected " + game + "!");
}

function addToCart(product, price) {
    alert(product + " was added to your cart for $" + price.toFixed(2));
}

function openCart() {
    alert("Your cart will be available soon!");
}

function contactSupport() {
    alert("Bloxypay Support will be available soon!");
}
