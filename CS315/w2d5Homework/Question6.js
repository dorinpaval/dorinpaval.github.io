"use strict";

function TreeNode(value) {
    this.value = value;
    this.descendents = [];
}


// create nodes with values    Abe->Homer->[Bart Lisa Maggie]
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');


// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);



// TreeModifier - recursion function that will get a callback fct and a tree as parameters
//QUESTION 6
function treeModifier(node, fct) {
    if (node.descendents == []) {
        let copy = fct(node.value);
        //node.value=copy;
        //console.log("new val is", node.value);
        return copy;
    }
    else {
        let newVal= fct(node.value);
        node.value=newVal;
        for (let elem of node.descendents) {
            let copy = treeModifier(elem, fct);
            elem.value=copy;
            console.log("New val is", elem.value);
            
        }
    }
    //console.log(JSON.stringify(node));
    return node;
}

//Callback fct
function allCaps(str) {
    let newVal = str.toUpperCase();
    //console.log("All caps fct", newVal);
    return newVal;
}


//Callback fct
function addStars(str){
    let result="***"+str+"***";
   return result;
}

//Callback fct
function reverseArr(arr){
    let n=arr.length;
    let copyArr=[];
    for(let i=0;i<n;i++)
        copyArr[i]=arr[n-1-i];
    arr=copyArr.join(""); 
    return arr;
}


console.log(reverseArr("blaarg"));
console.log(allCaps("blaarg"));
console.log(addStars("blaarg"));