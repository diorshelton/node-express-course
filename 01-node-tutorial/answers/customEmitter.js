const EventEmitter = require('events');
const { readFileSync } = require('fs');

const customEmitter = new EventEmitter();

customEmitter.on('start', (color, direction) => {
  console.log('data received: ', `${color}, ${direction}`);
});

customEmitter.emit('start', 'red', 'left')

customEmitter.on('count', (charType) => {
  let fileData = readFileSync('tempt.txt', {encoding:'utf8'})
  let rawArray = fileData.split('');
  let spaces = 0;
  let newLineChar = 0;
  let char = rawArray.length - spaces;

  for ( let string in rawArray) {
    if (rawArray[string] == '\n') {
      newLineChar ++
    }
    if (rawArray[string] == ' ') {
      spaces ++
    }
  }

  if (charType === "new lines") {
    return console.log(`New Lines: ${newLineChar}`)
  } 
  if (charType === "characters") {
    return console.log(`Characters: ${char}`) 
  }
  if (charType === "spaces") {
    return console.log(`Spaces: ${spaces}`)
  } else {
    console.log(`New Lines: ${newLineChar}, Characters: ${char}, Spaces: ${spaces},`)
  }
})

customEmitter.emit('count', 'spaces')
