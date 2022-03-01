"use strict";

//const { title } = require("process");

//const { assert } = require("assert");

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = {findAuthors,findIDs,findTitles, addBook}; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
 function showIDs() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const IDs = findIDs();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    IDs.sort();
    const IDsString = IDs.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = IDsString;
}


/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
 function showAuthors() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const authors = findAuthors();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    authors.sort();
    const authorString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorString;
}
/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titl = [];
    for(let key of library){
        titl.push(key.title);
    }
    //titles = [ "Walter Isaacson","Mockingjay: The Final Book of The Hunger Games", "The Road Ahead"];  //FIX THIS!!
    //titl.sort();
    return titl;
}

/**
 * 
 * @returns {string} the array of Authors alphabetically
 */
function findAuthors(){
    let auth = [];
    for(let key of library){
        auth.push(key.author);
    }
    auth.sort();
    return auth;
}

/**
 * 
 * @returns {number} the sorted array of books' ID
 */
function findIDs(){
    let IDs = [];
    for(let key of library){
        IDs.push(key.libraryID);
    }
    //IDs.sort((a,b)=>a-b);
    return IDs;
}
/**
 * @param {string} title name
 * @param {string} author name
 * @param {number} libraryID number
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook(title, author, libraryID){
    title = document.getElementById("title").value; //retrieves the book title from the title textbox
    //finish the implementation -- get the author, create a book object, and add to the library array
   author = document.getElementById("author").value; //retrieves the book title from the title textbox
   libraryID = document.getElementById("libraryID").value;
    
    let newBook={
        title: title,
        author: author,
     libraryID: libraryID
    };
    library.push(newBook);
    alert("I got " + newBook);
    return newBook;
}

/**
 * @returns {string} the sorted array
 */
function scramble(){
    let titlesArr=findTitles();
    let words=[];
    for(let element of titlesArr){
        words.push(element.trim().split(" "));
        //console.log(element.trim().split(" "));
    }
    //words.length.sort();
    words= get1DArray(words);
    words.sort((a,b)=> a.length-b.length);
    words= words.join("\n");
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = words;
    
}



/**
 * 
 * @param {array} arr the input
 * @returns {array} array concat
 */
function get1DArray(arr){
    return [].concat(...arr);
}