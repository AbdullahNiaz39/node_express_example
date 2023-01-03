// import using destruction method
// const { sum, sub, divide, mul } = require("./export_node");
// console.log("Sum: ", sum(5, 5));
// console.log("Sub: ", sub(5, 2));
// console.log("Divide: ", divide(8, 2));
// console.log("mul ", mul(6, 3));

//simple imports
const calculator = require("../export_node");
console.log("Sum: ", calculator(7, 5));
console.log("Sub: ", calculator.sub(5, 2));
console.log("Divide: ", calculator.divide(8, 3));
console.log("mul: ", calculator.mul(6, 3));
