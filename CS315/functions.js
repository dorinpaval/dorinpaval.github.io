"use strict"
window.onload = function (){
    let buttons = document.getElementById("buttonId");
    buttons.onclick = add;
    let but1=document.getElementById("button1");
    but1.onclick=addRow;
}

    function add(){
        let val= document.getElementById("input");
        let textarea =document.getElementById("output");
        textarea.innerHTML += (val.value + "\n");
    } 
    let id=1;
    function addRow(){
       
        let myList=document.getElementById("unList");
        let newElem=document.createElement("li");
        newElem.innerHTML="New number"+id;
        myList.append(newElem);
        id++;
    }

    function removeRow(){
        let myList=document.getElementById("unList");
        myList.lastElementChild.remove();
        console.log(myList);
        id--;
    }