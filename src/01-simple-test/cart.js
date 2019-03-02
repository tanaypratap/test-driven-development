module.exports = items => {
  return items.reduce((total, item) => {
    return total + item.price * (item.quantity || 1);
  }, 0);
};
