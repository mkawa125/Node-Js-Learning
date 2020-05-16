/** 
 * Object destructuring 
 * Extracting some function from helper class
 * */

const { sum } = require('./helpers')

// Core module comes with node.js
// const http = require('http')

// const server = http.createServer((req , res) =>
// {
//     res.end('Hello from mkawa')
// });
// server.listen(3000)

// const express = require('express')

// const app = express();

// app.get('/', function (req , res)
// {
//     res.send('This is the custom sever from express')
// });

// app.listen(3000);


const fs = require('fs');

const fileName = "target.txt";

const data = fs.readFileSync(fileName)
console.log(data.toString())

// fs.readFile(fileName, (err, data) =>
// {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// });

console.log('Node js is asynchronous programming ... ?')
