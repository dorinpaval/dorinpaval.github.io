"use strict";

let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};

let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
};


function nameValue(){
    for(let elem of arr){
        console.log(elem.name,":",elem.value);
    }
}

let arr=[node1,node2,node3,node4,node5]
nameValue();
