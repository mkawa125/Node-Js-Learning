/** 
 * Object destructuring 
 * Extracting some function from helper class
 * */

const { sum } = require('./helpers')

// Core module comes with node.js
const http = require('http')

const server = http.createServer((req , res) =>
{
    res.end('Hello from mkawa updated')
});

server.listen(3000);

const total = sum(5, 6);
console.log(total);