"use strict"
window.onload = function (){
    let buttons = document.getElementById("buttonId");
    buttons.onclick = add;
}

    function add(){
        let val= document.getElementById("input");
        let textarea =document.getElementById("output");
        textarea.innerHTML += (val.value + "\n");
    } 