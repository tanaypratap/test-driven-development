/**
 * Implementation of a cart functionality
 * All items are added/deleted as per functional programming paradigm
 */
function cartHandler() {
  this.items = [];
}

cartHandler.prototype.addItem = function(item) {
  this.items = this.items.concat([item]);
};

cartHandler.prototype.getItems = function() {
  return this.items;
};

cartHandler.prototype.removeItem = function(delItem) {
  this.items = this.items.filter(item => item !== delItem);
};

module.exports = cartHandler;
