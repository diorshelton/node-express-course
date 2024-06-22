const EventEmitter = require('events');
const { readFileSync } = require('fs');

const customEmitter = new EventEmitter();

// customEmitter.on('hello', (color, direction) => {
//   console.log('data received: ', `${color}, ${direction}`);
// });

// customEmitter.emit('hello', 'red', 'left')



let fileData = readFileSync('tempt.txt', {encoding:'utf8'})

const countCharacters = (data, spaces) => {
  let rawArray = data.split('');
  let spaces = 0;
  let newLineChar = 0;

  for ( let string in rawArray) {
    if (rawArray[string] == '\n') {
      newLineChar ++
    }
    if (rawArray[string] == ' ') {
      spaces ++
    }
  } 
  return {"New Line Chars:": newLineChar, "Spaces:": spaces};
}

customEmitter.on('count', () => {
  console.log(countCharacters(fileData));
})

customEmitter.emit('count')
// const emitter = new EventEmitter();
