// const app = require('./app')

// console.log("sub");
// var a = 20;
// var b = 30;
// var c = 40;
// console.warn(a + b + c);
// console.log(app.z)
// console.log(app)
// const arr=[2,4,5,6,8,9,3,4,5,3,4,3,3]
// arr.filter((item)=>{
//     console.log(item)
// })

// const res= arr.filter((item)=>{
//     return item >=4
// })

// console.log(res);

// const fs = require("fs");

// console.log("hello everyone");

// fs.writeFileSync("hello.txt", "hello everyone");
// console.log(__dirname);

// console.log(__filename)

// const gs = require('fs').writeFileSync
// gs("abc.txt","abcxyz")

// const http = require('http');
// http.createServer((req,resp)=>{
//     resp.write("<h1>Heloo this is the response !!</h1>")
//     resp.end();
// }).listen(4500);

// const http = require('http');
// function dataControl(req, resp) {
//   resp.write("<h1>Heloo,This is the new response</h1>");
//   resp.end();
// }
// http.createServer(dataControl).listen(1300);


const colors = require('colors')
console.log('hello'.red)
console.log('hello'.green)
console.log('hello'.bgBlue)