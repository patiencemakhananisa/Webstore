let cartCount = 0;
let cartItems = [];

function addToCart(product, price) {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  cartItems.push({ product, price });
  console.log("Cart:", cartItems);
}

let cartCount = 0;
let cartItems = [];

function addToCart(product, price) {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  cartItems.push({ product, price });
  console.log("Cart Items:", cartItems);
}

/* Bible Verses */
// Cart functionality
let cartCount = 0;
let cartItems = [];

function addToCart(product, price) {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  cartItems.push({ product, price });
  console.log("Cart Items:", cartItems);
}

// Verse of the Day functionality
const verses = [
  `"The Lord is my shepherd; I shall not want." - Psalm 23:1`,
  `"I can do all things through Christ who strengthens me." - Philippians 4:13`,
  `"For I know the plans I have for you," declares the Lord. - Jeremiah 29:11`,
  `"Be strong and courageous. Do not be afraid; do not be discouraged." - Joshua 1:9`,
  `"Trust in the Lord with all your heart and lean not on your own understanding." - Proverbs 3:5`
];

function showRandomVerse() {
  const verseElement = document.getElementById("verse");
  const randomIndex = Math.floor(Math.random() * verses.length);
  verseElement.textContent = verses[randomIndex];
}

// Run verse function on page load
document.addEventListener("DOMContentLoaded", showRandomVerse);

let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

document.getElementById("cart-count").textContent = cartCount;

function addToCart(product, price) {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;

  cartItems.push({ product, price });

  // Save to localStorage
  localStorage.setItem("cartCount", cartCount);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  console.log("Cart Items:", cartItems);
}

// Retrieve cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartItemsDiv = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function displayCart() {
  cartItemsDiv.innerHTML = "";

  if (cartItems.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "Total: R0";
    return;
  }

  let total = 0;

  cartItems.forEach((item, index) => {
    total += item.price;
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <p>${item.product} - R${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItemsDiv.appendChild(itemDiv);
  });

  cartTotal.textContent = `Total: R${total}`;
}

function removeItem(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  displayCart();
}

// Display on page load
displayCart();