/** 
 * Object destructuring 
 * Extracting some function from helper class
 * */

// const helpers = require('./helpers')

const { sum } = require('./helpers')


const total = sum(5, 6);
console.log(total);