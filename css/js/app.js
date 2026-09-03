function browseGames() {
    document.getElementById("games").scrollIntoView({
        behavior: "smooth"
    });
}

function browseProducts() {
    window.location.href = "shop.html";
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


function filterProducts(category) {

    const products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        if (category === "all") {
            product.style.display = "block";
        }

        else if (product.classList.contains(category)) {
            product.style.display = "block";
        }

        else {
            product.style.display = "none";
        }

    });

}
