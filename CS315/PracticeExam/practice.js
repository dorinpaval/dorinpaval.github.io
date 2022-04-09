"use strict";

let srcArr=["oak", "willow","chestnut"];
let destArr=["maple"];
let srcSelect;
let destSelect;


window.onload= function(){
    srcSelect=document.getElementById("sourceId");
    destSelect=document.getElementById("destId");
    let addBtn=document.getElementById("addBtn");
    addBtn.onclick=add;
    let fromSrc=document.getElementById("toDest");
    fromSrc.onclick=toDest;
    let fromDest=document.getElementById("toSource");
    fromDest.onclick=toSource;
    let Srt=document.getElementById("sortBtn");
    Srt.onclick=sorting;
}

function add(){
    let input=document.getElementById("textbox");
    srcArr.push(input.value);
    //console.log(srcArr);
    createSelect(srcArr,srcSelect);
}

function createSelect(arr,theBox){
    theBox.innerHTML="";
    //console.log(theBox);
    for(let elem of arr){
        let newOpt=document.createElement("option");
        newOpt.innerHTML=elem;
        theBox.append(newOpt);
    }
}

function toDest(){
    let selected=[];
    for(let opt of srcSelect.options)
        if(opt.selected){
            selected.push(opt);
            for(let i=0;i<srcArr.length;i++)
                if(srcArr[i]==opt.innerHTML){
                    destArr.push(opt.innerHTML)
                    srcArr.splice(i,1);
                }
        }
    for(let option of selected){
        option.outerHTML="";
        destSelect.append(option);
    }
    
}

function toSource(){
    let selected=[];
    for(let opt of destSelect.options)
        if(opt.selected){
            selected.push(opt);
            for(let i=0;i<destArr.length;i++)
                if(destArr[i]==opt.innerHTML){
                    destArr.splice(i,1);
                    srcArr.push(opt.innerHTML);
                }

        }
    for(let option of selected){
        option.outerHTML="";
        srcSelect.append(option);
    }
}


function sorting(){
    console.log(srcArr);
    console.log(destArr);
    destArr.sort();
    createSelect(destArr,destSelect);
    srcArr.sort();
    createSelect(srcArr,srcSelect);
}















// function add(){
//     let plant=document.getElementById("textbox").value;
//     let sourceSelect=document.getElementById("sourceId");
//     let newPl=document.createElement("option");
//     newPl.innerHTML=plant;
//     //console.log(sourceSelect);
//     //sourceSelect.innerHTML += "<option>"+plant+"</option>";
//     sourceSelect.append(newPl);
//     srcArr.push(plant);
// }

// function toDest(){
//     let arr=[]
//     let sourceSelect=document.getElementById("sourceId");
//     let destSelect=document.getElementById("destId");
//     for(let opt of sourceSelect.options)
//     {
//         if(opt.selected)
//         {
//             arr.push(opt);
//             // let newOpt=document.createElement("option");
//             // newOpt.innerHTML=opt.value;
//             destSelect.append(opt);
//             opt.remove();
//             for(let i=0;i<srcArr.length;i++)
//                 if(srcArr[i]==="opt")
//                 {
//                     srcArr.splice(i,1);
//                 }
//         }
//     }
// }

// function toSource(){
//     let sourceSelect=document.getElementById("sourceId");
//     let destSelect=document.getElementById("destId");
//     for(let opt of destSelect.options)
//     {
//         if(opt.selected)
//         {
//             // let newOpt=document.createElement("option");
//             // newOpt.innerHTML=opt.value;
//             sourceSelect.append(opt);
//             opt.remove();
//             for(let i=0;i<destArr.length;i++)
//             if(destArr[i]===opt)
//             {
//                 destArr.splice(i,1);
//             }
//         }
//     }
// }

// function sorting(){
//     let sourceSelect=document.getElementById("sourceId");
//     let destSelect=document.getElementById("destId");
    
//     for(let i=0;i<sourceSelect.options.length-1;i++)
//         sor(sourceSelect.options[i],sourceSelect.options[i+1])
//     //sourceSelect.options.sort( function (a,b) { return a.value-b.value});
//     //destSelect.options.sort( (a,b) => a.value-b.value);
//     console.log(sourceSelect);
// }

// function sor(a,b)
// {   
//     const nameA = a.value.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.value.toUpperCase(); // ignore upper and lowercase
//     console.log("A,b are", nameA,nameB);
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
//     return 0;
    
// }