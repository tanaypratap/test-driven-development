const cart = require("./cart");

// Clear the screen for new test runs
console.clear();

const items = [
  { item: "clock", price: 50 },
  { item: "bed", price: 5000 },
  { item: "pencil", price: 20 }
];

/**
 * 1. Should add all values in cart
 */
if (cart(items) == 5070) {
  console.log("Test passed");
} else {
  throw Error("Test Failed: Cart Summation wrong");
}

/**
 * 2. Should take care of quantity
 */

const itemsWithQuanity = items.concat([
  { item: "spoon", price: 2, quantity: 20 }
]);
if (cart(itemsWithQuanity) == 5110) {
  console.log("Test Passed");
} else {
  throw Error("Test Failed: Quantity not taken care");
}
