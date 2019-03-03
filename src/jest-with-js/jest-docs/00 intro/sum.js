module.exports = function sum(...args) {
  return args.reduce((sum, num) => sum + num, 0);
};
