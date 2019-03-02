const Item = require("./item");

// Declare the suite
console.log("\n ---- ITEM LEVEL TESTS -----");

/**
 * 1. Item is available
 */
const item = new Item({ name: "brush", price: 5, quantity: 10 });
if (item instanceof Item) {
  console.log("Test Passed: Instance of Item");
} else {
  throw Error("Item class unavailable");
}

/**
 * 2. Item should have name and price
 */

try {
  const errorItem = new Item({ randomKey: 1 });
} catch (error) {
  if (error.message.indexOf("KeyError") != -1) {
    console.log("Test Passed: Checks for right keys");
  }
}

/**
 * 3. Item should have values provided
 */

if (item.name === "brush" && item.price === 5 && item.quantity === 10) {
  console.log("Test Passed: Values are being assigned");
} else {
  throw Error("Item assignment is not proper");
}

/**
 * 4. Change quantity when new quantity is provided
 */

item.updateQuantity(11);
if (item.quantity === 11) {
  console.log("Test Passed: Updates quantity with new value");
} else throw Error("Update quantity not working");
