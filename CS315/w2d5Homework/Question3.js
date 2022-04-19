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



//   GET THE NAMES    Question 1
function getNames(node) {
    if (node.descendents == [])
        return node.value;
    else {
        let result = [];
        result = result.concat(node.value);
        for (let elem of node.descendents)
            result = result.concat(getNames(elem));

        return result;
    }
}




// RETURN TRUE if a specific name is a node   Question 2
function searchName(node, str) {
    if (node.descendents == [] && node.value == str)
        return true;
    else {
        if (node.value == str)
            return true;
        else {
            for (let elem of node.descendents) {
                console.log("For loop", elem.value);
                searchName(elem, str);
            }
        }
        return false;
    }
}

//console.log(searchName(abe,"maggie"));


//  GET the subTREE or NULL    Question 3
function getSubTree(node, val) {
    if (node.descendents == [] && node.value == val)
        return node;
    else {
        let result = null;
        if (node.value == val) {
            console.log("Node true")
            return node;
        }
        else {
            for (let elem of node.descendents) {
                console.log("For loop", elem.value);
                result = getSubTree(elem, val);
                if (result != null)
                    break;
            }
        }
        return result;
    }
}

//console.log(getSubTree(abe,"Homer"));


// Create a new CONSTRUCTOR ListNode
function listNode(value) {
    this.value = value;
    this.next = null;
}
const maggieList = new listNode("Maggie");
const lisaList = new listNode("Lisa");
lisaList.next = maggieList;
const bartList = new listNode("Bart");
bartList.next = lisaList;
const homerList = new listNode("Homer");
homerList.next = bartList;
const abeList = new listNode("Abe");
abeList.next = homerList;
//console.log("the linked list is ", abeList);




// return the node that contains the target value or null 
function findListNode(list, str) {
    if (list.next != null && list.value == str)
        return list;
    else {
        let result = null;
        if (list.value == str) {
            //console.log("Node true")
            result = list;
        }
        else {
            result = findListNode(list.next, str);
        }
        return result;
    }

}
//console.log(findListNode(abeList,"Bart"))



// TreeModifier - recursion function that will get a callback fct and a tree as parameters
//QUESTION 6
function treeModifier(node, fct) {
    if (node.descendents == []) {
        let copy = fct(node.value);
        node=copy;
        //console.log("new val is", node.value);
        
    }
    else {
        let newVal= fct(node.value);
        node.value=newVal;
        for (let elem of node.descendents) {
            let copy = treeModifier(elem, fct);
            elem=copy;
            //console.log("New val is", elem.value);
            
        }
    }
    return node;
}

function allCaps(str) {
    let newVal = str.toUpperCase();
    //console.log("All caps fct", newVal);
    return newVal;
}



function addStars(str){
    let result="***"+str+"***";
   return result;
}


function reverseArr(arr){
    let n=arr.length;
    let newArr=arr.split("");
    for(let i=0;i<n/2;i++){
        let copy=newArr[i];
        newArr[i]=newArr[n-1-i];
        newArr[n-1-i]=copy;
    }
    arr=newArr.join("");
    //console.log(arr);
    return arr;
}

//everseArr("blasarc");
console.log(treeModifier(homer, allCaps));




//   GET THE NAMES into array   QUESTION 7
function getNamesArr(node) {
    if (node.descendents == [])
        return node.value;
    else {
        let result = [];
        result = result.concat(node.value);
        for (let elem of node.descendents)
            result = result.concat(getNames(elem));

        return result;
    }
}