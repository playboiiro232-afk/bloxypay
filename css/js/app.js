// ============================
// BLOXYPAY CART
// ============================

function getCart() {

    return JSON.parse(
        localStorage.getItem("bloxypayCart")
    ) || [];

}


function saveCart(cart) {

    localStorage.setItem(
        "bloxypayCart",
        JSON.stringify(cart)
    );

}


// ============================
// ADD TO CART
// ============================

function addToCart(product, price) {

    const cart = getCart();

    const existingProduct = cart.find(
        item => item.name === product
    );

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: product,
            price: price,
            quantity: 1
        });

    }

    saveCart(cart);

    alert(product + " was added to your cart!");

}


// ============================
// DISPLAY CART
// ============================

function displayCart() {

    const cartContainer =
        document.getElementById("cart-items");

    const totalElement =
        document.getElementById("cart-total");

    if (!cartContainer) {
        return;
    }

    const cart = getCart();

    cartContainer.innerHTML = "";

    let total = 0;


    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h3>Your cart is empty</h3>
                    <p>Visit the shop to find products.</p>
                </div>
            </div>
        `;

        totalElement.textContent = "$0.00";

        return;
    }


    cart.forEach((item, index) => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        const itemElement =
            document.createElement("div");

        itemElement.className = "cart-item";


        itemElement.innerHTML = `

            <div class="cart-item-info">

                <h3>${item.name}</h3>

                <p>
                    $${item.price.toFixed(2)}
                    × ${item.quantity}
                </p>

            </div>


            <strong>
                $${itemTotal.toFixed(2)}
            </strong>


            <button
                class="remove-button"
                onclick="removeFromCart(${index})">

                Remove

            </button>

        `;


        cartContainer.appendChild(itemElement);

    });


    totalElement.textContent =
        "$" + total.toFixed(2);

}


// ============================
// REMOVE FROM CART
// ============================

function removeFromCart(index) {

    const cart = getCart();

    cart.splice(index, 1);

    saveCart(cart);

    displayCart();

}


// ============================
// CHECKOUT
// ============================

function goToCheckout() {

    const cart = getCart();

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }

    alert(
        "Checkout will be connected after we build the order system."
    );

}


// ============================
// NAVIGATION
// ============================

function browseGames() {

    const games =
        document.getElementById("games");

    if (games) {

        games.scrollIntoView({
            behavior: "smooth"
        });

    }

}


function browseProducts() {

    window.location.href =
        "shop.html";

}


function openCart() {

    window.location.href =
        "cart.html";

}


function selectGame(game) {

    alert(
        "You selected " + game + "!"
    );

}


function contactSupport() {

    alert(
        "Bloxypay Support will be available soon!"
    );

}


// ============================
// PRODUCT FILTER
// ============================

function filterProducts(category) {

    const products =
        document.querySelectorAll(".product");


    products.forEach(function(product) {

        if (category === "all") {

            product.style.display =
                "block";

        }

        else if (
            product.classList.contains(category)
        ) {

            product.style.display =
                "block";

        }

        else {

            product.style.display =
                "none";

        }

    });

}


// ============================
// PRODUCT PAGE
// ============================

function addCurrentProduct() {

    const name =
        document.getElementById(
            "product-name"
        ).textContent;

    const priceText =
        document.getElementById(
            "product-price"
        ).textContent;

    const price =
        parseFloat(
            priceText.replace("$", "")
        );

    addToCart(name, price);

}


// ============================
// LOAD CART
// ============================

displayCart();
// ============================
// BRAINROT SEARCH
// ============================

function searchBrainrots() {

    const searchInput =
        document.getElementById("brainrot-search");

    if (!searchInput) {
        return;
    }

    const search =
        searchInput.value.toLowerCase();

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const name =
            product.querySelector("h3");

        if (!name) {
            return;
        }

        const productName =
            name.textContent.toLowerCase();

        if (productName.includes(search)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}
// ============================
// INVENTORY STOCK FILTER
// ============================

function filterStock(type) {

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const stock =
            product.getAttribute("data-stock");

        if (type === "all") {

            product.style.display = "block";

        }

        else if (stock === type) {

            product.style.display = "block";

        }

        else {

            product.style.display = "none";

        }

    });

}


// ============================
// RESET INVENTORY
// ============================

function resetInventory() {

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        product.style.display = "block";

    });

    const search =
        document.getElementById("brainrot-search");

    if (search) {

        search.value = "";

    }

}
function goToCheckout() {

    const cart = getCart();

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }

    window.location.href =
        "checkout.html";

}
// ============================
// CHECKOUT DISPLAY
// ============================

function displayCheckout() {

    const container =
        document.getElementById("checkout-items");

    const totalElement =
        document.getElementById("checkout-total");

    if (!container || !totalElement) {
        return;
    }

    const cart = getCart();

    container.innerHTML = "";

    let total = 0;

    cart.forEach(function(item) {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;

        const element =
            document.createElement("div");

        element.className =
            "checkout-item";

        element.innerHTML = `

            <div>

                <strong>
                    ${item.name}
                </strong>

                <p>
                    Quantity: ${item.quantity}
                </p>

            </div>

            <strong>
                $${itemTotal.toFixed(2)}
            </strong>

        `;

        container.appendChild(element);

    });

    totalElement.textContent =
        "$" + total.toFixed(2);

}


// ============================
// PAYMENT PLACEHOLDER
// ============================

async function startPayment() {

    const email =
        document.getElementById(
            "customer-email"
        ).value.trim();

    if (!email) {

        alert("Please enter your email first.");

        return;

    }

    const cart = getCart();

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }

    try {

        const response = await fetch(
            "/api/create-order.js",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    items: cart
                })

            }
        );

        const result = await response.json();

        if (!response.ok) {

            throw new Error(
                result.error || "Order creation failed."
            );

        }

        alert(
            "Order created!\n\nOrder ID: " +
            result.orderId +
            "\n\nStatus: " +
            result.status
        );

        console.log("Bloxypay Order:", result);

    } catch (error) {

        console.error(error);

        alert(
            "Something went wrong creating your order."
        );

    }

}
