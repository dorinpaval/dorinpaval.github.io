const fs = require("fs");
const content = "You did it Paval";
fs.writeFile("myfile.txt", content, (err) => {
if (err) {
console.error(err);
return;
}
//file written successfully
});