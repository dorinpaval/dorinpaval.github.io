"use strict";
window.onload=function(){
    document.getElementById
}
function edit_row(id)
{
 document.getElementById("edit"+id).style.display="none";	
 document.getElementById("save"+id).style.display="block";
 
 let name=document.getElementById("table_row1"+id);
 let category=document.getElementById("table_row2"+id);
 let quantity=document.getElementById("table_row3"+id);
 let rating=document.getElementById("table_row4"+id);
	
 let name_data=name.innerHTML;
 let category_data=category.innerHTML;
 let quantity_data=quantity.innerHTML;
 let rating_data=rating.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text'"+id+" value='"+name_data+"'>";
 category.innerHTML="<input type='text' id='category_text'"+ id+" value='"+category_data+"'>";
 quantity.innerHTML="<input type='text' id='quantity_text'"+id+" value='"+quantity_data+"'>";
 rating.innerHTML="<input type='text' id='rating_text'"+id+" value='"+rating_data+"'>"
}

function save_row(id)
{
 
 let name_val=document.getElementById("table_row1"+id).children[0].value;
 let category_val=document.getElementById("table_row2"+id).children[0].value;
 let quantity_val=document.getElementById("table_row3"+id).children[0].value;
 let rating_val=document.getElementById("table_row4"+id).children[0].value;



 document.getElementById("table_row1"+id).innerHTML=name_val;
 document.getElementById("table_row2"+id).innerHTML=category_val;
 document.getElementById("table_row3"+id).innerHTML=quantity_val;
 document.getElementById("table_row4"+id).innerHTML=rating_val;

 document.getElementById("edit"+id).style.display="block";
 document.getElementById("save"+id).style.display="none";
}

function delete_row(id)
{
 document.getElementById("row"+id).outerHTML="";
}

let idVal=5;
function add(){

    let tableRow=document.createElement("tr");
    tableRow.setAttribute('id',`row${idVal}`);
    let itemName=document.getElementById("itemName").value;
    let itemCategory=document.getElementById("itemCategory").value;
    let quantity=document.getElementById("quantity").value;
    let rating=document.getElementById("ratings").value;
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
    document.getElementById("quantity").style.border="1px solid black";
    tableRow.innerHTML=`<td id='table_row1${idVal}'>${itemName}</td><td id='table_row2${idVal}'>${itemCategory}</td><td id='table_row3${idVal}'>${quantity}</td> <td id='table_row4${idVal}'>${rating}</td> <td class='removeTd'><button id='edit${idVal}' onclick="edit_row('${idVal}')">Edit</button></td><td class="removeTd"><button id='save${idVal}' class="saveButton" onclick="save_row('${idVal}')">Save</button></td><td class="removeTd"><button id='remove${idVal}' onclick="delete_row('${idVal}')">Remove</button></td>`;
    let table = document.getElementsByTagName("table")[0];
    //console.log(document.getElementById())
    console.log(tableRow.innerHTML);
    idVal++;
    table.append(tableRow);}
    }