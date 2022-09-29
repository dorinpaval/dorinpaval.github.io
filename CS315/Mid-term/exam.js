"use strict";
let ok = true;
let body;
let tableArr = [];
let listArr = [];

window.onload = function () {
    document.getElementById("addBtn").onclick = add;
    body = document.getElementById("bodyId");
    document.getElementById("buttonId").onclick = remove;
    document.getElementById("listId").onclick = newList;
    document.getElementById("tableId").onclick = newTable;
    document.getElementById("table").onclick = descending;
}

function add() {
    let siteBox = document.getElementById("siteId");
    let addressBox = document.getElementById("addressId");
    let keywordsBox = document.getElementById("keywordsId");
    let tableChecked = document.getElementById("tableId");
    let listChecked = document.getElementById("listId");
    let emptyMsg = document.getElementsByTagName("p")[0];
    let asteriks = document.getElementsByName("span");
    let checkBoxes = document.getElementById("divCheck");
       
    console.log("My asteriks: ",asteriks);
    console.log("My empty message: ", emptyMsg);
    //conditions for input texts
    if (siteBox.value == "" || addressBox.value == "" || keywordsBox.value == "") {
        if (siteBox.value == "") {
            siteBox.style.border = "1px red solid"; //set red border
            asteriks[0].style.display = "block";  //show asteriks
        }
        else {
            siteBox.style.border = "1px black solid";
            asteriks[0].style.display = "none";
        }
        if (addressBox.value == "") {
            addressBox.style.border = "1px red solid";
            asteriks[1].style.display = "inline";
        }
        else {
            asteriks[1].style.display = "none";
            addressBox.style.border = "1px black solid";
        }

        if (keywordsBox.value == "") {
            keywordsBox.style.border = "1px red solid";
            asteriks[2].style.display = "inline";
        }
        else {
            keywordsBox.style.border = "1px black solid";
            asteriks[2].style.display = "none";
        }

        emptyMsg.style.display = "block"; // show Validation message

    }
    else {
        siteBox.style.border = "1px black solid";  // set black border as normal
        addressBox.style.border = "1px black solid";
        keywordsBox.style.border = "1px black solid";
        asteriks.forEach(item => item.style.display = "none");
        emptyMsg.style.display = "none";
        checkBoxes.style.display = "block";
    }

    if (ok = true && listChecked.checked) {
        let cuvinte = document.getElementById("keywordsId").value;
        console.log(cuvinte, " is is is ", cuvinte.length);
        let arr = cuvinte.split(",");
        console.log(cuvinte, " after after ", arr.length);
        let objList = {                         //create new obj with input values
            site: siteBox.value,
            address: addressBox.value,
            cuv: arr
        }

    listArr.push(objList);                  //push the new obj into array and then sort the array based on site name
        if (listArr.length > 1) {
            listArr.sort(function (a, b) {
                let first = a.site.toUpperCase();
                let second = b.site.toUpperCase();
                if (first > second)
                    return 1;
                if (first < second)
                    return -1;
                return 0;
            })
        }
        createList();
    }



    // create obj, push to table array and sort by site name
    if (ok = true && tableChecked.checked) {      
        //let cuvinte=document.getElementById("keywordsId").value;
        let objTable = {
            site: siteBox.value,
            address: addressBox.value,
            cuv: keywordsBox.value
        }
        tableArr.push(objTable);
        if (tableArr.length > 1) {
            tableArr.sort(function (a, b) {
                let first = a.site.toUpperCase();
                let second = b.site.toUpperCase();
                if (first > second)
                    return 1;
                if (first < second)
                    return -1;
                return 0;
            })
        }
        createTable();
    }

}


function newList() {
    let siteBox = document.getElementById("siteId").value;
    let addressBox = document.getElementById("addressId").value;
    let cuvinte = document.getElementById("keywordsId").value;
    let arr = cuvinte.split(",");
    let objList = {
        site: siteBox,
        address: addressBox,
        cuv: arr
    }
    listArr.push(objList);
    if (listArr.length > 1) {
        listArr.sort(function (a, b) {
            let first = a.site.toUpperCase();
            let second = b.site.toUpperCase();
            if (first > second)
                return 1;
            if (first < second)
                return -1;
            return 0;
        })
    }
    createList();
}


function newTable() {
    let siteBox = document.getElementById("siteId").value;
    let addressBox = document.getElementById("addressId").value;
    let keywordsBox = document.getElementById("keywordsId").value;
    let objTable = {
        site: siteBox,
        address: addressBox,
        cuv: keywordsBox
    }
    tableArr.push(objTable);
    if (tableArr.length > 1) {
        tableArr.sort(function (a, b) {
            let first = a.site.toUpperCase();
            let second = b.site.toUpperCase();
            if (first > second)
                return 1;
            if (first < second)
                return -1;
            return 0;
        })
    }
    createTable();
}

//Create Table
function createTable() {

    let myTable = document.getElementById("table");
    let header = "<tr class='tableHead'><b><td>Site Name</td><td>Keywords</td></b></tr>";
    myTable.innerHTML = header;
    let index = 1;
    for (let element of tableArr) {
        if (element.site == "amazon") {
            let newRow = "<tr><td><a href='" + element.address + "' style='color:green'>" + element.site + "</a></td><td style='color:blue;'>" + element.cuv + "</td>";
            myTable.innerHTML += newRow;
            index++;
        }
        else {
            if (index === 3) {
                let newRow = "<tr style='background-color: blue;'><td><a href='" + element.address + "'>" + element.site + "</a></td><td>" + element.cuv + "</td>";
                myTable.innerHTML += newRow;
                //console.log("I am in if");
            }
            else {
                let newRow = "<tr><td><a href='" + element.address + "'>" + element.site + "</a></td><td>" + element.cuv + "</td>";
                myTable.innerHTML += newRow;
            }
            index++;
        }
    }
    document.getElementById("buttonId").style.display = "block";
}



//Create list
function createList() {
    let myList = document.getElementById("list");
    myList.innerHTML = "";
    for (let element of listArr) {

        let anchor = document.createElement("a");
        anchor.innerHTML = element.site;
        anchor.setAttribute("href", element.address);
        myList.append(anchor);
        let uList = document.createElement("ul");
        if (element.site === "amazon") {
            anchor.setAttribute("style", "color:green")
            for (let item of element.cuv) {
                let li = document.createElement("li");
                li.innerHTML = item;
                li.setAttribute("style", "color:blue")
                uList.append(li);
            }
            let newBreak = "<br>";
            myList.innerHTML += newBreak;
        }
        else {
            for (let item of element.cuv) {
                let li = document.createElement("li");
                li.innerHTML = item;
                uList.append(li);
            }
            let newBreak = "<br>";
            myList.innerHTML += newBreak;

        }
        myList.append(uList);
    }
}


//descending 
function descending() {
    tableArr.reverse();
    console.log("Reverse array is:", tableArr)
    createTable();
}



//question 8 removes
function remove() {

    let rmv = prompt("What element should I delete?");
    if (rmv != null) {
        for (let i = 0; i < tableArr.length; i++) {
            if (tableArr[i].site == rmv) {
                //console.log("is removed");
                tableArr.splice(i, 1);
                i--;
            }
        }
        createTable();
    }

}
