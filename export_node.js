//directly exports
module.exports = function (a, b) {
  return a + b;
};

module.exports.sub = (a, b) => {
  return a - b;
};

module.exports.divide = (a, b) => {
  return Math.floor(a / b);
};

module.exports.mul = (a, b) => {
  return a * b;
};

//indirectly Exports
//module.exports = { sum, sub, divide, mul };
