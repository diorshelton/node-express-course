// 10-fs-sync.js: This should load writeFileSync and readFileSync functions from the fs module. Then you will use writeFileSync to write 3 lines to a file, ./temporary/fileA.txt, using the "append" flag for each line after the first one. Then use readFileSync to read the file, and log the contents to the console. Be sure you create the file in the temporary directory. That will ensure that it isn’t pushed to Github when you submit your answers (because that file has been added to the .gitignore file for you already which tells git not to look at those files).

const { readFileSync, writeFileSync } = require("fs");
const path = "./temporary/fileA.txt";

const data = "This is the first line that will be added to the file  \n";
const dataTwo = "This is the second line that will be added to the file  \n";
const dataThree = "This is the third line that will be added to the file";

writeFileSync(path, data, {encoding: "utf8"} );
writeFileSync(path, dataTwo, {encoding: "utf8", flag:"a"} );
writeFileSync(path, dataThree, {encoding: "utf8", flag:"a"} );

console.log(readFileSync(path, {encoding:"utf8"}))