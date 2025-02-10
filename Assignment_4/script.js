let cart = [];

const products = {
  mobiles: [
    { name: "iPhone 14", price: 79999, image: "iphone14.jpg" },
    { name: "Samsung Z Fold 3", price: 154999, image: "samsungfold.jpg" },
    { name: "OnePlus Nord 2", price: 29999, image: "oneplusnord.jpg" },
    { name: "Xiaomi Redmi Note 11", price: 21999, image: "redmi11.jpg" },
    { name: "Realme Narzo 50", price: 18999, image: "realmenarzo.jpg" },
    { name: "Google Pixel 7", price: 69999, image: "pixel7.jpg" },
    { name: "Vivo Y21", price: 14999, image: "vivoy21.jpg" },
    { name: "Oppo A74", price: 17999, image: "oppoa74.jpg" },
    { name: "Asus Zenfone 8", price: 59999, image: "zenfone8.jpg" },
    { name: "Motorola Edge 20", price: 32999, image: "motoedge20.jpg" }
  ],
  laptops: [
    { name: "Apple MacBook Pro 16", price: 199999, image: "macbookpro16.jpg" },
    { name: "Dell Inspiron 15", price: 55999, image: "dellinspiron.jpg" },
    { name: "HP Envy 14", price: 74999, image: "hpenvy.jpg" },
    { name: "Lenovo Legion 5", price: 87999, image: "legion5.jpg" },
    { name: "ASUS ROG Strix G15", price: 119999, image: "rogstrix.jpg" },
    { name: "Acer Predator Helios 300", price: 109999, image: "predator.jpg" },
    { name: "Microsoft Surface Pro 8", price: 99999, image: "surfacepro.jpg" },
    { name: "Razer Blade Stealth 13", price: 139999, image: "razerstealth.jpg" },
    { name: "MSI GF65 Thin", price: 89999, image: "msigf65.jpg" },
    { name: "LG UltraPC", price: 78999, image: "lgultrapc.jpg" }

  ],
  accessories: [
    { name: "Wireless Charger", price: 3499, image: "wirelesscharger.jpg" },
    { name: "Gaming Headset", price: 8999, image: "gamingheadset.jpg" },
    { name: "Ring Light", price: 4999, image: "ringlight.jpg" },
    { name: "Webcam", price: 6999, image: "webcam.jpg" },
    { name: "Laptop Cooling Pad", price: 3999, image: "coolingpad.jpg" },
    { name: "Microphone", price: 5999, image: "microphone.jpg" },
    { name: "Car Phone Holder", price: 1999, image: "carholder.jpg" },
    { name: "Portable Projector", price: 15999, image: "projector.jpg" },
    { name: "Fitness Tracker", price: 9999, image: "fitnesstracker.jpg" },
    { name: "Smart Home Hub", price: 12999, image: "smarthomehub.jpg" }
  ]
};
// Show selected category
function showCategory(category) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products[category].forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
    `;
    productList.appendChild(productElement);
  });
}

// Add to cart
function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
  const cartItems = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";
  let cartTotal = 0;

  cart.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `
      <p>${item.name} - ₹${item.price} x ${item.quantity}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItems.appendChild(itemElement);
    cartTotal += item.price * item.quantity;
  });

  cartTotalElement.textContent = cartTotal.toFixed(2);
  cartCount.textContent = cart.length;
}

// Remove item
function removeItem(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

// Empty cart
document.getElementById("empty-cart").addEventListener("click", () => {
  cart = [];
  updateCartDisplay();
});

// Toggle cart visibility
document.getElementById("cart-icon").addEventListener("click", () => {
  document.getElementById("cart").classList.toggle("active");
});
