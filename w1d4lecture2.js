"use strict";

let exp = ["{", "{", "}", "}"];
let balanced = [];
let okk = 1;
for (let sign of exp) {
    if (sign === "{"){
        balanced.push("{");
    }
    else if (sign === "}" && balanced.length > 0) {
        balanced.pop();
    }
        else
            okk=0;
}

if (okk === 1 && balanced.length===0)
    console.log("Balanced");
else
    console.log("Not Balanced");''