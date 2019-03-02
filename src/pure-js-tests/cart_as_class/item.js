function item({ name, price, quantity = 1 }) {
  if (!name || !price) {
    throw Error("KeyError: Name or Price not there, check object");
  }

  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

item.prototype.updateQuantity = function(newQuantity) {
  this.quantity = newQuantity;
};

item.prototype.checkAvailability = function(cb) {
  setTimeout(() => cb(true), 1000);
};

module.exports = item;
