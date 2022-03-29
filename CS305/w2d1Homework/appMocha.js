"use strict";

//const { title } = require("process");

//const { assert } = require("assert");

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = {findAuthors,findIDs,findTitles, addBook}; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];


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
    titl.sort();
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
        
    let newBook={
        title: title,
        author: author,
     libraryID: libraryID
    };
    library.push(newBook);
    return newBook;
}



