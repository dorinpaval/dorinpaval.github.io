"use strict";

window.onload= function(){
   document.getElementById("myBtn1").addEventListener("click",fetchEmployees);
    fetchEmployees();
}

async function fetchEmployees(){
    let result= await fetch('https://randomuser.me/api/?results=5');
    let emp= await result.json();
    renderEmployees(emp);
}

function renderEmployees(arr){
    //console.log("dada122", arr.results.length )
    for( let i =0;i <arr.results.length;i++)
    {
        let obj=arr.results[i];
        console.log(i," is ", obj);
        let name=obj.name.title +" "+obj.name.first+" "+obj.name.last;
        document.getElementById("img"+i).src=obj.picture.large;
        document.getElementById("name"+i).textContent=name;
        document.getElementById("gender"+i).textContent=obj.gender;
        document.getElementById("email"+i).textContent=obj.email;
    }
}