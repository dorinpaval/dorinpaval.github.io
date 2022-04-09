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

function getNameValue(node){
    if (node.children==null) 
        {
            // let obj={};
            // obj[node.name]= node.value;
            // return obj;
            
            console.log(node.name ,":",node.value);
        }

    //let result = [];
    // let obj={};
    // obj[node.name]= node.value;
    // result=result.concat(obj);
    else{    
    console.log(node.name ,":",node.value);
    for (let child of node.children) {
        getNameValue(child);
    }
}

}

getNameValue(node1);
