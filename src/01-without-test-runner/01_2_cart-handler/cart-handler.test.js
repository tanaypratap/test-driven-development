const CartHandler = require("./cart-handler");
const Item = require("./item");

// Declare the suite
console.log("\n ---- CART HANDLER TESTS -----");

/**
 * 1. CartHandler should be present
 */
const cartHandler = new CartHandler();
if (cartHandler instanceof CartHandler) {
  console.log("Test Passed: Instance of CartHandler");
} else {
  throw Error("CartHandler not a class");
}

/**
 * 2. Add item to cart
 */
const item = new Item({ name: "toothbrush", price: 2, quantity: 10 });
cartHandler.addItem(item);
if (cartHandler.getItems().indexOf(item) != -1) {
  console.log("Test Passed: Item found in cart");
} else {
  throw Error("Item not getting added");
}

/**
 * 3. Remove item from cart
 */
const itemToBeRemoved = new Item({ name: "blanket", price: 50, quantity: 2 });
cartHandler.addItem(itemToBeRemoved);
cartHandler.removeItem(itemToBeRemoved);
if (cartHandler.getItems().indexOf(itemToBeRemoved) === -1) {
  console.log("Test Passed: Item removed from cart");
} else {
  throw Error("Item not getting removed");
}
