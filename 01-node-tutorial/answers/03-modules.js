const names = require("./04-names.js");
const welcomeMsg = require("./05-utils.js");
const {fruits, vegetable} = require("./06-alternative-flavor.js");

// 3a. 04-names.js should export multiple values in an object that you will require in 03-module.js.
console.log(names.dior)

// (3b). 05-utils.js should export a single value, which is a function you will call in 03-modules.js.
console.log(welcomeMsg(names.dior))

// (3c). 06-alternative-flavor.js should export multiple values in the module.exports object, but it should use the alternative approach, adding each value one at a time. The exported values from each should be used in 03-modules.js, logging results to the console so that you know it is working.
console.log(fruits, vegetable)
  
// (3d). 07-mind-grenade.js may not export anything, but it should contain a function that logs something to the console. You should then call that function within the code of 07-mind-grenade.js. This is to demonstrate that when a module is loaded with a require statement, anything in the mainline code of the loaded module runs.