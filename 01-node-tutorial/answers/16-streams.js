const { count } = require('console');
const { createReadStream } = require('fs')

const stream = createReadStream("../content/big.txt",{encoding:"utf-8", highWaterMark: 10000})

let counter = 0;

stream.on('data', (result) => {
  counter ++;
  console.log({result, counter});
})
stream.on('error', (err) => {
  console.log(err)
})