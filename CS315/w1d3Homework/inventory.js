"use strict";

let idVal=5; // idVal is global variaable used for rows' id (we have 4 rows from static table)
let tableArr=[
    {id:1 , name:"Computers", category:"Digital", quantity:25 , rating:3} ,
    {id:2 , name:"Magazines", category:"Conveniences", quantity:1000, rating:5 },
    {id:3 , name:"Books", category:"Education", quantity:20, rating:3 },
    {id:4 , name:"Houses", category:"Real Estate", quantity:2, rating:3 }
]
window.onload=function(){
    let sortTable=document.getElementById("sortId");
    sortTable.onchange=sorting;
    let filterTable=document.getElementById("filterId");
    filterTable.onchange=filtering;
    let initTable=document.getElementsByClassName("button1")[1];
    initTable.onclick=initialise;
    let addTable=document.getElementsByClassName("button1")[0];
    addTable.onclick=addRow;
    //console.log("Add is",addTable);
}

function sorting(){
    //console.log(this.options);
    for(let opt of this.options)
    {
        //console.log(opt.selected);
        if(opt.selected)
        {   
            if(opt.value==="byName")
                {
                    
                    sortByName(); 
                    createTable(tableArr);
                    break;
                }
            if(opt.value==="byCategory")
                {
                    //console.log("by Category selected", opt.value);
                    sortByCategory();
                    createTable(tableArr);
                    break;
                }
            if(opt.value==="byQuantity")
                {
                    //console.log("by quantity selected", opt.value);
                    sortByQuantity();
                    createTable(tableArr);
                    break;
                }
            if(opt.value==="byRating")
                {
                    sortByRating();
                    createTable(tableArr);
                    break;
                } 
    }
    }
}


function sortByName(){
    tableArr.sort(function(a,b){ 
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}

function sortByCategory(){
    
    tableArr.sort(function(a,b){
        const nameA = a.category.toUpperCase(); // ignore upper and lowercase
        const nameB = b.category.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;

        });
}

function sortByQuantity(){
    tableArr.sort(function(a,b){
        const nameA = Number(a.quantity); // ignore upper and lowercase
        const nameB = Number(b.quantity); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
        return 1;
        }
        return 0;
});
}

function sortByRating(){
    tableArr.sort(function(a,b){
        const nameA = Number(a.rating); // ignore upper and lowercase
        const nameB = Number(b.rating); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
        return 1;
        }
        return 0;
});
}



function filtering(){
    
    for(let opt of this.options)
    {
        if(opt.value=="quantity>100")
            {
                let filteredArr= tableArr.filter(item => item.quantity>100);
                createTable(filteredArr);
                break;
            }
        else if( opt.value=="rating>4"){
                let filteredArr= tableArr.filter(item => item.rating>4);
                createTable(filteredArr);
                break;
        }
            
        
}
}


//edit row
function edit_row(obj)
{
 obj.parentNode.children[4].style.display="none";	
 obj.parentNode.children[5].style.display="block";
 
let name=obj.parentNode.children[0];
let category=obj.parentNode.children[1];
let quantity=obj.parentNode.children[2];
let rating=obj.parentNode.children[3];
	
let name_new=name.innerHTML;
let category_new=category.innerHTML;
let quantity_new=quantity.innerHTML;
let rating_new=rating.innerHTML;
	
name.innerHTML="<input type='text' id='name_text' value='"+name_new+"'>";
category.innerHTML="<input type='text' id='category_text' value='"+category_new+"'>";
quantity.innerHTML="<input type='text' id='quantity_text' value='"+quantity_new+"'>";
rating.innerHTML="<input type='text' id='rating_text' value='"+rating_new+"'>"
}


//Save updated row
function save_row(obj) 
{

let idRow=obj.parentNode.getAttribute("id");
    
console.log(idRow);
 
 let name_val=obj.parentNode.children[0];
 console.log(name_val.value);
 let category_val=obj.parentNode.children[1].textContent;
 let quantity_val=obj.parentNode.children[2].textContent;
 let rating_val=obj.parentNode.children[3].textContent;

 tableArr.forEach(function(item){
    if(item.id==idRow)
    {
        //console.log("In forEach function")
        item.name=name_val.innerHTML;
        item.category=category_val;
        item.quantity=quantity_val;
        item.rating=rating_val;
    }
})

createTable(tableArr);
//  document.getElementById("table_row1"+id).innerHTML=name_val;
//  document.getElementById("table_row2"+id).innerHTML=category_val;
//  document.getElementById("table_row3"+id).innerHTML=quantity_val;
//  document.getElementById("table_row4"+id).innerHTML=rating_val;

obj.parentNode.children[4].style.display="block";
obj.parentNode.children[5].style.display="none";
}




function delete_row(obj)
{
    obj.parentNode.remove();
}

function initialise(){
    createTable(tableArr);
}


function createTable(myArray){

    let newTable=document.getElementsByTagName("table")[0];
    newTable.innerHTML=`<thhead>
                        <tr>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Ratings</th>
                        <th class='editTd'></th>
                        <th class='removeTd'></th>
                        </tr>
                        </thhead>`;
        myArray.forEach(function(input){
        let tableRow=document.createElement("tr");
        tableRow.setAttribute("id",input.id);
        tableRow.innerHTML="<td>"+input.name+"</td><td>"+input.category+"</td><td>"+input.quantity+"</td><td>"+ input.rating+"</td";
        //Edit Button
        let editBtn=document.createElement("button");
        editBtn.innerHTML="Edit";
        editBtn.setAttribute("name","editButton");
        editBtn.setAttribute("onclick","edit_row(this)");
        tableRow.append(editBtn);
         
        //Save Button
        let saveBtn=document.createElement("button");
        saveBtn.innerHTML="Save";
        saveBtn.setAttribute("name","saveButton");
        saveBtn.setAttribute("onclick","save_row(this)");
        tableRow.append(saveBtn);

        //Remove Button
        let removeBtn=document.createElement("button");
        removeBtn.innerHTML="Remove";
        removeBtn.setAttribute("name","removeButton");
        removeBtn.setAttribute("onclick","delete_row(this)");
        tableRow.append(removeBtn);

        newTable.append(tableRow);
    })
}


// Add new row from user input

function addRow(){
    // tableRow.setAttribute('id',`row${idVal}`);
    let itemName=document.getElementById("itemName").value;
    let itemCategory=document.getElementById("itemCategory").value;
    let quantity=document.getElementById("quantity").value;
    let rating=document.getElementById("ratings").value;
    let obj = {id: idVal, name:itemName,category:itemCategory,quantity:quantity,rating:rating}
    
    if(itemName==="" || itemCategory==="" || quantity==="" || rating==="") 
         {
            alert("Fill all the blanks");
        }
    else  if(!Number(quantity)){
            alert("Quantity has to be a number");
            document.getElementById("quantity").style.border="2px solid red";
        }
    else if(rating>10 || rating<0){
        alert("Rating can not be greater than 10 and less than 1")
    }
    else {
        tableArr.push(obj);
        createTable(tableArr);
    // document.getElementById("quantity").style.border="1px solid black";
    //     tableRow.innerHTML=`<td id='table_row1${idVal}'>${obj.name}</td><td id='table_row2${idVal}'>${obj.category}</td><td id='table_row3${idVal}'>${obj.quantity}</td> <td id='table_row4${idVal}'>${obj.rating}</td> <td class='removeTd'><button id='edit${idVal}' onclick="edit_row('${idVal}')">Edit</button></td><td class="removeTd"><button id='save${idVal}' class="saveButton" onclick="save_row('${idVal}')">Save</button></td><td class="removeTd"><button id='remove${idVal}' onclick="delete_row('${idVal}')">Remove</button></td>`;
    //     table = document.getElementsByTagName("table")[0];
    //         //console.log(document.getElementById())
    //         //console.log(tableRow.innerHTML);
    //     idVal++;
    //     table.append(tableRow);}
    //     console.log(document.getElementsByTagName("tr")[1])
    
    }
}
